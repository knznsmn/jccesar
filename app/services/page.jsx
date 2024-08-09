import Heading from '@components/ui/Heading'
import styles from './services.module.css'
import Card from '@components/ui/Card'

export const metadata = {
  title: 'Services | Julius C. Cesar',
};

const Services = () => {
  return (
    <main>
      <section>
        <article>
          <Heading title='Services' />
        </article>

        <article>
          <Card heading='h2'
                title='End-to-End Web Services'
                paragraph='ongoing support and maintenance to ensure your website runs smoothly. Committed to your success, I&apos;m always available for updates, improvements, and technical assistance.'
          />

          <Card heading='h3'
                title='Secure Hosting and Smooth Launch'
                paragraph='Utilise industry-standard Linux-based web solutions to host your website for stability, security, and optimum uptime.'
          />
        </article>
    </section>
    </main>
  )
}

export default Services
