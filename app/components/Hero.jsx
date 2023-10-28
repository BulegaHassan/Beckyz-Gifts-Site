import { statistics } from "../constants";
import Image from "next/image";
import bigFlower from "../assets/images/tnjarbouquet.png";
const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-15 max-container '
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 mb-10'>
        <h2 className='mt-3 font-palanquin leading-none  text-8xl  font-bold'>
          <span className='xl:whitespace-nowrap relative z-10 '>
            Awesome Gifts
          </span>
          <br />
          <span className='text-brightRed inline-block '>And</span> More
        </h2>
        <p className='font-montserrat text-slate-gray text-lg leading-10 mt-6 mb-10 sm:max-w-sm'>
          Discover the best flowers for various occasions in your favorite color
          with that adorable fragrance
        </p>

        <button className='mt-0 px-6 py-3 text-white font-bold rounded bg-brightRed hover:bg-brightRedLight focus:outline-none animate-bounce'>
          <span class='relative flex h-3 w-3'>
            <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
            <span class='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
          </span>
          Get Gifts{" "}
        </button>

        <div className='flex justify-start items-start flex-wrap w-full mt-6 gap-10'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-2xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-4 font-montserrat text-amber-500'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-auto flex justify-center items-center xl:min-h-screen max-xl:py-30 '>
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
};
export default Hero;
