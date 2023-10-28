import { Product, Filters, Sort, ProductList } from "../components";

async function GiftsPage() {
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-5 xl:px-0 mt-24 padding'>
      <section className='w-full flex lg:flex-row flex-col justify-center space-x-6 padding'>
        <Filters className='' />
        <div className=''>
          <Sort />
          <ProductList />
        </div>
      </section>
    </main>
  );
}
export default GiftsPage;
