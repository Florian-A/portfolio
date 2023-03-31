import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import margot from "./assets/models/margot.gltf?url"

export default function Magot(props) {
  const { nodes } = useGLTF(margot);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Margot.geometry}
        material={nodes.Margot.material}
        position={[0.2, -0.8, -1]}
        rotation={[4.7, 0, 3.15]}
        scale={[0.03, 0.03, 0.03]}
        onClick={() => alert("test")}
      />
    </group>
  );
}