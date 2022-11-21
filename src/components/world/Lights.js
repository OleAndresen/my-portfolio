import React from 'react'

function Lights() {
  return (
    <>
        <pointLight 
          args={[0xf0b27a, .3, 14]}
          position={[8, 3, 10]}
          intensity={0}
        />
        <pointLight 
          args={[0xf0b27a, .3, 14]}
          position={[8, 2, -10]}
          intensity={0}
        />
        <pointLight 
          args={[0xf0b27a, .4, 10]}
          position={[-6, 4, 11]}
          intensity={0}
        />
        <pointLight 
          args={[0xf0b27a, .5, 12]}
          position={[-7.6, 4, -1.2]}
          intensity={0}
        />
        <pointLight 
          args={[0xa9352e, .5, 6]}
          position={[-10.2, 2.1, 2]}
          intensity={0}
        />
    </>
  )
}

export default Lights