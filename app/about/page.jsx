import { PopularProducts,AboutContent, Aboutsection } from "../components";
const AboutPage = () => {
  return (
    <main className='padding'>
      <setion className='padding'>
        <Aboutsection />
      </setion>
      <section className="">
        <AboutContent/>
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
    </main>
  );
};
export default AboutPage;
