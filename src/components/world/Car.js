import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

const glowDarkRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.5, 0, 0), toneMapped: false })
const glowYellow = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1, 0.2), toneMapped: false })

function Car() {
    const { nodes, materials } = useGLTF("/portfolio-finished-car.glb");
  return (
    <group dispose={null}>
      <group position={[-5, 0, -5]} rotation={[Math.PI / 2, 0, -1.15]} scale={2}> 
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.Car}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.CarGlas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_2.geometry}
          material={glowYellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_3.geometry}
          material={glowDarkRed}
        />
      </group>
    </group>
  )
}

export default Car