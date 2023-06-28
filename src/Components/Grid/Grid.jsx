import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import ProjectList from '../Projects/ProjectList';
import styled from 'styled-components';
import { Header, GridBox } from './Header';

function Grid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
    <div
      className={isVisible ? 'grid-visible' : 'grid-hidden'}
      style={{ transition: 'opacity 0.5s', opacity: isVisible ? 1 : 0 }}
    >
      <GridBox>
        <Header>Some Of My Achievements:</Header>
        <ProjectList />
        <Footer />
      </GridBox>
    </div>
  </div>
  );
}

export default Grid;
