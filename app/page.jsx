
import Hero from '@components/Hero'
import styles from './page.module.css'
import Introduction from '@components/(home)/Introduction';

export const metadata = {
  title: 'Home | Julius C. Cesar',
};
export default function Home() {
  return (
    <>
      <main>
        <Introduction />
      </main>
    </>
  );
}
