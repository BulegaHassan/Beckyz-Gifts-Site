import { products } from "../constants"
import { PopularProductCard } from "."

const PopularProducts = () => {
  return (
    <section
      id='products'
      className='max-container max-sm:mt-12 '
    >
      <div className='flex flex-col justify-center gap-5'>
        <h2 className='text-4xl font-palanquin font-bold text-center'>
          Our <span className='text-brightRed'> Popular </span> Products
        </h2>
        <p className=' mt-2 font-montserrat text-slate-gray text-2xl text-center'>
          Experience lovely masterpieces, blooming with timeless grace. Each
          petal is a vibrant brushstroke of elegance, whispering joy and
          serenity.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
export default PopularProducts