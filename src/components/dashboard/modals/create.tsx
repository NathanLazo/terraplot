/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

// UI
import { type FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";

//typed form
import { z } from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// API
import { api } from "~/utils/api";

// Auth
import { useSession } from "next-auth/react";

// Utils
import axios from "axios";

// Web3
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  clusterApiUrl,
  Connection,
  Context,
  PublicKey,
  SignatureResult,
} from "@solana/web3.js";
import {
  confirmTransactionFromBackend,
  confirmTransactionFromFrontend,
} from "../utils";

// image upload constraints for schema
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// Product schema and type
const productSchema = z.object({
  name: z.string().min(3).max(20),
  description: z.string(),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  price: z.string(),
});
type Product = z.infer<typeof productSchema>;

interface createProductProps {
  createProductModalOpen: boolean;
  setCreateProductModalOpen: (value: boolean) => void;
}
const CreateProduct: FC<createProductProps> = ({
  createProductModalOpen,
  setCreateProductModalOpen,
}) => {
  // Auth
  const { data: session } = useSession();

  const productsMutation = api.useMarketplace.upload.useMutation();

  async function signAndConfirmTransactionFe(
    network: string | undefined,
    transaction:
      | WithImplicitCoercion<string>
      | { [Symbol.toPrimitive](hint: "string"): string },
    callback: {
      (signature: any, result: any): void;
      (signatureResult: SignatureResult, context: Context): void;
    }
  ) {
    const phantom = new PhantomWalletAdapter();
    await phantom.connect();
    const rpcUrl = clusterApiUrl("devnet");
    const connection = new Connection(rpcUrl, "confirmed");
    const ret = await confirmTransactionFromFrontend(
      connection,
      transaction,
      phantom
    );
    // const checks = await connection.confirmTransaction({signature:ret},'finalised');
    console.log(ret);
    // console.log(checks);
    // await connection.confirmTransaction({
    //     blockhash: transaction.blockhash,
    //     signature: ret,
    //   });
    connection.onSignature(ret, callback, "finalized");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ret;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) });

  if (errors.name) toast.error("El nombre debe tener entre 3 y 20 caracteres");
  if (errors.image)
    toast.error("La imagen debe ser de tipo .jpg y no debe pesar mas de 5MB");

  // handle form submit
  const onSubmit: SubmitHandler<Product> = (data) => {
    const formData = new FormData();

    const attrib = [{ trait_type: "price", value: data.price }];

    formData.append("network", "devnet");
    formData.append("wallet", session?.user?.wallet as string);
    formData.append("name", data.name);
    formData.append("symbol", "TPL");
    formData.append("description", "Hi");
    formData.append("attributes", JSON.stringify(attrib));
    formData.append("external_url", "https://terraplot.lat");
    formData.append("max_supply", "0");
    formData.append("royalty", "5");
    formData.append("file", data.image[0] as File, "foto.png");

    const newPromise = new Promise((resolve, reject) => {
      axios({
        // Endpoint to send files
        url: "https://api.shyft.to/sol/v1/nft/create_detach",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": "yuNXtSyS8hhVTdkn",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },

        // Attaching the form data
        data: formData,
      })
        // Handle the response from backend here
        .then(async (res) => {
          if (res.data.success === true) {
            const transaction = res.data.result.encoded_transaction;
            const res_trac = await signAndConfirmTransactionFe(
              "devnet",
              transaction,
              () => {
                resolve("done");
              }
            );
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return {
              nftAddress: res_trac,
              image: res.data.result.url,
            };
          }
        })
        // @ts-expect-error - just any values
        .then(({ nftAddress, image }) => {
          productsMutation
            .mutateAsync({
              name: data.name,
              description: data.description,
              price: +data.price,
              image: image as string,
              hash: nftAddress as string,
              userId: session?.user?.id as string,
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });

    toast
      .promise(newPromise, {
        loading: "Creando NFT...",
        success: "NFT creado exitosamente",
        error: "Error al crear NFT",
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Transition.Root show={createProductModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setCreateProductModalOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="product_name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Product Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register("name")}
                            id="product_name"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            placeholder="Product name..."
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="product_description"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Product Description
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register("description")}
                            id="product_description"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            placeholder="Product description..."
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="product_image"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Product Image
                        </label>
                        <div className="mt-2">
                          <input
                            type="file"
                            {...register("image")}
                            id="product_image"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            placeholder="Product description..."
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="product_price"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Product Price
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            {...register("price")}
                            id="product_price"
                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            placeholder="Product description..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default CreateProduct;
