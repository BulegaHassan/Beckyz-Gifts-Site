import { ProductImage } from "@/app/components";
import { notFound } from "next/navigation";

async function ProductPage({ params: { id } }) {
  try {
    const res = await fetch(`http://localhost:4000/gifts/${id}`);
    const product = await res.json();
    return (
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10'>
        <ProductImage product={product} />
        <div className='divide-y'>
          <div className='space-y-2 pb-8'>
            <h1 className='text-2xl md:text-4xl font-bold'>{product.name}</h1>
            <h2 className='text-gray-500 font-bold text-xl md:text-3xl'>
              Ush {" "}{product.price}
            </h2>
          </div>

          <div className='pt-8'>
            <p className='text-xs md:text-sm'>{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductPage;