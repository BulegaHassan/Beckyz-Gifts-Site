"use client";

import Image from "next/image";
import { useState } from "react";

function ProductImage  ({ product, fill })  {
  const [loading, setLoading] = useState(true);

   return (
     <>
       {fill ? (
         <Image
           src={product?.image}
           alt={product?.name}
           fill
           className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
             loading
               ? "scale-110 blur-2xl grayscale"
               : "scale-100 blur-0 grayscale-0"
           }}`}
           onLoadingComplete={() => setLoading(false)}
         />
       ) : (
         <Image
           src={product?.image}
           alt={product?.name}
           width={400}
           height={1000}
           className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
             loading
               ? "scale-110 blur-2xl grayscale"
               : "scale-100 blur-0 grayscale-0"
           }}`}
           onLoadingComplete={() => setLoading(false)}
         />
       )}
     </>
   );
};
export default ProductImage;
