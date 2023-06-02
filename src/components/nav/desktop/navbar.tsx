// Types
import type { FC } from "react";
import type { solutions, callsToAction } from "../types";

// UI
import { Popover } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";

// Components
import Logo from "../logo";
import OpenMobileNav from "./openMobileNav";
import Solutions from "./items/solutions";
import ProfileDropdown from "./items/profileDropdown";

// Utils
import Link from "next/link";

// Auth
import { useSession } from "next-auth/react";

interface navbarProps {
  solutions: solutions[];
  callsToAction: callsToAction[];
}

const Navbar: FC<navbarProps> = ({ solutions, callsToAction }) => {
  const session = useSession();

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
        <Logo />
        <OpenMobileNav />

        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <Solutions solutions={solutions} callsToAction={callsToAction} />

          <Link
            href="/marketplace"
            className="text-base font-medium text-gray-300 hover:text-gray-100"
          >
            Marketplace
          </Link>
        </Popover.Group>
        {session.status === "authenticated" ? (
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <ProfileDropdown name={session.data.user.name} />
          </div>
        ) : (
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="/auth/login"
              className="flex items-center justify-center space-x-1 text-base font-medium text-gray-300 hover:text-gray-100"
            >
              <UserIcon className="h-5 w-5" aria-hidden="true" />
              <span>Sign in</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
