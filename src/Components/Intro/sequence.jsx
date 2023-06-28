import React, { useState, useEffect } from 'react';

const ChangeNumberSequence = () => {
  const [sequence, setSequence] = useState('');

  useEffect(() => {
    let timerId;

    const generateSequence = () => {
      const numbers = '!@,#"$%^&*()Hi,ImKwabena';
      let newSequence = '';

      if (Date.now() - startTime >= 2000) {
        setSequence("Hi, I'm Kwabena ");
        return;
      }

      for (let i = 0; i < 15; i++) {
        newSequence += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }

      setSequence(newSequence);
      timerId = setTimeout(generateSequence, 200);
    };

    const startTime = Date.now();
    timerId = setTimeout(generateSequence, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div>
     
        <p >{sequence}</p>
   
    </div>
  );
};

export default ChangeNumberSequence;
