import React from "react";
import { useGLTF, Html } from "@react-three/drei";
import BigScreen from '../bigScreen/BigScreen';
import SmallScreen from '../smallScreen/SmallScreen';
import './Screens.css'

function Screens(a) {
    const { nodes, materials } = useGLTF("/portfolio-finished-screens.glb");
  return (
    <group dispose={null} scale={0}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigScreen.geometry}
        material={materials.Screen}
        position={[-2.18, 7.97, -1.67]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
      <Html className="content-bigscreen" rotation-x={-Math.PI / 2} position={[0, 0.05, 0]} transform occlude scale={0.9} >
        <BigScreen />
      </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SmallScreen.geometry}
        material={materials.Screen}
        position={[0.79, 9.81, 7.11]}
        rotation={[1.57, 0, -0.95]}
      >
      <Html className="content-smallscreen" rotation-x={-Math.PI / 2} position={[0, 0.05, 0]} transform occlude>
        <SmallScreen a={a}/>
      </Html>
      </mesh>
    </group>
  )
}

export default Screens