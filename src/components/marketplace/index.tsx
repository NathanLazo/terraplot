// Utils
import { useState } from "react";

// Components
import Main from "./main/main";
import Navbar from "./navbar";

export default function Marketplace() {
  const secondaryNavigation = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Bet", href: "#" },
    { id: 3, name: "Most popular", href: "#" },
  ];
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <>
      <div>
        <main className="mx-8">
          <Navbar secondaryNavigation={secondaryNavigation} />
          <Main />
        </main>
      </div>
    </>
  );
}
