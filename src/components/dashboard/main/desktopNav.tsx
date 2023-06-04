import type { FC } from "react";

import { ServerIcon } from "@heroicons/react/24/outline";

// Utils
import Avatar from "boring-avatars";

// Auth
import { useSession } from "next-auth/react";

// interface desktopNavProps {}

const DesktopNav: FC /*<desktopNavProps>*/ = ({}) => {
  const { data: session } = useSession();

  const navigation = [
    { name: "Deployments", href: "#", icon: ServerIcon, current: true },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=700"
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-zinc-800 text-white"
                            : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-zinc-800"
                >
                  <Avatar
                    size={32}
                    name={session?.user.name as string}
                    variant="beam"
                    colors={[
                      "#2C3639",
                      "#A2A378",
                      "#E5F9DB",
                      "#83764F",
                      "#A0D8B3",
                    ]}
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">{session?.user.name}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default DesktopNav;
