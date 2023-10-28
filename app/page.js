import Image from "next/image";
import { Hero, PopularProducts, Testimonials, Services } from "./components";
export default function Home() {
  return (
    <main className='padding' >
      <section className='padding'>
        <Hero />
      </section>
      <section className='padding md:bg-gradient-to-r from-amber-200 via-rose-200 to-amber-300'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding md:bg-gradient-to-r from-amber-200 via-rose-200 to-amber-300'>
        <Testimonials />
      </section>
    </main>
  );
}
