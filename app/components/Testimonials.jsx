import { testimonials } from "../constants"
import { TestimonialCard } from "."


const Testimonials = () => {
  return (
    <section className='py-3' id='testimonials'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mx-auto max-w-7xl  px-8 py-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {testimonials.map((testimonial) => {
          return <TestimonialCard key={testimonial.id} {...testimonial} />;
        })}
      </div>
    </section>
  );
}
export default Testimonials