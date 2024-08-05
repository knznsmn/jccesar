import Services from '@components/(home)/Services';
import Social from '@components/Social';
import './styles.css';
const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer>
      <Services />
      <Social />
        {/* <small className='gradient'>&copy; {year} knznsmn. All rights reserved.</small> */}
    </footer>
  )
}

export default Footer