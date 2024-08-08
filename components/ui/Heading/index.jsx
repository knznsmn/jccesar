
import styles from './Heading.module.css'

const Heading = ({title}) => {

  return (
    <h1 className={styles.heading}>{title ? title : 'Weye weye!'}</h1>
  )
}

export default Heading