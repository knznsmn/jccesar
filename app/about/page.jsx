import Image from 'next/image';
import Moment from '@components/api/Moment';
import signature from '@public/hrafnkell/signature.svg';
import moi from '@public/hrafnkell/moi.svg';
import knznsmn from '@public/hrafnkell/knznsmn.svg';
import Dualism from '@components/(about)/Dualism';
import Heading from '@components/ui/Heading';
import styles from './about.module.css';

export const metadata = {
  title: 'About Me | Julius C. Cesar',
};
export default function About() {
  
  return (
    <main>
      <section className={styles.container}>
        <article>
          <Heading title='About Me' />
        </article>

        <article className={styles.left}>
          <section>
            <h3>Hi there!</h3>
            <p>Good <Moment />. I'm Julius Cinco Cesar. I love coffee and coffee jokes.</p>
            <Image src={signature} alt="Signature" />
          </section>

          <section> 
          <h2>I Volunteer!</h2>
          <p>
            I’m on a mission to gain hands-on experience and give back to the community through volunteering. If you’re passionate about creating positive change and have a volunteer opportunity that needs enthusiastic support, I’m all ears! Let’s connect and make a meaningful impact together.
          </p>
          </section>
        </article>

      <article className={styles.right}>
        <section>
          <Image src={moi} alt="Knznsmn with his fuel." />
        </section>
      </article>
      </section>
    </main>
  );
}
