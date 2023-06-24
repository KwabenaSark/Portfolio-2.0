import React, { useState, useEffect } from 'react';

const LoadingAnimation = () => {
  const [loadingText, setLoadingText] = useState('');
  const finalText = "Hi, I'm Kwabena";

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prevText => {
        if (prevText === finalText) {
          clearInterval(interval);
          return finalText;
        }
        
        const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Generates a random uppercase letter
        return prevText + randomChar;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{loadingText}</h1>
    </div>
  );
};

export default LoadingAnimation;
