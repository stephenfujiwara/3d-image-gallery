import React from "react"
import { Text3D , Center} from "@react-three/drei"

export default function Text() {
    return (
        <React.Suspense fallback={null}>
            <Center center>
                <Text3D letterSpacing={0.05} font={"/Inter_Medium_Regular.json"}>
                    <meshNormalMaterial/>
                    Hello World
                </Text3D>
            </Center>
        </React.Suspense>
    )
}