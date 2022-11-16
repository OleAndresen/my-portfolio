import React from 'react'
import { BackSide } from 'three'

function Floor() {
  return (
    <mesh position={[0, -2.3, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]}/>
      <meshStandardMaterial color={'#808080'} side={BackSide}/>
    </mesh>
  )
}

export default Floor