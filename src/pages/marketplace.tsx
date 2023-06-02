import type { NextPage } from "next";
import Head from "next/head";

import MarketplaceComponent from "~/components/marketplace";

const Marketplace: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>

      <MarketplaceComponent />
    </>
  );
};

export default Marketplace;
