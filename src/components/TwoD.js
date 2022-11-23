import React, { useState, useRef } from 'react'
import AboutTD from './about/AboutTD'
import ContactTD from './contact/ContactTD'
import Hero from './hero/Hero'
import NavbarTD from './navbar/NavbarTD'
import Projects from './work/Projects'
import { Canvas, extend  } from '@react-three/fiber';
import styled from 'styled-components'
import { UnrealBloomPass } from 'three-stdlib'
import Floor from './Floor'
import Car from './world/Car'
import { gsap } from "gsap";

const CanvasContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: -1;
top: 0;
left: 0;
`
extend({ UnrealBloomPass })

function ThreeTwoD() {
  const [dayNight, setDayNight] = useState(true);
  const ambient = useRef();
  const directional = useRef();

  const toggleDayNight = () => {
    setDayNight((value) => (value === false ? true : false));
    DayNightCycle()
  }

  const DayNightCycle = () => {
    let ctx = gsap.context(() => {
      if(dayNight === false) {
        gsap.to(ambient.current.color, {
          r: 0.047058823529411764,
          g: 0.06274509803921569,
          b: 0.21176470588235294
        });
        gsap.to(ambient.current, {
          intensity: 0.6
        });
      }
      else {
        gsap.to(ambient.current.color, {
          r: 1,
          g: 178/255,
          b: 102/255
        });
        gsap.to(ambient.current, {
          intensity: 0.25
        });
      }           
    }, ambient);
    let ctx2 = gsap.context(() => {
      if(dayNight === false) {
        gsap.to(directional.current.color, {
          r: 0.047058823529411764,
          g: 0.06274509803921569,
          b: 0.21176470588235294
        });
      }
      else {
        gsap.to(directional.current.color, {
          r: 1,
          g: 178/255,
          b: 102/255
        });
      }           
    }, directional);
    
  return () => { 
    ctx.revert();
    ctx2.revert();
  }
}

  return (
    <>
      <NavbarTD onClick={toggleDayNight} />
      <CanvasContainer>
        <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-28, 19, 26], fov: 35 }} gl={{ alpha: false }}>
        <ambientLight ref={ambient} intensity={0.25} color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]} />
        <directionalLight castShadow intensity={1} position={[-2, 6, 12]}
            ref={directional}
            color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]}
            shadow-bias={-0.001}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            >
          <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
          <Floor />
          <Car />
        </Canvas>
      </CanvasContainer>
    </>
  )
}

function twoD() {
  return (
    <>
        <ThreeTwoD />
        <Hero />
        <AboutTD />
        <Projects />
        <ContactTD />
    </>
  )
}

export default twoD