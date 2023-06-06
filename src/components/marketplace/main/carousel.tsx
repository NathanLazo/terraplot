/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
// Types
import type { Product } from "@prisma/client";
import { type FC } from "react";

// Utils
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// Components
import Background from "./background";
import Image from "next/image";

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

const Carousel: FC<{
  data: Product[];
}> = ({ data }) => {
  const transferNft = (nftHash: string) => {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "");
    myHeaders.append("Content-Type", "");

    const raw = JSON.stringify({
      network: "devnet",
      from_address: "3W5SK5geeY1VU1Gd79zovxgcCiMGe4JTudZtXpfkLS2Y",
      to_address: session,
      token_address: nftHash,
      amount: 50,
      fee_payer: "3W5SK5geeY1VU1Gd79zovxgcCiMGe4JTudZtXpfkLS2Y",
    });

    const signPromise = new Promise((resolve, reject) => {
      axios({
        // Endpoint to send files
        url: "https://api.shyft.to/sol/v1/token/transfer_detach",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "yuNXtSyS8hhVTdkn",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },

        data: raw,
      })
        .then(async (res) => {
          if (res.data.success === true) {
            const transaction = res.data.result.encoded_transaction;
            const res_trac: string = await signAndConfirmTransactionFe(
              "devnet",
              transaction,
              () => {
                resolve("success: " + res_trac);
              }
            );
          }
        })
        .catch((err) => reject(err));
    });

    toast
      .promise(signPromise, {
        loading: "Buying NFT...",
        success: "Thank you for your purchase!",
        error: "Error!!!! please try again later",
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    // @ts-expect-error -  posible null
    const slideWidth = slidesContainer.querySelector(".slide")?.clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (nextButton && prevButton && slidesContainer) {
      nextButton.addEventListener("click", () => {
        // @ts-expect-error - posible null
        slidesContainer.scrollLeft += slideWidth * 2;
      });

      prevButton.addEventListener("click", () => {
        // @ts-expect-error - posible null
        slidesContainer.scrollLeft -= slideWidth * 2;
      });
    }
  });

  return (
    <>
      <div className="relative isolate z-[100] ">
        <div className="z-[100]  mx-auto max-w-full px-4 py-12 transition-all duration-500 ease-linear md:px-8">
          <div className="relative">
            <div className="slides-container flex h-72 snap-x snap-mandatory space-x-2 overflow-hidden overflow-x-auto scroll-smooth rounded before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
              {data?.map((product, index) => (
                <button
                  className="slide z-10 aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded"
                  key={`product-${index} with hash ${product.hash}`}
                  id="slide"
                  onClick={() => {
                    transferNft(product.hash);
                  }}
                >
                  <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transition-opacity hover:opacity-80 sm:pt-48 ">
                    <Image
                      width={500}
                      height={500}
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                      src={product.image}
                      alt="mountain_image"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      <time className="mr-8">{product.name}</time>
                      <div className="-ml-4 flex items-center gap-x-4">
                        <svg
                          viewBox="0 0 2 2"
                          className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className="flex gap-x-2.5">{product.price}SOL</div>
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                      <a>
                        <span className="absolute inset-0" />
                        {product.hash.slice(0, 12)}
                      </a>
                    </h3>
                  </div>
                </button>
              ))}
            </div>
            <div className="absolute -left-4 top-0  hidden h-full items-center md:flex">
              <button
                role="button"
                className="prev group z-50 rounded-full  bg-neutral-100 px-2 py-2 text-neutral-900"
                aria-label="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 transition-all duration-200 ease-linear group-active:-translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute -right-4 top-0  hidden h-full items-center md:flex">
              <button
                role="button"
                className="next group z-50 rounded-full  bg-neutral-100 px-2 py-2 text-neutral-900"
                aria-label="next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 transition-all duration-200 ease-linear group-active:translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Background />
      </div>
    </>
  );
};
export default Carousel;
