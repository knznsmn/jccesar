import styles from './Dualism.module.css'


const Dualism = ({h2, p, svg, alt}) => {
  return (
    <section className={styles.container}>
      <article className="left">
        <h2>{h2 ? h2 : 'A section heading here'}</h2>
        <p>{p ? p : 'A paragraph is supposed to be rendered here but the motherfucker have forgotten.'}
        </p>
      </article>
			
      <article className="right">
        <Image src={svg} alt={alt} />
      </article>
    </section>
  )
}

export default Dualism
