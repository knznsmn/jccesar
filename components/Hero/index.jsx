
import Slide from '@components/Slide'
import Contact from '@components/Contact'
import Image from 'next/image'
import knznsmn from '@public/knznsmn.jpg'
import './Hero.modules.css'

const Hero = () => {
  return (
    <div className='hero-container'>

        <div className="hero-left">
            <h1 className='gradient-white'>Hi! I'm Julius</h1>
            <p>
              "I am passionate about web design and development, offering expertise in crafting and deploying websites for individuals and small businesses, enabling them to establish a robust online presence."
            </p>
            <h2 className='gradient-white'>Design. Develop. Deploy.</h2>
            <Slide />
        </div>
        <div className='hero-right'>
            <Image src={knznsmn} alt="Julius Cinco Cesar" className="photo" />
            
        </div>
    </div>
  )
}

export default Hero