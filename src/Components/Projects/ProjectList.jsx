import React from 'react'
import styled from 'styled-components'
import ProjectData from './ProjectData';




function ProjectList() {

const firstProject = ProjectData[0];
const secondProject = ProjectData[1];
const thirdProject = ProjectData[2];
const fourthtProject = ProjectData[3];
  return (
    <Mycontain>
        <div className="item">
        <p>{firstProject.Media}</p>
        <h1>{firstProject.Title}</h1>
        <em>{firstProject.Subtitle}</em><br />
      <p>{firstProject.Description}</p>
        </div>


        <div className="item">  
         <p>{secondProject.Media}</p>
         <h1> {secondProject.Title}</h1>
         <em>  {secondProject.Subtitle}</em> <br />
         <p> {secondProject.Description}</p><br />
         <p className='clicks popup'>{secondProject.Links}</p></div>


        <div className="item">  
         <p>{thirdProject.Media}</p>
         <h1>{thirdProject.Title}</h1>
        <em>{thirdProject.Subtitle}</em><br />
        <p>{thirdProject.Description}</p><br />
         <p className='clicks'>{thirdProject.Links}</p></div>


        <div className="item">  
         <p>{fourthtProject.Media}</p>
         <h1>{fourthtProject.Title}</h1>
        <em>{fourthtProject.Subtitle}</em><br />
        <p>{fourthtProject.Description}</p><br />
         <p className='clicks'>{fourthtProject.Links}</p></div>


    </Mycontain>
  )
}

export default ProjectList;


const Mycontain = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@900&display=swap');

display:grid;
z-index:5;

top:25rem;
margin-left:4rem;
grid-template-columns: repeat(auto-fill, minmax(230px, 0.5fr));
gap:20px;
max-width: 50%;
.item{
    border-radius:1rem;
    background-color: #f0f0f0;
    padding: 20px;


    h1{
    
      font-family: 'Inconsolata', monospace;
        font-size: 1.25em;
        font-weight:bolder;
        -webkit-text-stroke: 0.7px black;
    }
}



.clicks{
  display: flex;
  justify-content: space-between;
  

  a {
    text-decoration: underline;
    color: black;
    margin: auto;
  }

  a:hover {
    color: blue;
  }
}

`

