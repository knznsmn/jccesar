import Contact from '@components/Contact'
import './Introduction.modules.css'
import right from '@public/icons/angle-right.svg'

const Introduction = () => {
  
  return (
    <>
      <header className="introduction">
        <h1 className='gradient'>Hi! I'm <span className="name gradient-blanc">Julius</span>.</h1>
      </header>

      <section className='introduction'>
        <article className='intro-left'>
          <p className='pitch'><span>I</span> assist <span>individuals</span> and <span>businesses</span> in <span>designing</span>, <span>developing</span>, and <span>deploying</span> their <span>websites</span>.</p>
          </article>
          <article className='intro-right'>
            <img src={right.src} alt="Right arrow" />
        </article>
      </section>
      
      <section className="cta">
        <Contact />
      </section>
    </>
  )
}

export default Introduction
