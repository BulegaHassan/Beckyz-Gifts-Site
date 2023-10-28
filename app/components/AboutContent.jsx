import story from '../assets/images/story.jpg'
import Image from 'next/image';
const AboutContent = () => {
  return (
    <div className='container my-24 mx-auto md:px-6'>
      {/* <!-- Section: Design Block --> */}
      <section className='mb-32'>
        {/* <!-- Jumbotron --> */}
        <div className='container mx-auto text-center lg:text-left xl:px-32'>
          <div className='grid items-center lg:grid-cols-2'>
            <div className='mb-12 lg:mb-0'>
              <div className='relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14'>
                <h2 className='mb-8 text-3xl font-bold'>Our story in a nutshell</h2>
                <p className='mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0'>
                  The quality we provide, on time deliveries and the unrivalled
                  overall experience we give you has a beginning.
                </p>

                <div className='mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between'>
                  <p className='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5 text-brightRed'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best team
                  </p>

                  <p className='mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5  text-brightRed'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best quality
                  </p>

                  <p className='mx-auto mb-2 flex items-center md:mx-0 lg:mb-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='2'
                      stroke='currentColor'
                      className='mr-2 h-5 w-5  text-brightRed'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    Best experience
                  </p>
                </div>

                <p className='mb-0 text-neutral-500 dark:text-neutral-300'>
                  Nestled in the heart of a picturesque town,  Gift and More 
                  traces its origins to early 2015 when its passionate owner,
                  Becky Nambuya, transformed a cozy nook into a haven of
                  heartfelt giving. With an unwavering commitment to spreading
                  joy, Becky curated a collection of unique gifts that touched
                  the soul. Over the years, this beloved shop has remained a
                  cherished destination for locals and travelers alike, a place
                  where thoughtful gifting transcends mere tradition and becomes
                  an art form. Today, under  expert guidance, it thrives
                  as a testament to the enduring magic of giving from the heart.
                </p>
              </div>
            </div>

            <div>
              <Image
                src={story}
                className='w-full rounded-lg shadow-lg dark:shadow-black/20'
                alt='boy witha gift walking in snow'
                width={853}
              />
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
};
export default AboutContent;
