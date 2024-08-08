'use client'
import {useState} from "react";
import styles from './Contact.module.css'

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
    <div className={styles.contact}>
        <button className={styles.email} onClick={handleClick}>
            {text}
        </button>
    </div>
  )
}

export default Contact