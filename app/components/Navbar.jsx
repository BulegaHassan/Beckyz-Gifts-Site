import { links } from "../constants";
import Image from "next/image";
import Logo from "../assets/icons/becky_logo.jpeg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className='relative  mx-auto bg-gradient-to-r from-pink-500 to-amber-100'>
      <div className='flex items-center justify-center gap-8'>
        {/* Icon */}
        <div className=''>
          <Image src={Logo} alt='Becky Gifts Logo' width={75} height='auto' className="rounded-full" />
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
        <div className="justify-self-end">
          <button className='px-6 py-2 text-amber-500 rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
            Get Gifts{" "}
          </button>
        </div>
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
