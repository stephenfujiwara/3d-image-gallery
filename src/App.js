import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import "./styles.css"

import Text from "./components/Text"
import Prism from "./components/Prism"
import Prism2 from "./components/Prism2"
import Stars from "./components/Stars"

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{
        fov: 75,
        near: 0.1,
        far: 1000, 
        position: [0, 0, 10]
      }}>
        <Suspense fallback={null}>
          <OrbitControls/>
          <Stars/>
          <pointLight position={[0, 5, 5]} intensity={0.5} />
          <Text/>
          <Prism2 position={[0, -5, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

