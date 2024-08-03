import Hero from '@components/Hero'
import Slide from '@components/Slide'
import Social from '@components/Social'
import './styles.css'

export const metadata = {
  title: 'Home | Julius C. Cesar',
};
export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
      </main>
    </>
  );
}
