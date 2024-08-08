import styles from './Card.module.css'

const Card = ({heading, title, paragraph}) => {
  
  if (heading === 'h2') {
    return (
      <article className={styles.card}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </article>
    )
  }
  else {
    return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </article>
  )
  }
}

export default Card