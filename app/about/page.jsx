import { PopularProducts,AboutContent, Aboutsection } from "../components";
const AboutPage = () => {
  return (
    <>
      <setion className='padding'>
        <Aboutsection />
      </setion>
      <section className="">
        <AboutContent/>
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
    </>
  );
};
export default AboutPage;
