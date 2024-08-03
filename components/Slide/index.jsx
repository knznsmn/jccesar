
import './styles.css';
import Image from 'next/image'
import photoshop from '@public/skills/photoshop.svg'
import illustrator from '@public/skills/illustrator.svg'
import premiere from '@public/skills/premiere.svg'
import html5 from '@public/skills/html5.svg'
import css3 from '@public/skills/css3.svg'
import javascript from '@public/skills/javascript.svg'
import debian from '@public/skills/debian.svg'
import apache from '@public/skills/apache.svg'
import nginx from '@public/skills/nginx.svg'

const Slide = () => {
  return (
    <div className="card-container">
      <div className="show">

        <div className="card card-1">
          <div className="content">
            <Image src={photoshop} alt='Photoshop' />
            <Image src={illustrator} alt='Adobe Illustrator' />
            <Image src={premiere} alt='Adobe Premiere' />
          </div>
        </div>
        <div className="card card-2">
          <div className="content">
            <Image src={html5} alt='HTML5' />
            <Image src={css3} alt='CSS3' />
            <Image src={javascript} alt='JavaScript' />
          </div>
        </div>
        <div className="card card-3">
            <div className="content">
            <Image src={debian} alt='Debian Linux Server' />
            <Image src={apache} alt='Apache web server' />
            <Image src={nginx} alt='NGINX' />
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Slide
      