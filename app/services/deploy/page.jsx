import Heading from '@components/ui/Heading'
import Card from '@components/ui/Card'
import styles from './deploy.module.css'

const Deploy = () => {
  return (
    <main>
      <section className={styles.container}>
        <article>
          <Heading title='Deploying Your Website' />
        </article>
        
        <article>
          <Card heading='h2'
              title='Deploy.'
              paragraph='The journey doesn&apos;t end with development.'
        />
        <Card heading='h3'
              title='Establish Your Online Presence'
              paragraph='I handle all aspects of deployment, ensuring your website is securely hosted, optimized for performance, and ready to engage your target audience. From setting up your domain to configuring hosting environments, I take care of everything to ensure a smooth launch.'
        />
        </article>
      </section>
    </main>
  )
}

export default Deploy
