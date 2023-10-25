import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = ({products}) => {
  return (
    <div className='flex justify-between'>
      <div className='btn-container flex justify-between gap-3'>
        <button type='button' className='text-black'>
          <BsFillGridFill />
        </button>
        <button type='button' className='text-black'>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by: </label>
        <select name='sort' id='sort' className='sort-input rounded capitalize ml-1'>
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
