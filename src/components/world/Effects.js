import React from 'react'
import { Sparkles } from '@react-three/drei'

function Effects() {
  return (
    <>
        <Sparkles position={[-7.35, 3.5, -2.5]} color={'#facc15'} count={10} scale={[2, 2, 2]} size={4} speed={2} opacity={0}/>
    </>
  )
}

export default Effects