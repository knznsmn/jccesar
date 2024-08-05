'use client'
import Image from 'next/image'
import copy from '@public/icons/copy.svg'
import clip from '@public/icons/clipboard.svg'
import './styles.css'

const Contact = () => {

    let icon = copy;
    const handleCopyEmail = () => {

        const email = 'mail@jccesar.com';
        
        navigator.clipboard.writeText(email).then(() => {
        icon = clip;
        }).catch(err => {
        console.error('Failed to copy email: ', err);
        });
    };

  return (
    <div className="contact">
        
        <button className='email' onClick={handleCopyEmail}>
            Copy My Email Address
            <Image src={icon} alt="Click here to copy my email address"/>
        </button>
    </div>
  )
}

export default Contact