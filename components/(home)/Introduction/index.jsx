import Contact from '@components/Contact'
import './styles.css'

const Introduction = () => {
  
  return (
    <section>
      <h1 className='abril gradient'>Hi! I'm <span className="name">Julius.</span></h1> 
      <p className='pitch'><span>And</span> I assist INDIVIDUALS and BUSINESSES in <span>designing</span>, <span>developing</span>, and <span>deploying</span> their <span>websites</span>.</p>
      <Contact />
    </section>
  )
}

export default Introduction
