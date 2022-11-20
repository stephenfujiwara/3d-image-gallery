import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { FirstPersonControls } from "@react-three/drei";

import "./styles.css";

import Stars from "./components/Stars";
import Frames from "./components/Frames";
import Intro from "./components/Intro";
import { images } from "./components/images";

// in frame: look at route with params, if id === url, then render component on the side with links, youtube/spotify

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <color attach="background" args={[0, 0, 0]} />
        <Suspense fallback={null}>
          <pointLight position={[0, 5, 6]} intensity={1.8} />
          <Stars />
          {/*<Prism position={[0, -1, 0]} rotation-y={Math.PI / 4} scale={0.5} />
          <Text />*/}
          <Frames images={images} />
          <FirstPersonControls
            makeDefault
            lookVertical={false}
            lookSpeed={0.1}
            enabled={true}
            movementSpeed={0}
          />
          <Intro />
        </Suspense>
      </Canvas>
    </div>
  );
}
