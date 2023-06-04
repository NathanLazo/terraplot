// Types
import type { NextPage } from "next";

// Utils
import Head from "next/head";

// Container
import DashboardComponent from "@components/dashboard";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>TerraPlot - dashboard</title>
      </Head>
      <DashboardComponent />
    </>
  );
};

export default Dashboard;
