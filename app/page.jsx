
import Hero from '@components/Hero'
import './styles.css'
import Introduction from '@components/(home)/Introduction';

export const metadata = {
  title: 'Home | Julius C. Cesar',
};
export default function Home() {
  return (
    <>
      <main className="main">
        <Introduction />
      </main>
    </>
  );
}
