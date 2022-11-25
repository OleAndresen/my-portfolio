import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

const hoverMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(.9, .9, .3)})

function Cat(onClick) {
    const { nodes, materials } = useGLTF("/portfolio-finished-cat.glb");

    const [hoveredCat, hoverCat] = useState(false) 
  return (
    <group dispose={null} scale={0}>
        <group position={[-1.79, 0.41, 10.44]} rotation={[0, 0.42, 0]}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material= {hoveredCat ? hoverMat : materials.cat}
            onClick={onClick.onClick.onClick}
            onPointerOver={(e) => {
              document.body.style.cursor = 'pointer'
              hoverCat(true)
            }}
            onPointerOut={(e) => {
              document.body.style.cursor = 'default'
              hoverCat(false)
            }}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.cateyes}
        />
        </group>
    </group>
  )
}

export default Cat