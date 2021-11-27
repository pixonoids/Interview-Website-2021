import React, { useEffect } from "react";
import * as THREE from "three";
// import * as dat from "dat.gui";
 import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
 import classes from "./girlModel.module.css";
 
const ThreeCube = () => {
 useEffect(() => {

  //Loading
// const textureLoader = new THREE.TextureLoader();


   const scene = new THREE.Scene();
   //objects
   const loader = new GLTFLoader();
loader.load(
  "./images/balika.glb",
  function (gltf) {
    
    gltf.scene.rotation.set(0, 180, 0);
    // gltf.scene.scale.set(-1);

    
    let mesh = gltf.scene
    mesh.position.x = 0;

    mesh.position.y = -2;
    mesh.rotateY(-4);
    mesh.scale.set(2,2,2)
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



  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };


  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
  
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
  
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  scene.add(camera);


 






  const renderer = new THREE.WebGLRenderer({
    // canvas: canvas,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   document.body.appendChild(renderer.domElement);
 
  //  const geometry = new THREE.BoxGeometry();
  //  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //  const cube = new THREE.Mesh(geometry, material);
  //  scene.add(cube);
 
  


   
/**
 * Animate
 */











// const clock = new THREE.Clock();
 
   const animate = function () {
     requestAnimationFrame(animate);
 
    //  cube.rotation.x += 0.01;
    //  cube.rotation.y += 0.01;
 
     renderer.render(scene, camera);
   };
 
   animate();
 }, []);
 
 return (
  //  <>
  //  <div>
  //    {/* <div></div>
  //    <section></section>
  //    <h1>Pixonoids</h1> */}
  //    <section className={classes.section}></section>
  //   <canvas className={classes.webgl}></canvas>
  //   </div>
  //  </>
  <div className={classes.container}></div>
 );


 
};


 
export default ThreeCube;