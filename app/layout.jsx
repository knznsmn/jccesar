import Pulse from '@components/Pulse';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { Inter } from 'next/font/google';
import '@styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "knznsmn | Julius Cinco Cesar",
  description: "Portfolio | Julius C. Cesar",
};

function Layout({children}) {
  return (
    <html Lang="en">
      <body>
        <Pulse />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout

