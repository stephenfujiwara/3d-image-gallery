import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei";
import * as THREE from "three";

export default function MovingLight({ vec = new THREE.Vector3(), ...props }) {
  const ref = useRef();
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    ref.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    ref.current.target.updateMatrixWorld();
  });
  return <SpotLight ref={ref} {...props} />;
}
