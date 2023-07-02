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
    gap:5rem;
   
  
   
   
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
  

 
`;


export const ImageContainer = styled.div`
  /* Add your desired styling properties */
  width:100%;
  height: 200px;
  padding: 10px;
  position: absolute;
  z-index:80;
  top:10%;
  transition: all 0.3s ease-out;
 
  
  
  

 
  .Vid1{
    position: absolute;
    margin-left:20%;
    z-index:81;
    width: 310px;
    height: 180px;
    display:flex;
   

    border-radius:2rem;
    object-fit:cover;
    
  }

  .Vid2{
    position: absolute;
    left:31rem;
    z-index:81;
    width: 260px;
    height: 180px;

    border-radius:2rem;
    object-fit:cover;
    
  }

  .Vid3{
    position: absolute;
    left:51rem;
    z-index:81;
    width: 200px;
    height: 250px;

    border-radius:2rem;
    object-fit:cover;
    
  }

 
`;

export const Hover = styled.div`
.Vid1{
 
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
 
}

.Vid2{
 
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
 
  
}

.Vid3{
 
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
 
  
}
`


export default NavStyle;
