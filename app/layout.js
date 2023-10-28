import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "./components";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
import script from "./js/script";
import { Providers } from "./providers";
export const metadata = {
  title: "Beckys flowers ",
  description: "gifts worth it",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        className='sm:bg-pink-300 md:bg-gradient-to-r from-rose-200 via-amber-200 to-rose-300'
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Script src={script} />
        </Providers>
      </body>
    </html>
  );
}
