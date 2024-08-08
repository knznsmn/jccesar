import styles from './Card.module.css'

const Card = ({title, paragraph, svg}) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </article>
  )
}

export default Card