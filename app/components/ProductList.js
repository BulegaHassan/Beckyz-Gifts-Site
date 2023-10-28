"use client";
import { useContext } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import { FilterContext } from "../context/filter_context";
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mb-6'>

      <h5 className="my-5">
        Sorry, no products matched your search...
      </h5>
      </div>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;    
  }
  return (
    <GridView products={products}>
      <h4>product list</h4>
    </GridView>
  );
};

export default ProductList;
