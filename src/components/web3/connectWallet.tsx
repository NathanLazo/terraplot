/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Types
import type { FC } from "react";

// Utils
import React, { useState } from "react";

interface ConnectWalletProps {
  publicKey: string;
  setPublicKey: React.Dispatch<React.SetStateAction<string>>;
}

const ConnectWallet: FC<ConnectWalletProps> = ({ publicKey, setPublicKey }) => {
  const [connected, setConnected] = useState<boolean>(false);

  if (typeof window === "undefined") return null;
  const provider = (window as any).phantom?.solana;
  const { solana } = window as any;

  const connectWallet = () => {
    if (!provider?.isPhantom || !solana.isPhantom) {
      console.log("Phantom is not installed");
      return;
    }

    provider
      .connect()
      .then(() => {
        setConnected(true);
        setPublicKey(provider.publicKey.toString() as string);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  const disconnectWallet = () => {
    if (!provider?.isPhantom || !solana.isPhantom) {
      console.log("Phantom is not installed");
      return;
    }

    provider
      .disconnect()
      .then(() => {
        setConnected(false);
        setPublicKey("");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex w-full items-center justify-center text-gray-50">
        <div className="w-full">
          {!connected ? (
            <button
              onClick={() => {
                connectWallet();
              }}
              type="button"
              className="w-full rounded-md bg-primary-100 px-3 py-1 font-medium hover:bg-primary-200"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              type="button"
              className="w-full rounded-md bg-primary-100 px-3 py-1 font-medium hover:bg-primary-200"
              onClick={() => {
                disconnectWallet();
              }}
            >
              {publicKey &&
                `${publicKey.slice(0, 4)} ... ${publicKey.slice(-4)}`}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;
