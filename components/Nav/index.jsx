import Image from 'next/image'
import logo from '@public/knznsmn.svg'
import Link from 'next/link'
import styles from './Nav.module.css'

const Nav = () => {
 
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.img}
            src={logo}
            alt="knznsmn home"
          />
        </Link>
        <ul className={styles.menu}>
          {/* <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>  */}
          <li className='gradient-bleu'><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
