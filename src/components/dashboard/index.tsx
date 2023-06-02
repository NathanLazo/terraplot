// Types
import type { FC } from "react";
// Utils
import { useState } from "react";

// Components
import Search from "./modals/search";
import Create from "./modals/create";
import MobileNav from "./main/mobileNav";
import DesktopNav from "./main/desktopNav";
import SearchHeader from "./main/searchHeader";
import Header from "./main/header";
import PlotList from "./main/plotList";
import Aside from "./main/aside";

const Main: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [searchProductModalOpen, setSearchProductModalOpen] = useState(false);
  const [createProductModalOpen, setCreateProductModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <>
      {/* Modals start */}
      <Search
        setSearchProductModalOpen={setSearchProductModalOpen}
        searchProductModalOpen={searchProductModalOpen}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />
      <Create
        createProductModalOpen={createProductModalOpen}
        setCreateProductModalOpen={setCreateProductModalOpen}
      />
      {/* Modals end */}
      <div>
        {/* Sidebar navigation starts */}
        <MobileNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <DesktopNav />
        {/* Sidebar navigation end */}

        {/* Main content starts */}
        <div className="xl:pl-72">
          <SearchHeader setSidebarOpen={setSidebarOpen} /> {/* Search header */}
          <main className="lg:pr-96">
            <Header /* Title, sort and create header */
              setCreateProductModalOpen={setCreateProductModalOpen}
            />
            <PlotList /> {/* Deployment list */}
          </main>
          <Aside /> {/* Activity feed */}
        </div>
        {/* Main content end */}
      </div>
    </>
  );
};

export default Main;
