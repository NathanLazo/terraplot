// Types
import type { FC } from "react";

// Components
import Carousel from "./carousel";
import Products from "./products";

const Main: FC = ({}) => {
  return (
    <>
      <Carousel />
      <Products />
    </>
  );
};
export default Main;
