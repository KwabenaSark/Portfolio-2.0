import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Grain from './Grain';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

function Apo() {
  const [cameraPosition, setCameraPosition] = useState({
    x: 2,
    y: 210,
    z: 150,
  });

  const containerRef = useRef(null);
  let camera, scene, renderer, object;

  useEffect(() => {
    // Create scene
    scene = new THREE.Scene();

    // Create camera

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.set(2, 210, 150);

    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;

      if (screenWidth <= 1100) {
        gsap.to(camera.position, {
          x: camera.position.x,
          y: cameraPosition.y + scrollPosition * -0.8,
          z: cameraPosition.z - scrollPosition * 0.01,
          duration: 0.5,
        });
      }
      if (screenWidth <= 700) {
        gsap.to(camera.position, {
          x: camera.position.x,
          y: cameraPosition.y + scrollPosition * -0.4,
          z: cameraPosition.z - scrollPosition * -0.1,
          duration: 0.5,
        });
      } else if (screenWidth <= 500) {
        gsap.to(camera.position, {
          x: camera.position.x,
          y: cameraPosition.y + scrollPosition * -1.2,
          z: cameraPosition.z - scrollPosition * 0.03,
          duration: 0.5,
        });
      } else if (screenWidth <= 400) {
        //problem here
        gsap.fromTo(camera.position, {
          x: camera.position.x,
          y: cameraPosition.y + scrollPosition * -1.4,
          z: cameraPosition.z - scrollPosition * 0.4,
          duration: 0.5,
          delay: 1,
        });
      } else if (screenWidth <= 300) {
        gsap.to(camera.position, {
          x: camera.position.x,
          y: cameraPosition.y + scrollPosition * -1.8,
          z: cameraPosition.z - scrollPosition * 0.05,
          duration: 0.5,
        });
      }
      //standard
      else {
        gsap.to(camera.position, {
          x: camera.position.x,
          y: cameraPosition.y + scrollPosition * -0.4,
          z: cameraPosition.z - scrollPosition * 0.1,
          duration: 0.5,
        });
      }
    };

    //Define the desired rotation values
    const rotationX = 0; // Rotation around the x-axis
    const rotationY = Math.PI / 10; // Rotation around the y-axis
    const rotationZ = 0; // Rotation around the z-axis

    // Set the camera rotation
    camera.rotation.set(rotationX, rotationY, rotationZ);

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Create a ScrollTrigger instance
    const scrollTrigger = ScrollTrigger.create({
      onUpdate: () => {
        handleScroll();
      },
    });

    //background
    const color = new THREE.Color(1, 0.796, 0.906); // pink color
    scene.background = color;

    // Create lights
    const ambientLight = new THREE.AmbientLight(0x3e77ec, 0.45);

    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    camera.add(pointLight);
    scene.add(camera);

    const directionalLight1 = new THREE.DirectionalLight(0x00ff00, 0.7); // neon green
    directionalLight1.position.set(-2, 0, -1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xff00ff, 0.7);
    directionalLight2.position.set(1, 0, 1);
    scene.add(directionalLight2);

    //const gridHelper = new THREE.GridHelper(200, 50);
    //scene.add(gridHelper);

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight * 2);
    const container = containerRef.current;
    container.appendChild(renderer.domElement);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      '/Cool/scene.gltf',
      (gltf) => {
        object = gltf.scene;

        object.rotation.set(0.3, Math.PI / -10, 0.1);

        const screenWidth = window.innerWidth;
        if (screenWidth <= 400) {
          //problem here
          object.scale.set(1.1, 0.7, object.scale.z);
          object.position.set(30, -35, -150);
          const tl = gsap.timeline({ defaults: { duration: 3 }, delay: 1 });
          tl.fromTo(object.position, { y: -250 }, { y: -150 });
          tl.fromTo(object.position, { z: -130 }, { z: -200 });
          tl.play(); // Start the timeline animation
        } else if (screenWidth <= 700) {
          object.position.set(40, -10, -50);
          object.scale.set(1.4, 0.8, object.scale.z);

          const tl = gsap.timeline({ defaults: { duration: 3 }, delay: 1 });
          tl.fromTo(object.position, { y: -200 }, { y: -50 });

          tl.play(); // Start the timeline animation
        } else if (screenWidth <= 800) {
          object.position.set(40, -10, -15);
          object.scale.set(1.4, 0.8, object.scale.z);

          const tl = gsap.timeline({ defaults: { duration: 3 }, delay: 1 });
          tl.fromTo(object.position, { y: -200 }, { y: -50 });

          tl.play(); // Start the timeline animation
        } else {
          object.scale.set(1.6, 0.9, object.scale.z);
          object.position.set(50, -35, 0.2);

          const tl = gsap.timeline({ defaults: { duration: 3 }, delay: 1 });
          tl.fromTo(object.position, { y: -200 }, { y: -35 });

          tl.play(); // Start the timeline animation
        }

        object.traverse((child) => {
          if (child.isMesh) {
            child.material.roughness = 0.2;
          }
        });

        scene.add(object);
      },
      (xhr) => {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
      },
      () => {}
    );

    // Render function
    const render = () => {
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (object) {
        const time = Date.now() * 0.001;

        const displacement = Math.sin(time) * 0.02;

        object.position.y = object.position.y + displacement;
        object.position.x = object.position.x + displacement;
      }

      render();
    };

    let resizeTimeout;

    const onWindowResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100); // Adjust the delay (in milliseconds) to your preference
    };
    window.removeEventListener('resize', onWindowResize);

    animate();

    return () => {
      scrollTrigger.kill();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <>
      {' '}
      <div
        style={{
          transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',
        }}
        ref={containerRef}
      />{' '}
    </>
  );
}

export default Apo;
