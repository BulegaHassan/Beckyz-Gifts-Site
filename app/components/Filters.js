"use client";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import { formatPrice, getUniqueValues } from "../constants/helpers";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
const Filters = () => {
  const {
    filters: {
      text,
      category,
      color,
      min_price,
      price,
      max_price,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
const {products} = useProductsContext()
  const categories = getUniqueValues(products, "category");
  const colors = getUniqueValues(products, "colors");
  console.log(categories, colors);
  return (
    <div>
      <div className='content mb-4'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input  */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='Search'
              className='rounded text-grey-500 pl-3'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input  */}
          {/* categories  */}
          <div className='form-control'>
            <h5 className='font-bold capitalize'>category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === cat?.toLowerCase() ? "underline text-gray-800" : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories  */}

          {/* colors */}
          <div className='form-control'>
            <h5 className='font-bold capitalize'>colors</h5>
            <div className='colors'>
              {colors.map((col, index) => {
                if (col === "all") {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${
                        color === "all"
                          ? "underline mr-2 text-gray-800"
                          : "mr-2"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: col }}
                    className={`${
                      color === col ? "color-btn" : "color-btn"
                    }`}
                    data-color={col}
                    onClick={updateFilters}
                  >
                    {color === col ? <FaCheck className="text-black" /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of  colors */}
          {/* price */}
          <div className='form-control'>
            <h5 className='font-bold capitalize'>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            {/* <input type='range' name='price' min='10000' max='1000000' /> */}
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
        </form>
        <button
          className='px-6 py-2 text-white  bg-brightRedLight '
          onClick={clearFilters}
        >
          Clear Filters{" "}
        </button>
      </div>
    </div>
  );
};
export default Filters;
