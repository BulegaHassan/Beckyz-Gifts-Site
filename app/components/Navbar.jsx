import { links } from "../constants";
import Image from "next/image";
import Logo from "../assets/icons/logo.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* Icon */}
        <div className='pt-2'>
          <Image src={Logo} alt='Becky Flowers Logo' width={200} />
        </div>
        {/* links */}
        <div className='hidden space-x-6 md:flex'>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className='hover:text-darkGrayishBlue'
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href='/flowers'
          className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
        >
          Get Flowers
        </Link>
        {/* Hamburger */}
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
          className='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
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
