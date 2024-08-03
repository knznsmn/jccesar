import Hero from '@components/Hero'
import './styles.css'

export const metadata = {
  title: 'Home',
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
