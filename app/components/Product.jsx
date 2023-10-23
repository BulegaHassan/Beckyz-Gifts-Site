import Link from "next/link";
import { ProductImage } from ".";
import { formatPrice } from "../constants/helpers";
const Product = ({ product }) => {
  return (
    <Link
      href={`/gifts/${product.id}`}
      className='h-96 flex flex-col p-5 rounded border border-red-500 group hover:scale-105 transition-transform ease-out duration-200'
    >
      <div className='relative max-h-72 flex-1'>
        <ProductImage product={product} fill />
      </div>

      <div className='font-semibold flex items-center justify-between mt-4 mb-1'>
        <p className='w-44 truncate'>{product.name}</p>
        <p> {formatPrice(product.price)}</p>
        
      </div>
      <button className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
        View Gift{" "}
      </button>
      
    </Link>
  );
};
export default Product;
