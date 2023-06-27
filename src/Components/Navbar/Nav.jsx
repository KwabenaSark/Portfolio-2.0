import React, { useEffect, useRef, useState } from 'react';
import { ImageContainer, NavStyle } from './NavStyle.jsx';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
  const navRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  //animation =useEffect
  useEffect(() => {
    const ani = gsap.timeline({ defaults: { duration: 1.5 } });
    ani.fromTo(navRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  //hover
  const handleHover = () => {
    setIsHovered(true);
    if (window.innerWidth <= 599) {
      setIsHovered(false);
  
     
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (window.innerWidth <= 599) {
      setIsHovered();
  
     
    }
  };

  const name = {
    T1: 'Github',
    T2: 'LinkedIn',
    T3: 'Email',
    T4: 'CV',
  };

  //screen
  if (window.innerWidth <= 599) {
    // Code to execute when screen width is 599 pixels or less
    name.T1 = '';
    name.T2 = '';
    name.T3 = '';
    name.T4 = '';

   
  }

  return (
    <>
      <NavStyle ref={navRef}>
        <ul>
          <li>
            <a
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              href="https://github.com/kwabenasark"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                target="_blank"
                className="github"
              />{' '}
              {name.T1}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kwabena-sarkodieh/">
              {' '}
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                target="_blank"
              />{' '}
              {name.T2}
            </a>
          </li>
          <li>
            <a href="mailto:kwabsark4@example.com">
              <FontAwesomeIcon icon="fa-solid fa-envelope" /> {name.T3}
            </a>
          </li>
          <li>
            <a href="/path/to/cv.pdf">
              <FontAwesomeIcon icon="fa-solid fa-file" target="_blank" />{' '}
              {name.T4}
            </a>
          </li>
        </ul>
      </NavStyle>
      <ImageContainer visible={isHovered}>
        <video autoPlay loop muted className="Vid1">
          <source src="assets/PreviewMedia/IMG_0375.mp4" type="video/mp4" />
        </video>
      </ImageContainer>
    </>
  );
}

export default Nav;
