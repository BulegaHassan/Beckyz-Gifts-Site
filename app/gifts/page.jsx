import { Product } from "../components";
async function GiftsPage() {
  const res = await fetch("http://localhost:4000/gifts");
  const products = await res.json();
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-5 xl:px-0 mt-24'>
      <section className='flex flex-col space-y-12 pb-44'>
        <h1 className='text-5xl font-bold text-center'>BECKY GIFTS</h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default GiftsPage;
