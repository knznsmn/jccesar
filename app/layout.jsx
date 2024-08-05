import Pulse from '@components/Pulse';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { Abril_Fatface, Inter} from 'next/font/google';
import '@styles/globals.css';

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "knznsmn | Julius Cinco Cesar",
  description: "Portfolio | Julius C. Cesar",
};

function Layout({children}) {
  return (
    <html lang="en">
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

