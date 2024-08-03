
import Slide from '@components/Slide'
import Contact from '@components/Contact'
import './styles.css'
import Image from 'next/image'
import knznsmn from '@public/knznsmn.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>

        <div className="hero-left">
            <h1 className='gradient-white'>Hi! I'm Julius</h1>
            <hr />
            <p>Tsadas asd a dafas fas dafa sda das das dasd
                asd asd a f as fasdasdasdasdas dasdas ad ad ad asd asd.
                ad asd asdasdasdasd.
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