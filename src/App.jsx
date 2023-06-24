import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Apo from './Components/Avatar/3d.jsx';
import Nav from './Components/Navbar/Nav.jsx';


import Grid from './Components/Grid/Grid.jsx';
import Intro from './Components/Intro/intro.jsx';
import LoadingAnimation from './Components/anime/LoadingAnimation.jsx';



function App() {
  

 

  return (
  <div>
   
    <Nav />
    <Intro />
      <Apo />
      <Grid />
     

    </div>
  );
}

export default App;
