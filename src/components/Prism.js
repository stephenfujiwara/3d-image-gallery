import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Prism(props) {
  const { nodes } = useGLTF("/prism.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cone.geometry} position={[0, 0.09, -0.09]}>
        <meshPhysicalMaterial clearcoat={1}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/prism.glb");