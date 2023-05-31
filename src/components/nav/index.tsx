import type { FC } from "react";

import { Popover } from "@headlessui/react";
import {
  BanknotesIcon,
  TruckIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import DesktopNav from "@components/nav/desktop/navbar";
import MobileNav from "@components/nav/mobile/navbar";

const solutions = [
  {
    name: "Producers",
    description:
      "If you're a producer, we can help you get your product to market",
    href: "/home/analytics",
    icon: TruckIcon,
  },
  {
    name: "Investors",
    description:
      "If you're an investor, we can help you find the right opportunity",
    href: "/home/explore",
    icon: BanknotesIcon,
  },
];
const callsToAction = [{ name: "Contact Us", href: "#", icon: PhoneIcon }];

const index: FC = () => {
  return (
    <Popover className="relative z-50 bg-zinc-800">
      <DesktopNav solutions={solutions} callsToAction={callsToAction} />

      <MobileNav solutions={solutions} />
    </Popover>
  );
};
export default index;
