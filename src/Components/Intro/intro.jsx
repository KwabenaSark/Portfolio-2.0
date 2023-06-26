import React, { useEffect, useRef } from 'react';
import { IntroStyle } from './introStyle.jsx';
import gsap from 'gsap';
import ChangeNumberSequence from './sequence.jsx';

function Intro() {
  const introRef = useRef(null);


  
//animation 
  useEffect(() => {
    const ani = gsap.timeline({ defaults: { duration: 3 } });
    ani.fromTo(introRef.current, { y: '250%' }, { y: '0%',delay: 2 });
  }
  , []);

  return (
    <IntroStyle ref={introRef}>
      <h1><ChangeNumberSequence /></h1>
    </IntroStyle>
  );
}

export default Intro;
