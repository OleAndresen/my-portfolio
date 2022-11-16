import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import Room from './components/Room';
import Floor from './components/Floor';

function ThreeScene() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <ambientLight intensity={0.15} color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]}/>
      <directionalLight 
        args={["#EAE7E4", 0.5]} 
        position={[10, 20, -5]}
        castShadow
        color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]}
        shadow-bias={-0.001}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}/>
      <pointLight 
        args={[0xf0b27a, .2, 14]}
        position={[8, 3, 10]}
      />
      <pointLight 
        args={[0xf0b27a, .2, 14]}
        position={[8, 2, -10]}
      />
      <pointLight 
        args={[0xf0b27a, .3, 10]}
        position={[-6, 4, 13]}
      />
      <pointLight 
        args={[0xf0b27a, .4, 12]}
        position={[-7.6, 4, -1.2]}
      />
      <PerspectiveCamera makeDefault position={[2, 4, 6]} />
      <OrbitControls />
      <Floor />
      <Room />
    </Canvas>
  )
}

function App() {
  return (
    <>
      <ThreeScene />
    </>
  );
}

export default App;
