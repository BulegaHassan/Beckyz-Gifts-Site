import Link from "next/link";
import { formatPrice } from "../constants/helpers";
import { url } from "../constants";
import { ProductImage } from ".";
import Image from "next/image";

import { useProductsContext } from "../context/products_context";
const ListView = ({ products }) => {    
  return (
    <div>
      {products.map((product) => {
        
        return (
          <article key={product.id} className='flex '>
            <div className='mr-6 mt-4'>              
              <Image src={product.image} alt={product.name} width={300} height={150} className="mb-3"/>
            </div>
            <div>
              <h4 className='font-semibold my-3 capitalize'>{product.name}</h4>
              <h5 className='price text-brightRed'>{formatPrice(product.price)}</h5>
              <p className="my-3">{product.description.substring(0, 81)}...</p>
              <Link
                href={`/gifts/${product.id}`}
                className='px-3 py-1 text-amber-500  bg-brightRed hover:bg-brightRedLight focus:outline-none'
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView