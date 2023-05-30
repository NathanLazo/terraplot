import type { FC } from "react";
import type { solutions, callsToAction } from "../types";

import { Popover } from "@headlessui/react";

import Logo from "../logo";
import OpenMobileNav from "./openMobileNav";

import Solutions from "./items/solutions";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

interface navbarProps {
  solutions: solutions[];
  callsToAction: callsToAction[];
}

const navbar: FC<navbarProps> = ({ solutions, callsToAction }) => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
        <Logo />
        <OpenMobileNav />

        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <Solutions solutions={solutions} callsToAction={callsToAction} />

          <Link
            href="/home/pricing"
            className="text-base font-medium text-gray-300 hover:text-gray-100"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-base font-medium text-gray-300 hover:text-gray-100"
          >
            Docs
          </Link>
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <Link
            href="/auth/login"
            className="flex items-center justify-center space-x-1 text-base font-medium text-gray-300 hover:text-gray-100"
          >
            <UserIcon className="h-5 w-5" aria-hidden="true" />
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default navbar;
