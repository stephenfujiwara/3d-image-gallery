import { useRef, Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { FirstPersonControls} from "@react-three/drei"

import "./styles.css"

import Text from "./components/Text"
import Prism from "./components/Prism"
import Stars from "./components/Stars"

export default function App() {
  const ref = useRef()
  
  function stopMoving() {
    ref.current.autoForward = !ref.current.autoForward
    ref.current.activeLook = !ref.current.activeLook
    console.log(ref.current.autoForward)
  }

  return (
    <div className="canvas-container">
      <Canvas onClick={stopMoving}>
        <color attach="background" args={[0, 0, 0]}/>
        <Suspense fallback={null}>
          <FirstPersonControls ref={ref} autoForward={true} movementForward={50} lookSpeed={0.15} heightMax={0} heightCoef={0}/>
          <Stars/>
          <Text/>
          <Prism position={[0, -5, 0]} />
        </Suspense>
      </Canvas>
    </div>
  )
}