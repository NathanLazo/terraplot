/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// types
import { useEffect, type FC } from "react";

// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Utils
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

// Auth
import { useSession } from "next-auth/react";

// interface plotListProps {}

const statuses: {
  [key: string]: string;
} = {
  offline: "text-gray-500 bg-gray-100/10",
  online: "text-green-400 bg-green-400/10",
  error: "text-rose-400 bg-rose-400/10",
};
const environments: {
  [key: string]: string;
} = {
  Preview: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  Production: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const PlotList: FC /*<plotListProps>*/ = ({}) => {
  const router = useRouter();

  const [deployments, setDeployments] = useState<
    [
      {
        id: number;
        href: string;
        projectName: string;
        teamName: string;
        status: string;
        statusText: string;
        description: string;
        environment: string;
      }
    ]
  >([]);

  const { data: session } = useSession();

  const fetchNFTs = (wallet: string) => {
    const nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=devnet&address=${wallet}`;
    axios({
      // Endpoint to send files
      url: nftUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "yuNXtSyS8hhVTdkn",
      },
      // Attaching the form data
    })
      // Handle the response from backend here
      .then((res) => {
        setDeployments([]);
        console.log(res?.data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        res?.data.result?.map((nft) => {
          setDeployments((deployments) => [
            ...deployments,
            {
              id: nft?.mint as number,
              href: nft?.external_url as string,
              projectName: nft?.name as string,
              teamName: nft?.owner as string,
              status: "online" as string,
              statusText: "up to date" as string,
              description: nft?.description as string,
              environment: "Preview" as string,
            },
          ]);
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (session?.user?.wallet) {
      fetchNFTs(session?.user?.wallet);
    }
  }, [session?.user?.wallet]);

  return (
    <>
      <ul role="list" className="divide-y divide-white/5">
        {deployments &&
          deployments.map((deployment) => (
            <li
              key={deployment.id}
              className="relative flex w-full items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
            >
              <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                  <div
                    className={classNames(
                      statuses[deployment.status] as string,
                      "flex-none rounded-full p-1 "
                    )}
                  >
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                    <button
                      onClick={() => {
                        router.push(`/plot/${deployment.id}`).catch(() => {
                          console.log("Error");
                        });
                      }}
                      className="flex gap-x-2"
                    >
                      <span className="truncate">{deployment.teamName}</span>
                      <span className="text-gray-400">/</span>
                      <span className="whitespace-nowrap">
                        {deployment.projectName}
                      </span>
                      <span className="absolute inset-0" />
                    </button>
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                  <p className="truncate">{deployment.description}</p>
                  <svg
                    viewBox="0 0 2 2"
                    className="h-0.5 w-0.5 flex-none fill-gray-300"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="whitespace-nowrap">{deployment.statusText}</p>
                </div>
              </div>
              <div
                className={classNames(
                  environments[deployment.environment] as string,
                  "flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                )}
              >
                {deployment.environment}
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </li>
          ))}
      </ul>
    </>
  );
};
export default PlotList;
