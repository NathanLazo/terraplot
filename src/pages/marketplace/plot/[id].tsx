import type { NextPage } from "next";
import Head from "next/head";
import ProductComponent from "~/components/marketplace/product";

const Plot: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plot</title>
      </Head>

      <ProductComponent />
    </>
  );
};

export default Plot;
