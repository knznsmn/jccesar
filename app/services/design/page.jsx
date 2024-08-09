import Card from '@components/ui/Card'
import styles from './design.module.css'
import Heading from '@components/ui/Heading'

export const metadata = {
  title: 'Design | Services',
};

const Design = () => {
  return (
    <main>
      <section className={styles.container}>
        <article>
          <Heading title='Designing Your Website' />
        </article>
      
        <article>
          <Card heading='h2'
            title='Design.'
            paragraph='Transforming designs into functional, high-performing websites.'
          />
          <Card heading='h3'
            title='Graphic & Responsive Design'
            paragraph='Utilising the latest technologies and best practices to bring your designs to life, creating responsive websites that look great on all devices.'
          />
        </article>
      </section>
    </main>
  )
}

export default Design
