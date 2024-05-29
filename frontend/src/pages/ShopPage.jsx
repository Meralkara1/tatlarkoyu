import { Fragment } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

const ShopPage = () => {
  return (
    <Fragment>
      <Categories />
      <Products />
    </Fragment>
  );
};

export default ShopPage;
