/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import type { FC } from "react";
import { FolderPlusIcon, PlusIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

import { ethers } from "ethers";
import contractAbi from "@lib/abi.json";

interface addProps {
  createProductModalOpen: boolean;
  setCreateProductModalOpen: (value: boolean) => void;
}

const Add: FC<addProps> = ({
  createProductModalOpen,
  setCreateProductModalOpen,
}) => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const contractAddress = "0xAFaB5a1E8a2FB06A54F4C962c7079d3B5ddA57dD";

  const handleSubmit = () => {
    (window as any).ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err: any) => {
        console.log(err);
      });

    const tempProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = tempProvider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    (contract as any)
      .store(name, type, breed, description)
      .then((result: any) => {
        console.log(result);
        toast.success("Transacción exitosa");
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Error en la transacción");
      });
  };

  return (
    <>
      <Transition.Root show={createProductModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
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
            <div className="fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4  text-left shadow-xl transition-all  sm:w-full sm:max-w-sm">
                  <>
                    <form>
                      <div className="">
                        <div className="border-b border-gray-900/10 py-6">
                          <div className="flex items-center justify-center">
                            <FolderPlusIcon className="h-9 w-9 text-gray-900/50" />
                          </div>
                          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="name"
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                  id="name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="type"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Type
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  onChange={(e) => {
                                    setType(e.target.value);
                                  }}
                                  name="type"
                                  id="type"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="breed"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Breed
                              </label>
                              <div className="mt-2">
                                <input
                                  id="breed"
                                  name="breed"
                                  onChange={(e) => {
                                    setBreed(e.target.value);
                                  }}
                                  type="breed"
                                  autoComplete="breed"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="about"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  id="about"
                                  name="about"
                                  onChange={(e) => {
                                    setDescription(e.target.value);
                                  }}
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about the product.
                              </p>
                              <div className="mt-4 flex w-full justify-center">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                  }}
                                  className="mx-auto flex w-auto items-center rounded-md bg-primary-200 px-2 py-1 text-gray-100 hover:bg-primary-100"
                                >
                                  <PlusIcon className="mx-auto mr-1 h-4 w-4" />
                                  Create
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Add;
