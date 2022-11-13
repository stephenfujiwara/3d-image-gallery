import { useRef } from "react"
import { Image } from "@react-three/drei"

const GOLDENRATIO = 1.61803398875

export default function Frame({url, ...props}) {
    const frame = useRef()
    const image = useRef()
    // scales and positions are relative to the parent component/object
    return (
    <group  {...props}>
        <mesh scale={[1, GOLDENRATIO, 0.1]}>
            <boxGeometry/>
            <meshBasicMaterial color={"black"}/>
            <mesh ref={frame} position={[0, 0, 0.2]} scale={[0.9, 0.93, 0.9]}>
                <boxGeometry/>
                <meshBasicMaterial color={"white"}/>
                <Image ref={image} url={url} position={[0, 0, 0.7]} scale={[0.9, 0.9, 0.9]}/>
            </mesh>
        </mesh>
    </group>
    )
}

function Frames({images}) {
    // for each image object, create a frame using the given properties
    return (
        <group>
            {images.map((props) => {
                return (
                    <Frame key={props.url} {...props}/>
                )
            })}
        </group>
    )
}