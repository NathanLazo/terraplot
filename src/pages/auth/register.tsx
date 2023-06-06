import type { NextPage } from "next";
import AuthContainer from "@components/auth/register";
import Head from "next/head";

const Auth: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terraplot - register</title>
      </Head>
      <AuthContainer />
    </>
  );
};

export default Auth;
