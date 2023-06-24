import React, { useEffect, useRef } from 'react';
import { IntroStyle } from './introStyle.jsx';
import gsap from 'gsap';

function Intro() {
  const introRef = useRef(null);
//animation 
  useEffect(() => {
    const ani = gsap.timeline({ defaults: { duration: 1 } });
    ani.fromTo(introRef.current, { y: '-100%' }, { y: '0%' });
  }, []);

  return (
    <IntroStyle ref={introRef}>
      <h1>Hi, I'm Kwabena</h1>
    </IntroStyle>
  );
}

export default Intro;
