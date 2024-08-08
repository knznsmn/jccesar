import styles from './Services.module.css'

const Services = () => {
  return (
    <ul className={styles.services}>
      <li><a href="/services/design">Design.</a></li>
      <li><a href="/services/develop">Develop.</a></li>
      <li><a href="/services/deploy">Deploy.</a></li>
    </ul>
  )
}

export default Services
