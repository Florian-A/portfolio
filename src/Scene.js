import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ObjectLoader } from 'three';

const App = () => {
  const containerRef = useRef();
  const jsonPath = './scene.json';

  useEffect(() => {
    const container = containerRef.current;

    // Initialize scene, renderer and camera
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    let camera = null;
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Load scene JSON
    const loader = new ObjectLoader();
    loader.load(jsonPath, (loadedScene) => {
      scene.add(loadedScene);

      // Add a camera manually if needed
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      scene.add(camera);

      // Inject custom scripts for each object
      injectScripts(loadedScene.children);

      // Initialize controls
      const controls = new OrbitControls(camera, renderer.domElement);

      // Start rendering the scene
      animate();

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
    });

    // Handle window resize
    const onWindowResize = () => {
      if (!camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    return () => {
      window.removeEventListener('resize', onWindowResize, false);
    };
  }, [jsonPath]);

  const injectScripts = (objects) => {
    objects.forEach((object) => {
    });
  };

  return <div ref={containerRef} />;
};

export default App;