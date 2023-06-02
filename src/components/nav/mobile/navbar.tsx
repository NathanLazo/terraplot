// Types
import type { FC } from "react";
import type { solutions } from "../types";

// Utils
import { Fragment } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

// UI
import { Popover, Transition } from "@headlessui/react";

// Images
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

// Components
import Logo from "../logo";
import CloseMobileNav from "./closeMobileNav";

// Auth
import { signOut, useSession } from "next-auth/react";

interface navbarProps {
  solutions: solutions[];
}

const Navbar: FC<navbarProps> = ({ solutions }) => {
  const router = useRouter();

  const session = useSession();

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
        <div className="divide-y-2 divide-zinc-900 rounded-lg bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <Logo />
              <CloseMobileNav />
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <Popover.Button
                    key={item.name}
                    onClick={() => {
                      void (async () => {
                        await router.push(item.href);
                      })();
                    }}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-800"
                  >
                    <item.icon
                      className="h-6 w-6 flex-shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-100">
                      {item.name}
                    </span>
                  </Popover.Button>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 px-5 py-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <Popover.Button
                onClick={() => {
                  void (async () => {
                    await router.push("/marketplace");
                  })();
                }}
                className="flex items-center text-left text-base font-medium text-gray-300 hover:text-gray-100"
              >
                <ShoppingCartIcon
                  className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-600"
                  aria-hidden="true"
                />
                Marketplace
              </Popover.Button>
              {session.status === "unauthenticated" && (
                <Popover.Button
                  onClick={() => {
                    void (async () => {
                      await router.push("/auth/login");
                    })();
                  }}
                  className="flex items-center justify-center space-x-1 text-base font-medium text-gray-300 hover:text-gray-100"
                >
                  <UserIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Sign in</span>
                </Popover.Button>
              )}
            </div>
          </div>
          <div className="space-y-6 px-5 py-6">
            <div className="grid grid-cols-3 gap-x-2 gap-y-4">
              <Popover.Button
                onClick={() => {
                  void (async () => {
                    await router.push("/marketplace");
                  })();
                }}
                className="text-left text-base  font-medium text-gray-300 hover:text-gray-100"
              >
                Profile 🤖
              </Popover.Button>
              <Popover.Button
                onClick={() => {
                  void (async () => {
                    await router.push("/marketplace");
                  })();
                }}
                className="text-left text-base  font-medium text-gray-300 hover:text-gray-100"
              >
                Settings ⚙️
              </Popover.Button>
              <Popover.Button
                onClick={() => {
                  signOut().catch(() => {
                    toast.error("Error signing out 😢");
                  });
                }}
                className="text-left text-base  font-medium text-gray-300 hover:text-gray-100"
              >
                Sign out 👋
              </Popover.Button>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
export default Navbar;
