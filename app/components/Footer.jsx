import { links, otherLinks, logos } from "../constants";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/icons/becky_logo.jpeg";


const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            {" "}
            Copyright &copy; 2023, All Rights Reserved{" "}
          </div>
          <div>
            <Image
              src={Logo}
              alt='Becky Gifts Logo'
              width={100}
              height='auto'
              className='mb-3'
            />
          </div>
          <div className='flex justify-center space-x-4 '>
            {logos.map((logo) => (
              <Link href={logo.url} key={logo.id} className=''>
                <Image
                  src={logo.logo}
                  alt='logo image'
                  className='h-6 hover:fill-brightRed'
                  width='auto'
                />
              </Link>
            ))}
          </div>
        </div>
        {/* list container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white '>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className='hover:text-brightRed'
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            {otherLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className='hover:text-brightRed'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex justify-between space-x-2'>
              <input
                type='email'
                className='flex-1 px-1 rounded-full focus:outline-none'
                placeholder='Get updates with email'
              />
              <button className='px-3 py-2  text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Subscribe
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            {" "}
            Copyright &copy; 2023, All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
