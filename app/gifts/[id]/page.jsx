"use client"
import { useEffect } from "react";
import { ProductImage } from "@/app/components";
import { notFound } from "next/navigation";
import { useParams, useRouter } from "next/navigation";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa";
import { formatPrice } from "@/app/constants/helpers";
import { useProductsContext } from "@/app/context/products_context";
import { url } from "@/app/constants";

function ProductPage() {
  const id = useParams().id;
  const router = useRouter();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
    console.log("prod", product);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className='h-8 w-8 rounded-full border-2 border-dotted border-red-600 animate-spin' />
      ) : (
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row mt-24  gap-8 px-4  pb-10'>
          <ProductImage product={product} />
          <div className=''>
            <div className=''>
              <h1 className='text-xl  font-bold'>{product?.name}</h1>
              <div className='flex '>
                <h2 className='mr-3'>
                  <span className='font-bold'>Price:</span>{" "}
                  {formatPrice(product?.price)}
                </h2>
                <h2>
                  <span className='font-bold'>In Stock:</span>{" "}
                  {product?.inStock ? "True" : "Out of Stock"}
                </h2>
              </div>
            </div>
            <div className='flex items-center text-sm'>
              <span className='font-bold'>Rating:</span>{" "}
              {product?.rating && (
                <div className='flex items-center ml-2 mr-6'>
                  {/* Display 5 stars but display the rate ones as StarIconOutline  */}
                  {Array.from(
                    { length: Math.floor(product.rating) },
                    (_, i) => (
                      <StarIcon key={i} className='h-4 w-4 text-yellow-700' />
                    )
                  )}

                  {/* Display the rest of the stars as StarIconOutline  */}
                  {Array.from(
                    { length: 5 - Math.floor(product.rating) },
                    (_, i) => (
                      <StarIconOutline
                        key={i}
                        className='h-4 w-4 text-yellow-700'
                      />
                    )
                  )}
                </div>
              )}
            </div>
            <div className=' colors'>
              <span className='font-bold'>Colors: </span>{" "}
              {product?.colors?.map((col, index) => {
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: col }}
                    className={`${col ? "color-btn active" : "color-btn"} ml-2`}
                  ></button>
                );
              })}
            </div>
            <div className='pt-8 mb-8 '>
              <h2 className='font-bold'>Description</h2>
              <p className='text-xs md:text-sm'>{product?.description}</p>
            </div>
            <button className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
              Buy thru Whatsapp Biz{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
