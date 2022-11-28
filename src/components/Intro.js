import React from "react";
import { Html } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  return (
    <Html transform scale={1} position={[0, 0, -7]}>
      <div className="intro-container">
        <h1>My Favorite Music Right Now 🎸</h1>
        <p>
          Take a look around and explore with the mouse!
          <span className="intro-fa-container">
            <FontAwesomeIcon icon={faComputerMouse} />
          </span>
          <br />
          <br />
          Navigation can be done with some simple clicks!
          <br />
          <br />- Stephen Fujiwara
        </p>
      </div>
    </Html>
  );
}
