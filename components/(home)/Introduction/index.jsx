import Contact from '@components/Contact'
import right from '@public/icons/angle-right.svg'
import styles from './Introduction.module.css'
import Link from 'next/link'

const Introduction = () => {
  
  return (
    <section className={styles.container}>
      <article>
        <h1>Hi! I'm <span className={styles.name}>Julius</span>.</h1>
      </article>

      <article className={styles.introduction}>
        <section className={styles.left}>
        <p className={styles.pitch}><span>I</span> assist <span>individuals</span> and <span>businesses</span> in <span>designing</span>, <span>developing</span>, and <span>deploying</span> their <span>websites</span>.</p>
        </section>
        <section className={styles.right}>
          <Link href='/services'><img src={right.src} alt="Right arrow" /></Link>
        </section>
      </article>
      
      <article className={styles.cta}>
        <p>Let’s chat! I'm only one mail away<br />
        &mdash; and I’d love to hear from you!</p>
        <Contact />
      </article>
    </section>
  )
}

export default Introduction
