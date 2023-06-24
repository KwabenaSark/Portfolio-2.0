import React from 'react';
import styled from 'styled-components';

export const NavStyle = styled.div`
  backdrop-filter: blur(5px) saturate(100%);
  height: 3rem;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: rgba(255, 255, 255, 0.1);
  box-sizing: content-box;
  -webkit-backdrop-filter: blur(5px);
  border-top: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: grid;
  font-weight:bolder;

  

  ul{
    flex-direction: row;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align:center;
    gap:5%;
   
  
   
   
  }
  
 
  li {
    list-style: none;
    transition: 0.4s ease-in-out;
    text-align:center;
    
  }

 

  a {
    text-decoration: none;
    color: black;
    transition: 0.4s ease-in-out;
  }

  a:hover {
    margin: 0px 12px 0px 12px;
    text-decoration: underline;
  }

 
`;


export default NavStyle;
