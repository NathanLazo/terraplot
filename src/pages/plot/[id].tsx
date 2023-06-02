import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Plot: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Plot - {id}</title>
      </Head>
    </>
  );
};

export default Plot;
