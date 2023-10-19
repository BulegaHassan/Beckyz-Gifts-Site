import { services } from "../constants";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <>
      <section>
        <h3 className='font-palanquin text-center text-4xl font-bold py-9'>
          Why 
          <span className='text-brightRed'> Choose</span>
        {' '}  Us?
        </h3>        
      </section>
      <section className='max-container flex justify-center flex-wrap gap-9'>
        {services.map((service) => (
          <ServicesCard key={service.label} {...service} />
        ))}
      </section>
    </>
  );
};
export default Services;
