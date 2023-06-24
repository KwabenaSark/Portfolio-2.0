import React from 'react';
import styled, { css } from 'styled-components';

// Styled component for the grain overlay
const Grain = styled.div`

    height: 100vh;
    background-color: '#66666e';

  
  :after {
    animation: grain 8s steps(10) infinite;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
    content: "";
    height: 300%;
    width: 300%;
    left: -100%;
    top: -110%;
    opacity: 0.8;
    position: fixed;
  }
  
  @keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(5%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(5%, 35%) }
    90% { transform:translate(-10%, 10%) }
  }`

export default Grain;
