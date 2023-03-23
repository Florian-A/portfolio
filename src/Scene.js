import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import Game3D from "./Game3D.jsx";
// import Game3D from "./Game3D";
import Model from "./suzanne";

// const Cube = ({ position, onClick }) => {
//   const mesh = useRef();

//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.x += 0.01;
//       mesh.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh
//       ref={mesh}
//       position={position}
//       onClick={(e) => {
//         e.stopPropagation();
//         onClick(position);
//       }}
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="orange" />
//     </mesh>
//   );
// };

// const Scene = () => {
//   const { camera } = useThree();

//   const handleCubeClick = (position) => {
//     const target = new THREE.Vector3(...position);
//     target.z += 5;
//     camera.position.lerp(target, 0.5);
//   };

//   return (
//     <>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Cube position={[-2, 0, 0]} onClick={handleCubeClick} />
//       <Cube position={[0, 0, 0]} onClick={handleCubeClick} />
//       <Cube position={[2, 0, 0]} onClick={handleCubeClick} />
//     </>
//   );
// };

const App = () => (
  // <Canvas
  //   camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
  //   style={{ height: "100vh", width: "100%" }}
  // >
  //   <Scene />
  // </Canvas>
  <Game3D/>
  // <Model/>
);

export default App;