import type { NextPage } from "next";
import AuthContainer from "@components/auth/login";
import Head from "next/head";

const Auth: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terraplot - login</title>
      </Head>
      <AuthContainer />
    </>
  );
};

export default Auth;
