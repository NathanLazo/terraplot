import type { FC } from "react";

interface navProps {
  secondaryNavigation: {
    name: string;
    href: string;
  }[];
}

const Navbar: FC<navProps> = ({ secondaryNavigation }) => {
  return (
    <>
      <nav className="z-50 flex overflow-x-auto border-b border-white/10 bg-zinc-900 py-4">
        <ul
          role="list"
          className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
        >
          {secondaryNavigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-indigo-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
