"use client"
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setListView,
    setGridView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <div className='flex justify-between'>
      <div className='btn-container flex justify-between gap-3'>
        <button
          type='button'
          className={`border-solid border-2  border-gray-400 rounded px-1  ${
            grid_view ? "border-gray-500 border-4" : null
          }`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`border-solid border-2 border-gray-400 rounded px-1 ${
            !grid_view ? "border-gray-500 border-4" : null
          }`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p className='ml-2'>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>Sort By: </label>
        <select
          name='sort'
          id='sort'
          className='sort-input rounded capitalize ml-1'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </div>
  );
};
export default Sort;
