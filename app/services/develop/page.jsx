import Card from '@components/ui/Card'
import styles from './develop.module.css'
import Heading from '@components/ui/Heading'

const Develop = () => {
  return (
    <main>
      <section className={styles.container}>
        <article>
        <Heading title='Developing Your Website' />
      </article>

      <article>
        <Card heading='h2'
            title='Develop.'
            paragraph='passionate about bringing your vision to life with tailor-made websites that are not only visually stunning but also highly functional.'

      />
      <Card heading='h3'
            title='Web Development'
            paragraph='I handle all aspects of deployment, ensuring your website is securely hosted, optimized for performance, and ready to engage your audience. From setting up your domain to configuring hosting environments, I take care of everything to ensure a smooth launch.'
      />
      </article>
      </section>
      
    </main>
  )
}

export default Develop
