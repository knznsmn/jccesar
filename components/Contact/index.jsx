'use client'
import {useState} from "react";
import './Contact.modules.css'

const Contact = () => {

    const [text, setText] = useState('Copy my email address');

    const handleClick = () => {

      const email = 'mail@jccesar.com';
      navigator.clipboard.writeText(email).then(() => {
        
        setText('Copied to clipboard!');
      }).catch(err => {
      console.error('Failed to copy email: ', err);
      });
      
    }

  return (
    <div className="contact">
        <button className='email' onClick={handleClick}>
            {text}
        </button>
    </div>
  )
}

export default Contact