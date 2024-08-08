import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import instagram from '@public/social/instagram.svg'
import linkedin from '@public/social/linkedin.svg'
import github from '@public/social/github.svg'
import styles from './Social.module.css'

const Social = () => {
  const href = {
    github: 'https://www.github.com/knznsmn',
    linked: 'https://www.linkedin.com/in/knznsmn',
    instag: 'https://www.instagram.com/knznsmn',
    facebo: 'https://www.github.com/knznsmn',
    twitte: 'https://www.x.com/knznsmn',
  }
  return (
    <div className={styles.social}>
      <Link href={href.github}><Image src={github} alt='Github' /></Link>
      <Link href={href.linked}><Image src={linkedin} alt='LinkedIn' /></Link>
      <Link href={href.instag}><Image src={instagram} alt='Instagram' /></Link>
    </div>
  )
}

export default Social
