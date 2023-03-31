import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import suzanne from "./assets/models/suzanne.gltf?url"

export default function Suzanne(props) {
  const { nodes } = useGLTF(suzanne);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.19, 1]}
        onClick={() => alert("test")}
      />
    </group>
  );
}