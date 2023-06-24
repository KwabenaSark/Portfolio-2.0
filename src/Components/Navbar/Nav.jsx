import React, { useEffect, useRef } from 'react';
import { NavStyle } from './NavStyle.jsx';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Nav() {
  const navRef = useRef(null);
//animation =useEffect
  useEffect(() => {
    const ani = gsap.timeline({ defaults: { duration: 1.5 } });
    ani.fromTo(navRef.current, { opacity:0 }, {opacity:1 });
  }, []);

  return (
    <NavStyle ref={navRef}>
      <ul>
      <li><a href="https://github.com/kwabenasark"><FontAwesomeIcon icon="fa-brands fa-github" target="_blank"  />   Github</a></li>
      <li><a href="https://www.linkedin.com/in/kwabena-sarkodieh/"> <FontAwesomeIcon icon="fa-brands fa-linkedin" target="_blank"  />   LinkedIn</a></li>
      <li><a href="mailto:kwabsark4@example.com"><FontAwesomeIcon icon="fa-solid fa-envelope" />   Email</a></li>
      <li><a href="/path/to/cv.pdf"><FontAwesomeIcon icon="fa-solid fa-file" target="_blank" />   CV</a></li>
      </ul>
    </NavStyle>
  );
}

export default Nav;
