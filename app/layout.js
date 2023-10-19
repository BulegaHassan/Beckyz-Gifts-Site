import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "./components";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
import script from "./js/script";
export const metadata = {
  title: "Beckys flowers ",
  description: "gifts worth it",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        className='bg-gradient-to-r from-rose-200 via-amber-200 to-rose-300'
      >
        <Navbar />
        {children}
        <Footer />
        <Script src={script} />
      </body>
    </html>
  );
}
