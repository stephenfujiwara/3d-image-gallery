import { useEffect, useRef, useState } from "react";
import {
  Image,
  Html,
  useCursor,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRoute, useLocation, setLocation } from "wouter";
import * as THREE from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

const GOLDENRATIO = 1.61803398875;

export default function Frames({ images, setSidebar }) {
  // wrapper around the the broswer's native location object
  const [location, setLocation] = useLocation();

  // check if particular route matches current location
  const [match, params] = useRoute("/items/:id");

  const active = useRef("");

  // reference to Frames group
  const ref = useRef();

  let p = new THREE.Vector3();

  // on re-render, by clicking to a "new page", I think...
  useEffect(() => {
    // if at root, then no active object
    active.current = ref.current.getObjectByName(params?.id);
    if (active.current) {
      // 1.5 good distance to add links
      active.current.parent.localToWorld(p.set(0, 0, 1.5));
    } else {
      p.set(0, 0, 6);
    }
  });

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, p, 0.33, delta);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setSidebar((prevSidebar) => {
          if (e.object === active.current) {
            return { artist: "", album: false, title: "title" };
          } else {
            return e.object.artistInfo;
          }
        });
        // if object from click event is the active frame, go to home, else move to other frame
        setLocation(
          e.object === active.current ? "/" : "/items/" + e.object.name
        );
      }}
      onPointerMissed={() => {
        setLocation("/");
        setSidebar({ artist: "", album: false, title: "title" });
      }}
    >
      {images.map((props) => {
        return <Frame key={props.url} {...props} />;
      })}
    </group>
  );
}

// in frame: look at route with params, if id === url, then render component on the side with links, youtube/spotify

function Frame({ ...props }) {
  const frame = useRef();
  const image = useRef();

  const [hovered, setHover] = useState(false);
  useCursor(hovered);

  useFrame((state, delta) => {
    // damping for color appearance
    easing.dampC(
      frame.current.material.color,
      hovered ? "#fca103" : "white",
      0.1,
      delta
    );
  });

  // scales and positions are relative to the parent component/object
  return (
    <>
      <group {...props}>
        <mesh
          name={props.url}
          artistInfo={{ ...props }}
          scale={[1, GOLDENRATIO, 0.1]}
          onPointerOut={() => setHover(false)}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHover(true);
          }}
        >
          <boxGeometry />
          <MeshReflectorMaterial color="black" />
          {/* raycast={() => null} basically makes it so that the object will not be checked for by the raycaster*/}
          <mesh
            ref={frame}
            raycast={() => null}
            position={[0, 0, 0.2]}
            scale={[0.9, 0.93, 0.9]}
          >
            <boxGeometry />
            <meshBasicMaterial color={"white"} />
          </mesh>
          <Image
            ref={image}
            url={props.url}
            raycast={() => null}
            position={[0, 0, 0.7]}
            scale={[0.9 * 0.9, 0.93 * 0.9, 0.9 * 0.9]}
          />
        </mesh>
        <Html
          raycast={() => null}
          transform
          scale={0.1}
          position={[0.55, 0.95, 0]}
        >
          <div className="desc-container">
            <h1>{"Artist: " + props.artist}</h1>
            <h1>{(props.album ? "Album: " : "Single: ") + props.title}</h1>
          </div>
        </Html>
      </group>
    </>
  );
}
