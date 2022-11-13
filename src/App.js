import { useRef, Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { FirstPersonControls, OrbitControls, FlyControls} from "@react-three/drei"

import "./styles.css"

import Text from "./components/Text"
import Prism from "./components/Prism"
import Stars from "./components/Stars"
import Frame from "./components/Frame"

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{position : [0, 0, 6]}}>
        <color attach="background" args={[255, 255, 255]}/>
        <Suspense fallback={null}>
          <FirstPersonControls movementSpeed={0} lookVertical={false} lookSpeed={0.05}/>
          <Stars/>
          <Text/>
          <Prism position={[0, -1, 0]} rotation-y={Math.PI / 4} scale={0.5} />
          <Frame position={[3, 0, 4]} rotation={[0, -Math.PI / 2.5, 0]} url={"./tohji-t-mix-cover-art.jpg"}/>
        </Suspense>
      </Canvas>
    </div>
  )
}