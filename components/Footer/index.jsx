import './styles.css';

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer>
        <small className='gradient'>&copy; {year} knznsmn. All rights reserved.</small>
    </footer>
  )
}

export default Footer