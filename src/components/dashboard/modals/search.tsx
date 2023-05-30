import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { CameraIcon, CheckIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { QrReader } from "react-qr-reader";

import type { FC } from "react";

interface searchProps {
  setSearchProductModalOpen: (value: boolean) => void;
  searchProductModalOpen: boolean;
  setSelectedProduct: (value: string) => void;
  selectedProduct: string;
}

const Search: FC<searchProps> = ({
  setSearchProductModalOpen,
  searchProductModalOpen,
  setSelectedProduct,
  selectedProduct,
}) => {

 const [qrGrabbed, setQrGrabbed] = useState(false);

  return (
    <>
      <Transition.Root show={searchProductModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setSearchProductModalOpen}>
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
                      <div>
                        <QrReader
                          onResult={(result, error) => {
                            if (result) {
                              setSelectedProduct(result?.getText() || "");
                              setQrGrabbed(true);
                              console.log(result?.getText());
                              
                            }
                          }}
                          scanDelay={100}
                          constraints={{
                            facingMode: "environment",
                          }}
                        />
                      </div>
                    {selectedProduct != "" && (
                      <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white ">
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                          <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                              <h3 className="truncate text-sm font-medium text-gray-900">
                                {selectedProduct}
                              </h3>
                              <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                activo
                              </span>
                            </div>
                            <p className="mt-1 truncate text-sm text-gray-500">
                              Vaca1
                            </p>
                          </div>
                          <img
                            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                            src="https://img.freepik.com/foto-gratis/hermosa-vaca-pasto-verde-cielo-azul_268835-3018.jpg?w=2000"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                              <button 
                              onClick={()=>{
                                setQrGrabbed(false);
                                setSelectedProduct("");
                              }}
                              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                <CameraIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Re-scan
                              </button>
                            </div>
                            <div className="-ml-px flex w-0 flex-1">
                              <button onClick={()=>{
                                console.log("view");
                              }} 
                              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                <ViewfinderCircleIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
export default Search;
