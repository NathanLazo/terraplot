import type { NextPage } from "next";
import AuthContainer from "@components/auth/login";
import Head from "next/head";

const Auth: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tlachia - login</title>
      </Head>
      <AuthContainer />
    </>
  );
};

export default Auth;
