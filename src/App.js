import { Canvas, extend } from '@react-three/fiber';
import { Effects, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Routes, Route } from 'react-router-dom';
import Room from './components/Room';
import Floor from './components/Floor';
import { UnrealBloomPass } from 'three-stdlib'
import UI from './components/ui/UI';
import styled from 'styled-components'
import TwoD from './components/TwoD'
import { useRef, useState } from 'react'
import { gsap } from "gsap";
import HelpModal from './components/ui/HelpModal';

const CanvasContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;
z-index: 9;
top: 0;
left: 0;
`

extend({ UnrealBloomPass })

function ThreeScene() {
  const [dayNight, setDayNight] = useState(true);
  const ambient = useRef();
  const directional = useRef();
  const background = useRef();
  const fog = useRef();

  const [mailboxOpened, setMailboxOpened] = useState(false);
  
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
      let ctx3 = gsap.context(() => {
        if(dayNight === false) {
          gsap.to(background.current, {
            r: 0.014443843592229466,
            g: 0.014443843592229466,
            b: 0.02955683443236377
          });
        }
        else {
          gsap.to(background.current, {
            r: 1,
            g: 178/255,
            b: 102/255
          });
        }           
      }, background);
      let ctx4 = gsap.context(() => {
        if(dayNight === false) {
          gsap.to(fog.current.color, {
            r: 0.014443843592229466,
            g: 0.014443843592229466,
            b: 0.02955683443236377
          });
          gsap.to(fog.current, {
            far: 70
          });
        }
        else {
          gsap.to(fog.current.color, {
            r: 1,
            g: 178/255,
            b: 102/255
          });
          gsap.to(fog.current, {
            far: 150
          });
        }           
      }, fog);
      
    return () => { 
      ctx.revert();
      ctx2.revert();
      ctx3.revert();
      ctx4.revert();
    }
  }

  const camera = useRef()
  
  const handleCameraMove = () => {
    let ctx = gsap.context(() => {   
      gsap.to(camera.current.position, {
        x: 0,
        y: 14,
        z: -24,
        ease: "power3.out(2.5)",
        duration: 1.2
      });
  }, camera ); 
    return () => ctx.revert();
  }

  const handleMailBoxOpen = () => {
    setMailboxOpened((value) => (value === false ? true : false));
  }


  return (
    <>
      <UI onClick={toggleDayNight} m={handleMailBoxOpen}/>
      <HelpModal mailboxOpened={mailboxOpened} onClick={handleMailBoxOpen}/>
      <CanvasContainer>
        <Canvas shadows dpr={[1, 2]}>
          <color attach="background" args={['#202030']} ref={background}/>
          <fog attach="fog" args={['#202030', 10, 70]} ref={fog}/>
          <ambientLight ref={ambient} intensity={0.6} color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]}/>
          <directionalLight 
            ref={directional}
            args={["#EAE7E4", .7]} 
            position={[10, 20, -5]}
            castShadow
            color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]}
            shadow-bias={-0.001}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <PerspectiveCamera ref={camera} makeDefault position={[13, 16, 20]} />
          <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={-Math.PI} maxPolarAngle={Math.PI / 2.1}/>
          <Floor />
          <Room a={handleCameraMove} onClick={handleMailBoxOpen}/>
          <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
          </Effects>
        </Canvas>
      </CanvasContainer>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ThreeScene />} />
        <Route path='/portfolio' element={<TwoD />} />
      </Routes>
    </>
  );
}

export default App;
