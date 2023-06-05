// Types
import type { FC } from "react";

// Components
import Carousel from "./carousel";
import Products from "./products";

// Utils
import { api } from "~/utils/api";

const Main: FC = ({}) => {
  const { data } = api.useMarketplace.getLatest.useQuery();

  return (
    <>
      {/* @ts-expect-error - posible null */}
      <Carousel data={data} />
      <Products />
    </>
  );
};
export default Main;
