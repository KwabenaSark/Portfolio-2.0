import React, { useEffect, useRef, useState } from 'react';
import { Hover, ImageContainer, NavStyle } from './NavStyle.jsx';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Nav() {
  const navRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const CvImage = "/PreviewMedia/cv.png";
  const LinkedinImage ="/PreviewMedia/linkedin.mp4";
  const GithubImage ="/PreviewMedia/github.mp4";
  //animation =useEffect
  useEffect(() => {
    const ani = gsap.timeline({ defaults: { duration: 1.5 } });
    ani.fromTo(navRef.current, { opacity: 0 }, { opacity: 1 });

    //nav appearance
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  //hover github
  const handleHover = () => {
    setIsHovered(true);
    if (window.innerWidth <= 599) {
      setIsHovered(false);
    }};

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (window.innerWidth <= 599) {
        setIsHovered();
      }
    };

//hover linkedin
  
  const handleHover1 = () => {
    setIsHovered1(true);
    if (window.innerWidth <= 599) {
      setIsHovered1(false);
    }
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
    if (window.innerWidth <= 599) {
      setIsHovered1();
    }
  };

  //hover PDF
  const handleHover2 = () => {
    setIsHovered2(true);
    if (window.innerWidth <= 599) {
      setIsHovered2(false);
    }
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
    if (window.innerWidth <= 599) {
      setIsHovered2();
    }
  };


  //dynamic naming
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
    <div
      className={isVisible ? 'grid-visible' : 'grid-hidden'}
      style={{ transition: 'opacity 0.5s', opacity: isVisible ? 1 : 0 }}
    >
      <NavStyle ref={navRef}>
        <ul>
          <li>
            <a
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              href="https://github.com/kwabenasark"
              target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                target="_blank"
                className="github"
                href="https://github.com/kwabenasark"
              />{' '}
              {name.T1}
            </a>
          </li>
          <li>
            <a
              onMouseEnter={handleHover1}
              onMouseLeave={handleMouseLeave1}
              href="https://www.linkedin.com/in/kwabena-sarkodieh/"
              target="_blank"
            >
              {' '}
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/kwabena-sarkodieh/"
              />{' '}
              {name.T2}
            </a>
          </li>
          <li>
            <a href="mailto:kwabsark4@example.com">
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
                href="mailto:kwabsark4@example.com"
              />{' '}
              {name.T3}
            </a>
          </li>
          <li>
            <a onMouseEnter={handleHover2}
              onMouseLeave={handleMouseLeave2}
            href="/path/to/cv.pdf" target="_blank">
              <FontAwesomeIcon
                icon="fa-solid fa-file"
                target="_blank"
                href="/path/to/cv.pdf"
              />{' '}
              {name.T4}
            </a>
          </li>
        </ul>
      </NavStyle>
      <ImageContainer style={{ display: window.innerWidth > 1000 ? "block" : "none" }}>
        <Hover visible={isHovered}>
          <video autoPlay loop muted className="Vid1">
            <source src={GithubImage} type="video/mp4" />
          </video>
        </Hover>

        <Hover visible={isHovered1}>
          <video autoPlay loop muted className="Vid2">
            <source src={LinkedinImage} type="video/mp4" />
          </video>
        </Hover>
        <Hover visible={isHovered2}>
          <img  className="Vid3"  src={CvImage}>
             
          </img>
        </Hover>
      </ImageContainer>
    </div>
  );
}

export default Nav;
