// Types
import type { FC } from "react";

// UI
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";

// Utils
import { toast } from "react-hot-toast";
import Avatar from "boring-avatars";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ProfileDropdownProps {
  name: string | undefined | null;
}

const profileDropdown: FC<ProfileDropdownProps> = ({ name }) => {
  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800">
                  <span className="sr-only">Open user menu</span>
                  <Avatar
                    size={32}
                    name={name as string}
                    variant="beam"
                    colors={[
                      "#2C3639",
                      "#A2A378",
                      "#E5F9DB",
                      "#83764F",
                      "#A0D8B3",
                    ]}
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-800  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-zinc-900" : "",
                          "block px-4 py-2 text-sm text-white"
                        )}
                      >
                        🤖 Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-zinc-900" : "",
                          "block px-4 py-2 text-sm text-white"
                        )}
                      >
                        ⚙️ Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          signOut().catch(() => {
                            toast.error("Error signing out 😢");
                          });
                        }}
                        className={classNames(
                          active ? "bg-zinc-900" : "",
                          "block w-full px-4 py-2 text-left text-sm text-white"
                        )}
                      >
                        👋 Sign out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        )}
      </Disclosure>
    </>
  );
};
export default profileDropdown;
