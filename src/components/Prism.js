import React from "react";
import { Cylinder } from "@react-three/drei";

export default function Prism2(props) {
  return (
    <Cylinder args={[0, 2, 2, 4]} {...props}>
      <meshBasicMaterial />
    </Cylinder>
  );
}
