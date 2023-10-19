import { statistics } from "../constants";
import Image from "next/image";
import bigFlower from "../assets/images/tnjarbouquet.png";
const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-15 max-container '
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h2 className='mt-8 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:whitespace-nowrap relative z-10 pr-10'>
            Awesome Gifts
          </span>
          <br />
          <span className='text-brightRed inline-block mt-3'>And</span> More
        </h2>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover the best flowers for various occasions in your favorite color
          with that adorable fragrance
        </p>

        <button className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
          Get Gifts{" "}
        </button>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-amber-500'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 '>
        <Image
          src={bigFlower}
          alt='big flower'
          width={710}
          height={602}
          className='object-contain relative z-10'
        />
      </div>
    </section>
  );
}
export default Hero