
import Introduction from '@components/(home)/Introduction';
import './styles.css'

export const metadata = {
  title: 'Home | Julius C. Cesar',
};
export default function About() {
  return (
    <>
      <main className="main">
        <Introduction />
      </main>
    </>
  );
}
