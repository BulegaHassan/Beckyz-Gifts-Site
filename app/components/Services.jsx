import { services } from "../constants";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className='m-12'>
      <section>
        <h3 className='font-palanquin text-center text-4xl font-bold py-9'>
          Why 
          <span className='text-brightRed'> Choose</span>
        {' '}  Us?
        </h3>        
      </section>
      <section className='max-container flex justify-center gap-6 sm:flex-wrap md:flex-nowrap'>
        {services.map((service) => (
          <ServicesCard key={service.label} {...service} />
        ))}
      </section>
    </div>
  );
};
export default Services;
