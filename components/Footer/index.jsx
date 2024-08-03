import './styles.css';
import Social from '@components/Social'
const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer>
      <Social />
        <small className='gradient'>&copy; {year} knznsmn. All rights reserved.</small>
    </footer>
  )
}

export default Footer