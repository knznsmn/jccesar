
import './about.modules.css'

export const metadata = {
  title: 'About Me | Julius C. Cesar',
};
export default function About() {
  const hours = new Date().getHours();
  let moment;

    if (hours >= 18) {
        moment = "evening";
    }
    else if (hours >= 12) {
        moment = "afternoon";
    }
    else if (hours < 12) {
        moment = "morning";
    }
    else {
        moment = "day";
    }

  console.log(hours);
  return (
      <main className="main">
          <h1 className='gradient-bleu' >About Me</h1>
          
          <section>
            <h2>Hi there! Good {moment}.</h2>
            <p>You've found me!</p>
          </section>
          <section className="volunteer">
              <p>
                  I’m on a mission to gain hands-on experience and give back to the community through volunteering. If you’re passionate about creating positive change and have a volunteer opportunity that needs enthusiastic support, I’m all ears! Let’s connect and make a meaningful impact together.
              </p>
          </section>
      </main>
  );
}
