import { links } from "../constants";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/icons/becky_logo.jpeg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=' mx-auto bg-gradient-to-r from-pink-500 to-amber-100 sticky top-0 z-20 px-2 '>
      <div className='flex items-center justify-evenly gap-8'>
        {/* Icon */}
        <div className=''>
          <Image
            src={Logo}
            alt='Becky Gifts Logo'
            width={100}
            height='auto'
            className='rounded-full -ml-10'
          />
        </div>
        {/* links */}
        <div className='hidden space-x-6 md:flex'>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className='text-brightRed hover:text-black text-2xl hover:underline decoration-white underline-offset-4'
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link className='flex -mr-10' href='#'>
          <span className='text-brightRed flex items-center relative w-6'>
            <FaShoppingCart size='2.2rem' />
            <span className='absolute -top-2 mt-1 -right-4 w-2 h-2 flex items-center justify-center rounded-full p-3 text-white bg-yellow-500 '>
              0
            </span>
          </span>
        </Link>
        <button
          id='menu-btn'
          className='block hamburger md:hidden focus:outline-none'
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      {/* Mobile-Menu */}
      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-10'
        >
          {links.map((link) => (
            <Link href={link.href} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
