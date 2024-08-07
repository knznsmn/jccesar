import Contact from '@components/Contact'
import './Introduction.modules.css'

const Introduction = () => {
  
  return (
    <section>
      <h1 className='introduction gradient'>Hi! I'm <span className="name gradient-blanc">Julius</span>.</h1>
      <p className='pitch'><span>I</span> assist <span>individuals</span> and <span>businesses</span> in <span>designing</span>, <span>developing</span>, and <span>deploying</span> their <span>websites</span>.</p>
      <Contact />
    </section>
  )
}

export default Introduction
