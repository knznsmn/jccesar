import Card from '@components/ui/Card'
import styles from './develop.module.css'
import Heading from '@components/ui/Heading'

export const metadata = {
  title: 'Develop | Services',
};

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
              paragraph='Whether you need a sleek portfolio, a dynamic e-commerce platform, or a comprehensive business site, I combine creativity with cutting-edge technology to craft a digital presence that truly reflects your brand.'
          />
        </article>
      </section>
      
    </main>
  )
}

export default Develop
