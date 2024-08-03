'use client'
import React, { useEffect, useRef, useState } from 'react';
import './styles.css'

const words = ["Design", "Develop", "Deploy"];
const typingSpeed = 5150; // Speed of typing effect in ms
const deletingSpeed = 5175; // Speed of deleting effect in ms
const delayBetweenWords = 5500;

const Typewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsInViewport(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isInViewport) return;

    let timeout;
    const type = () => {
      const fullText = words[currentWordIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (isDeleting) {
        timeout = setTimeout(type, deletingSpeed);
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setLoopNum((prevLoop) => prevLoop + 1);
        }
      } else {
        timeout = setTimeout(type, typingSpeed);
        if (displayText === fullText) {
          setIsDeleting(true);
          timeout = setTimeout(type, delayBetweenWords);
        }
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, isInViewport]);

  return (
    <div className="typewriter-container" ref={textRef}>
      <span className="typewriter-text gradient">{displayText}</span>
    </div>
  )
}

export default Typewriter
