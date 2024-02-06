import { useGLTF } from "@react-three/drei"

export const Model = () => {
  const { nodes , materials} = useGLTF('/Gollum3D/Gollum.glb')

  return (
    <group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.output.geometry}
      material={materials.material_1}
      position={[0, 1.489, 0]}
      rotation={[Math.PI / 2, 0, 1.258]}
    />
  </group>
  )
}

useGLTF.preload("/Gollum3D/Gollum.glb");
