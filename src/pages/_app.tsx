/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Types
import { type AppType } from "next/app";
import { type Session } from "next-auth";

// Auth
import { SessionProvider } from "next-auth/react";

// Backend
import { api } from "@utils/api";

// UI
import { Toaster } from "react-hot-toast";

// Components
import Nav from "@components/nav";

//Utils
import { useRouter } from "next/router";

// Styles
import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#262626",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#5A8171",
              secondary: "#fff",
            },
          },
        }}
      />
      <SessionProvider session={session}>
        <div className={spaceGrotesk.className}>
          {router.pathname !== "/dashboard" && <Nav />}
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
