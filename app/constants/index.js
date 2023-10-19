import FBLogo from '../assets/icons/icon-facebook.svg'
import YTLogo from "../assets/icons/icon-youtube.svg";
import TWLogo from '../assets/icons/icon-twitter.svg'
import PINLogo from "../assets/icons/icon-pinterest.svg";
import INSLogo from "../assets/icons/icon-instagram.svg";
import jar1 from "../assets/images/04jar.png"
import jar2 from "../assets/images/05jar.png"
import jar3 from "../assets/images/06jar.png"
import jar4 from "../assets/images/acjar.png";
import jar5 from "../assets/images/assortedcolors.png";
import jar6 from "../assets/images/damaskrose.png";
import jar7 from "../assets/images/turkishrose.png";
import jar8 from "../assets/images/trjar.png";
import truckFast from "../assets/icons/truck-fast.svg"
import shieldTick from "../assets/icons/shield-tick.svg"
import support from "../assets/icons/support.svg";
export  const links = [
  {
    id: "1",
    name: "Home",
    href: '/'
  },
  
  {
    id: "3",
    name: "Gifts",
    href: '/gifts'
  },
  {
    id: "4",
    name: "About Us",
    href: '/about'
  },
  {
    id: "5",
    name: "Contact Us",
    href: '/contact'
  },
];

export const otherLinks = [
  {
    id: "1",
    name: "Community",
    href: "/",
  },
  {
    id: "2",
    name: "Events",
    href: "/flowers",
  },
  {
    id: "3",
    name: "Privacy Policy",
    href: "/plants",
  },
];

export const logos = [
  {
    id: "1",
    logo: FBLogo,
    url: 'https://www.facebook.com'
  },
  {
    id: "2",
    logo: TWLogo,
    url: 'https://www.twitter.com'
  },
  {
    id: "3",
    logo: INSLogo,
    url: 'https://www.instagram.com'
  },
  {
    id: "4",
    logo: PINLogo,
    url: 'https://www.pinterest.com'
  },
  {
    id: "5",
    logo: YTLogo,
    url: 'https://www.youtube.com'
  },
];

export const statistics = [
  { value: "100+", label: "Products" },
  { value: "500+", label: "Customers" },
  { value: "25", label: "Outlets" },
];

export const products = [
  {
    imgURL: jar1,
    name: "Sweet Yellow Flower",
    price: "Ush20,000",
  },
  {
    imgURL: jar2,
    name: "Queen of Colors",
    price: "Ush30,000",
  },
  {
    imgURL: jar3,
    name: "Roses of Masaka",
    price: "Ush25,000",
  },
  {
    imgURL: jar4,
    name: "Red n' Yellow",
    price: "Ush70,000",
  },
  {
    imgURL: jar5,
    name: "Assorted Colors",
    price: "Ush90,000",
  },
  {
    imgURL: jar6,
    name: "Damashk Rose",
    price: "Ush79,000",
  },
  {
    imgURL: jar7,
    name: "Turkish Rose",
    price: "Ush100,000",
  },
  {
    imgURL: jar8,
    name: "Eye Attractor",
    price: "Ush99,000",
  },
];
export const testimonials = [
  {
    id:'1',
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    name: "Maria Sammy",
    role: "Supermarket Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos rend kdcnci ijvos jvodjd kncno hdkc jlc",
  },
  {
    id:'2',
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    name: "Racheal Sanders",
    role: "Certified Florist",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos rend kdcnci ijvos jvodjd kncno hdkc jlc",
  },
  {
    id:'3',
    url: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
    name: "John Doe",
    role: "Senior Decorator",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos rend kdcnci ijvos jvodjd kncno hdkc jlc",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Delivery",
    subtext: "Enjoy seamless shopping with our complimentary delivery service.",
  },
  {
    imgURL: shieldTick,
    label: "Quality Products",
    subtext:
      "Trusted quality flora.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];
