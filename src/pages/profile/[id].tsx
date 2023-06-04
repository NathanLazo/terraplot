// Types
import type { NextPage } from "next";

// Utils
import Head from "next/head";

// Container
import ProfileComponent from "@components/profile";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>TerraPlot - Profile</title>
      </Head>
      <ProfileComponent />
    </>
  );
};

export default Profile;
