import type { FC } from "react";

// Utils
import Link from "next/link";

// Images
import Image from "next/image";
import Logo from "@images/logos/tlachia-black.svg";

const logo: FC = () => {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href="/">
        <span className="sr-only">Tlachia</span>
        <Image
          className="h-10 w-auto sm:h-10"
          src={Logo as string}
          alt="Logo tlachia"
        />
      </Link>
    </div>
  );
};
export default logo;
