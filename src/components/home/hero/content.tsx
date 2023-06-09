import type { FC } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const Content: FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="z-50 mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <div className="mt-24 sm:mt-32 lg:mt-16">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-500 ring-1 ring-inset ring-indigo-500/20">
              ¿Qué hay de nuevo?
            </span>
            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
              <span>Primera version v1.0</span>
              <ChevronRightIcon
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Haz que tus parcelas sean más que solo tierra.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Compra, vende y subasta tus parcelas de forma segura y confiable en
          solana respaldado por blockchain.
        </p>
        <div className="z-50 mt-10 flex items-center gap-x-6">
          <button
            onClick={() => {
              router.push("/auth/login").catch((err) => {
                console.log("error: ", err);
              });
            }}
            className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold 
                        leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Inicia ahora
          </button>
          <a href="#" className="text-base font-semibold leading-7 text-white">
            leer más <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default Content;
