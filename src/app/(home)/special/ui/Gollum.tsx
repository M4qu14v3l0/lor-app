'use client'

import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { OrbitControls, Stage } from "@react-three/drei"

export const Gollum = () => {
  return (
    <div className="relative h-[80vh] w-[90vw] sm:h-[70vh] sm:w-[56vw]">
      <Canvas
        
        shadows dpr={[1, 1]} camera={{ position: [10, 0, 2.5] ,fov: 40 }}             
        onCreated={({ gl }) => {
            gl.domElement.style.touchAction = "none";
          }}
        resize={{scroll:false}}
      >
        <Stage preset='rembrandt' intensity={1} environment={'forest'}>
          <Model />
          <OrbitControls autoRotate={true} enableZoom={true} />
        </Stage>
      </Canvas>
    </div>
  )
}
