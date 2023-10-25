"use client";
import { products } from "../constants";
import { formatPrice, getUniqueValues } from "../constants/helpers";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
const Filters = ({ products }) => {
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
              placeholder='search'
              className='search-input'
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
                    type='button'
                    name='category'
                    className='all-btn'
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
                      data-color='all'
                      className='all-btn'
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
                    data-color={col}
                    className={`${col ? "color-btn active" : "color-btn"} `}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* end of  colors */}
          {/* price */}
          <div className='form-control'>
            <h5 className='font-bold capitalize'>price</h5>
            <p className='price'>{formatPrice(products[0].price)}</p>
            <input type='range' name='price' min='10000' max='1000000' />
          </div>
          {/* end of price */}
        </form>
        <button className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
          Clear Filters{" "}
        </button>
      </div>
    </div>
  );
};
export default Filters;
