import Image from "next/image";
import { Hero, PopularProducts, Testimonials, Services } from "./components";
export default function Home() {
  return (
    <main>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding'>
        <Testimonials />
      </section>
    </main>
  );
}
