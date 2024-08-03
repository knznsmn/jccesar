import React from 'react'
import Image from 'next/image'
import facebook from '@public/social/facebook.svg'
import instagram from '@public/social/instagram.svg'
import linkedin from '@public/social/linkedin.svg'
import github from '@public/social/github.svg'
import twitter from '@public/social/twitter.svg'
import './styles.css'

const Social = () => {
  return (
    <div className='social'>
      <Image src={github} alt='Github' />
      <Image src={linkedin} alt='LinkedIn' />
      <Image src={instagram} alt='Instagram' />
      <Image src={facebook} alt='Facebook' />
      <Image src={twitter} alt='Twitter' />
    </div>
  )
}

export default Social
