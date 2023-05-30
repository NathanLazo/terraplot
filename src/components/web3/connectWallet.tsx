import type { FC } from "react";
import React from "react";

const ConnectWallet: FC = () => {
  return (
    <>
      <div className="flex w-full items-center justify-end gap-5 text-gray-50">
        {/* {
                    connected && user?.data ? (
                        <button className='text-gray-200'
                            onClick={() => {
                                router.push('/dashboard')
                                    .catch((err) => {
                                        console.log(err);
                                    })
                            }}>
                            Dashboard
                        </button>
                    ) : null
                }
                <div className='w-full md:w-48'>
                    {
                        !connected
                            ? (
                                <button onClick={() => {
                                    onConnect()
                                }}
                                    type="button"
                                    className='bg-primary-100 hover:bg-primary-200 w-full font-medium py-1 px-3 rounded-md'
                                >
                                    Connect Wallet
                                </button>
                            )
                            : (
                                <button
                                    type="button"
                                    className='bg-primary-100 hover:bg-primary-200 w-full font-medium py-1 px-3 rounded-md'
                                    onClick={() => {
                                        disconnect()
                                            .then(() => {
                                                toast.success('Wallet disconnected')
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                                toast.error('Wallet disconnect failed')
                                            })
                                    }}
                                >
                                    {
                                        publicKey && `${publicKey.toBase58().slice(0, 4)} ... ${publicKey.toBase58().slice(-4)}`
                                    }
                                </button>
                            )
                    }
                </div> */}
      </div>
    </>
  );
};

export default ConnectWallet;
