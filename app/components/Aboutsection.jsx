const Aboutsection = () => {
  return (
    <section
      id='about-us'
      className='flex justify-center items-center  gap-10  max-container'
    >
      <div className='ml-10 flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-brightRed'> Super </span>
          <span className='text-brightRed'>Quality </span> Gifts
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          An exceptional gifts store offers vibrant blooms, expert guidance,
          and tranquil ambiance, crafting moments of joy through 
          beauty and passionately crafted gifts.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <button className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
            Our Story{" "}
          </button>
        </div>
      </div>

      <div className='mr-10 flex-1 flex justify-center items-center'>
        <div className=''>
          <div className='-m-1 flex flex-wrap md:-m-2'>
            <div className='flex w-1/2 flex-wrap'>
              <div className='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full rounded-lg object-cover object-center'
                  src='https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/618e4590a0741095275917_t0fsvi.webp'
                />
              </div>
              <div class='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  class='block h-full w-full rounded-lg object-cover object-center'
                  src='https://res.cloudinary.com/didlxgowc/image/upload/209579038_10158403515473277_8242365296733414865_n.jpg_ciobfk.jpg'
                />
              </div>
              <div class='w-full p-1 md:p-2'>
                <img
                  alt='gallery'
                  class='block h-full w-full rounded-lg object-cover object-center'
                  src='https://res.cloudinary.com/didlxgowc/image/upload/120344771_10157824946873277_470194270377792085_n.jpg_apstt8.jpg'
                />
              </div>
            </div>
            <div class='flex w-1/2 flex-wrap'>
              <div class='w-full p-1 md:p-2'>
                <img
                  alt='gallery'
                  class='block h-full w-full rounded-lg object-cover object-center'
                  src='https://res.cloudinary.com/didlxgowc/image/upload/253411461_10158621757453277_1867414621911677096_n.jpg_sr0t7j.jpg'
                />
              </div>
              <div class='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  class='block h-full w-full rounded-lg object-cover object-center'
                  src='https://res.cloudinary.com/didlxgowc/image/upload/252351058_10158633590988277_7917329218506464257_n.jpg_scglja.jpg'
                />
              </div>
              <div class='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  class='block h-full w-full rounded-lg object-cover object-center'
                  src='https://res.cloudinary.com/didlxgowc/image/upload/233204646_10158472555758277_5728865856444065244_n.jpg_jrgmkv.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Aboutsection;
