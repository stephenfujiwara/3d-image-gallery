import React from "react"
import { Text3D , Center} from "@react-three/drei"

export default function Text() {
    return (
        <React.Suspense fallback={null}>
            <Center center>
                <Text3D
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                letterSpacing={0.05}
                font={"/Inter_Medium_Regular.json"}>
                    <meshNormalMaterial/>
                    Hello World
                </Text3D>
            </Center>
        </React.Suspense>
    )
}