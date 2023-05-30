import type { FC } from "react";

import { Popover } from "@headlessui/react";
import {
  ArrowPathIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import DesktopNav from "@components/nav/desktop/navbar";
import MobileNav from "@components/nav/mobile/navbar";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better review about your products.",
    href: "/home/analytics",
    icon: ChartBarIcon,
  },
  {
    name: "Traceability",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/home/traceability",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "/home/security",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "/home/integrations",
    icon: Squares2X2Icon,
  },
  {
    name: "Explore",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/home/explore",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Us", href: "#", icon: PhoneIcon },
];

const index: FC = () => {
  return (
    <Popover className="relative z-50 bg-zinc-800">
      <DesktopNav solutions={solutions} callsToAction={callsToAction} />

      <MobileNav solutions={solutions} />
    </Popover>
  );
};
export default index;
