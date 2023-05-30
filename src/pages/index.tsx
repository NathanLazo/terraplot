// Types
import { type NextPage } from 'next';

// Utils
import React from 'react';
import Head from 'next/head';

// Container
import Home from '~/components/home';


const Index: NextPage = () => {

  return (
    <>
      <Head>
        <title>Tlachia - home</title>
        <meta name="description" content="Tlachia home page" />
      </Head>

      <Home />

    </>
  );
};
export default Index;
