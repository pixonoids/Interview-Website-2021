import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import classes from "./cube.module.css";


function Cube() {
    const ref = useRef();

    useEffect(() => {
      const scene = new THREE.Scene();




      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.x = 1;
  camera.position.y = 0;
  camera.position.z = 4;

      const renderer = new THREE.WebGLRenderer({
        // canvas: canvas,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      ref.current.appendChild(renderer.domElement);
      
      const loader = new GLTFLoader();
loader.load(
  "./images/balika.glb",
  function (gltf) {
    
    gltf.scene.rotation.set(0, 180, 0);
    // gltf.scene.scale.set(-1);

    
    let mesh = gltf.scene
    mesh.position.x = 3;

    mesh.position.y = -4.2;
    mesh.rotateY(-4);
    mesh.scale.set(3,3,3)
    scene.add(mesh);

    

    /**
     * Animate
     */

    document.addEventListener("mousemove", onDocumentMouseMove);

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    const updateMesh = (event) => {
        mesh.position.y = window.scrollY * 0.001;
      };

    window.addEventListener("scroll", updateMesh);

    //this affect the movement by viewport

    const world = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      // const elapsedTime = clock.getElapsedTime();

      // Update objects
      // mesh.rotation.y = 0.5 * elapsedTime;

      mesh.rotation.y += 1* (targetX - mesh.rotation.y);
     
      mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);
      // mesh.position.z += -0.05 * (targetY - mesh.rotation.x);

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(world);
    };
    world();
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log(error);
  }
);


  // Lights

  const pointLight = new THREE.PointLight(0xffffff, 0.1);
  pointLight.position.x = 2;
  pointLight.position.y = 3;
  pointLight.position.z = 4;
  scene.add(pointLight);
  
     //Light2
  const pointLight2 = new THREE.PointLight(0xffffff, 2);
  pointLight2.position.set(-1.03, 0.52, 0.91);
  pointLight2.intensity = 2.84;
  scene.add(pointLight2);
  
  
     //Light3
  const pointLight3 = new THREE.PointLight(0xffffff, 2);
  pointLight3.position.set(6, 0.72, 0.46);
  pointLight3.intensity = 2.95;
  scene.add(pointLight3);



      return () => {
        // Callback to cleanup three js, cancel animationFrame, etc
    }
  }, []);

  return (
      <>
  <div className={classes.container}>
  <div ref={ref} />
  </div>
  </>
  
  
  
  );
}









export default Cube
