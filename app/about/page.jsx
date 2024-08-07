import Moment from '@components/api/Moment';
import Image from 'next/image';
import me from '@public/hrafnkell/me.png';
import './about.modules.css'

// export const metadata = {
//   title: 'About Me | Julius C. Cesar',
// };
const About = () => {

 return (
      <main className="main">
        <section className="about-left">
          <article>
            <h1 className='gradient-bleu' >About</h1>
            <h3>Hi there!</h3>
            {/* <p>Good <Moment />. I'm Julius Cinco Cesar. I love coffee and coffee jokes.</p> */}
          </article>

          <article>
            <h2>I Volunteer!</h2>
            <p>I’m on a mission to gain hands-on experience and give back to the community through volunteering. If you’re passionate about creating positive change and have a volunteer opportunity that needs enthusiastic support, I’m all ears! Let’s connect and make a meaningful impact together.</p>
          </article>
        </section>

        <section className="about-right">
          <article>
            <Image src={me} alt='knznsmn with refueling with a glass of coffee' />
          </article>
        </section>
      </main>
  );
}

export default About