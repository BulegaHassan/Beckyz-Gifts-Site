"use client";

import { ProductImage } from "@/app/components";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { formatPrice } from "@/app/constants/helpers";
import { url } from "@/app/constants";
import { useProductsContext } from "@/app/context/products_context";
import Link from "next/link";

function Modal() {
  let [isOpen, setIsOpen] = useState(true);
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
  }, [url,id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        router.back();
      }}
      className='relative z-50'
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      {/* Full-screen scrollable container */}
      <div className='fixed inset-0 overflow-y-auto'>
        {/* Container to center the panel */}
        <div className='flex min-h-full items-center justify-center p-4'>
          {/* The actual dialog panel  */}
          <Dialog.Panel className='mx-auto max-w-3xl rounded bg-white p-10'>
            {loading ? (
              <div className='h-8 w-8 rounded-full border-2 border-dotted border-red-600 animate-spin' />
            ) : (
              <div className='flex gap-x-8 h-96'>
                {product?.image && (
                  <div className='relative w-72 h-full hidden md:inline'>
                    <ProductImage product={product} fill />
                  </div>
                )}
                <div className='flex-1 flex flex-col mt-12'>
                  <div className='flex-1'>
                    <h4 className='font-semibold'>{product?.name}</h4>
                    <p className='font-medium text-sm'>
                      {formatPrice(product?.price)}
                    </p>

                    <div className='flex items-center text-sm my-4'>
                      <p>{product?.rating}</p>
                      {product?.rating && (
                        <div className='flex items-center ml-2 mr-6'>
                          {/* Display 5 stars but display the rate ones as StarIconOutline  */}
                          {Array.from(
                            { length: Math.floor(product.rating) },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className='h-4 w-4 text-yellow-500'
                              />
                            )
                          )}

                          {/* Display the rest of the stars as StarIconOutline  */}
                          {Array.from(
                            { length: 5 - Math.floor(product.rating) },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className='h-4 w-4 text-yellow-500'
                              />
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <p className='line-clamp-5 text-sm'>
                      {product?.description}
                    </p>
                    <div className='text-sm mt-24'>
                      <button
                        onClick={() => window.location.reload()}
                        className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'
                      >
                        View Details{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
