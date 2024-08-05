import Image from 'next/image'
import logo from '@public/knznsmn.svg'
import Link from 'next/link'
import './styles.css'

const Nav = () => {
 
  return (
    <header>
      <nav>
        <Link href="/">
          <Image
            src={logo}
            alt="knznsmn home"
          />
        </Link>
        <ul className='menu gradient-white'>
          {/* <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li> */}
          <li className='gradient-roll'><Link href="/about">About Me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
