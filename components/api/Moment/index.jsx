'use client'
import { useEffect, useState } from 'react';

const Moment = () => {
  
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    let greet;

    if (hours < 12) {
      greet = 'morning';
    } else if (hours < 18) {
      greet = 'afternoon';
    } else {
      greet = 'evening';
    }
    setGreeting(greet);
  }, []);

  return (
    <span>{greeting}</span>
  );
};

export default Moment
