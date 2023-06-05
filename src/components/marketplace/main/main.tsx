// Types
import type { FC } from "react";

// Components
import Carousel from "./carousel";
import Products from "./products";

// Utils
import { api } from "~/utils/api";

const Main: FC = ({}) => {
  const { data } = api.useMarketplace.getLatest.useQuery();
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", "QEbMrBRQEP92ToRo");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    network: "mainnet-beta",
    token_addresses: [
      data?.map((product) => {
        return product.hash;
      }),
    ],
    refresh: false,
  });

  fetch("https://api.shyft.to/sol/v1/nft/read_selected", {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <>
      {/* @ts-expect-error - posible null */}
      <Carousel data={data} />
      <Products />
    </>
  );
};
export default Main;
