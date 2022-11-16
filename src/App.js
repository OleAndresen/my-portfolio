import { Canvas, extend } from '@react-three/fiber';
import { Effects, OrbitControls, PerspectiveCamera} from '@react-three/drei'
import Room from './components/Room';
import Floor from './components/Floor';
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })

function ThreeScene() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <color attach="background" args={['#202030']} />
      <fog attach="fog" args={['#202030', 10, 80]} />
      <ambientLight intensity={0.3} color={[0.047058823529411764, 0.06274509803921569, 0.21176470588235294]}/>
      <directionalLight 
        args={["#EAE7E4", 0.6]} 
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
        args={[0xf0b27a, .3, 14]}
        position={[8, 3, 10]}
      />
      <pointLight 
        args={[0xf0b27a, .3, 14]}
        position={[8, 2, -10]}
      />
      <pointLight 
        args={[0xf0b27a, .4, 10]}
        position={[-6, 4, 13]}
      />
      <pointLight 
        args={[0xf0b27a, .5, 12]}
        position={[-7.6, 4, -1.2]}
      />
      <PerspectiveCamera makeDefault position={[15, 17, 22]} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={-Math.PI} maxPolarAngle={Math.PI / 2.1}/>
      <Floor />
      <Room />
      <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects>
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
