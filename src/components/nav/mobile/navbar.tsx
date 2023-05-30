import type { FC } from "react";
import type { solutions } from "../types";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import Logo from "../logo";

import ConnectWallet from "@components/web3/connectWallet";

import CloseMobileNav from "./closeMobileNav";

interface navbarProps {
  solutions: solutions[];
}

const navbar: FC<navbarProps> = ({ solutions }) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-zinc-800 rounded-lg bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <Logo />
              <CloseMobileNav />
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-800"
                  >
                    <item.icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-100">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 px-5 py-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <a
                href="#"
                className="text-base font-medium text-gray-300 hover:text-gray-100"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-300 hover:text-gray-100"
              >
                Docs
              </a>
            </div>
            <div className="w-full">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
export default navbar;
