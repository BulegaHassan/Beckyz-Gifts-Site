import Aboutsection from "../components/Aboutsection";
import { PopularProducts } from "../components";
const AboutPage = () => {
  return (
    <>
      <setion className='padding'>
        <Aboutsection />
      </setion>
      <section className='padding'>
        <PopularProducts />
      </section>
    </>
  );
};
export default AboutPage;
