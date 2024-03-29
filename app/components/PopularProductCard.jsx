import star from '../assets/icons/star.svg'
import Image from 'next/image';
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-center gap-2.5'>
        <Image src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-1xl leading-normal font-semibold font-palanquin text-center'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-brightRed text-1xl leading-normal text-center'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
