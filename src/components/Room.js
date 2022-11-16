import * as THREE from 'three'
import { useGLTF, Html, Sparkles } from '@react-three/drei'
import BigScreen from './bigScreen/BigScreen';
import SmallScreen from './smallScreen/SmallScreen';
import './Room.css'

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 10), toneMapped: false })
const glowDarkRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0, 2), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 10), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 2, 0.2), toneMapped: false })
const glowOrange = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.5, 0), toneMapped: false })
const glowYellow = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.5, 0.2), toneMapped: false })

function Room() {
    const { nodes, materials } = useGLTF("/portfolio-finished.glb");      
    
    return (
      <group dispose={null}>
        <Sparkles position={[-7.35, 3.5, -0.8]} color={'#facc15'} count={10} scale={[2, 2, 2]} size={4} speed={2} />
      <group position={[-1.81, 0.39, 11.89]} rotation={[0, 0.42, 0]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone009} />
        <primitive object={nodes.Bone011} />
        <primitive object={nodes.Bone013} />
        <primitive object={nodes.Bone015} />
        <group position={[0.01, 0.02, 0.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.cat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.cateyes}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SmallScreen.geometry}
        material={materials.Screen}
        position={[0.79, 9.81, 8.56]}
        rotation={[1.57, 0, -0.95]}
      >
      <Html className="content-smallscreen" rotation-x={-Math.PI / 2} position={[0, 0.05, 0]} transform occlude>
        <SmallScreen />
      </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigScreen.geometry}
        material={materials.Screen}
        position={[-2.18, 7.97, -0.21]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
      <Html className="content-bigscreen" rotation-x={-Math.PI / 2} position={[0, 0.05, 0]} transform occlude >
        <BigScreen />
      </Html>
      </mesh>
      <group position={[-4.22, 1.75, 11.27]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.Mashine}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials.Screen}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[0.23, -0.06, 8.49]}
      />
      <group
        position={[1.5, 1.22, -0.82]}
        rotation={[-Math.PI, 1.35, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={materials["Wood.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_1.geometry}
          material={materials["TrainTracks.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_2.geometry}
          material={materials.Flag}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_3.geometry}
          material={materials.Screws}
        />
      </group>
      <group position={[-12.42, 0.02, 0.69]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.DarkWood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Leaves}
        />
      </group>
      <group
        position={[7.82, 2.61, -12.43]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={glowOrange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_1.geometry}
          material={materials.Sign}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrainScreen1.geometry}
        material={materials.Screen}
        position={[6.58, 0.3, -6.73]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrainScreen3.geometry}
        material={materials.Screen}
        position={[0.11, 0.3, -6.73]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <group position={[-2.74, 3.06, -0.16]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.TrainTracks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials.TrainTracks2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_2.geometry}
          material={materials.Bench}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_3.geometry}
          material={materials.Sign}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_4.geometry}
          material={glowYellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_5.geometry}
          material={materials.Post}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_6.geometry}
          material={materials.Street}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_7.geometry}
          material={materials.Hedge}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_8.geometry}
          material={materials.Soil}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrainScreen2.geometry}
        material={materials.Screen}
        position={[3.34, 0.3, -6.74]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrainScreen1sec.geometry}
        material={materials.Screen}
        position={[6.58, 0.3, -9.35]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrainScreen2sec.geometry}
        material={materials.Screen}
        position={[3.34, 0.3, -9.35]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TrainScreen3sec.geometry}
        material={materials.Screen}
        position={[0.11, 0.3, -9.35]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Board}
        position={[-8.79, 1.44, 8.75]}
      />
      <group
        position={[-1.9, 5.62, 0.23]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials.TextBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_1.geometry}
          material={materials.Pipes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_2.geometry}
          material={materials.Building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_3.geometry}
          material={materials.StandTop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_4.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_5.geometry}
          material={materials.DarkWood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_6.geometry}
          material={materials.Vents}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_7.geometry}
          material={materials.Blinds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_8.geometry}
          material={materials.Boxes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_9.geometry}
          material={materials.Sign}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_10.geometry}
          material={materials.Ele}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_11.geometry}
          material={materials.ScrennBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_12.geometry}
          material={glowYellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_13.geometry}
          material={materials.Post}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_14.geometry}
          material={materials.Ropes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_15.geometry}
          material={materials.Stairs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_16.geometry}
          material={materials.Board}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_17.geometry}
          material={materials.Cups}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_18.geometry}
          material={materials.Bottle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_19.geometry}
          material={materials.Bottle2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_20.geometry}
          material={materials.Bottle4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_21.geometry}
          material={materials["Bottle3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_22.geometry}
          material={materials.Mugs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_23.geometry}
          material={materials.Box}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_24.geometry}
          material={materials.Barrel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_25.geometry}
          material={glowOrange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Neon-Sign2"].geometry}
          material={glowRed}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Neon-Sign"].geometry}
          material={glowGreen}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Neon-Sign3"].geometry}
          material={glowBlue}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
      </group>
      <group
        position={[-0.5, -0.16, -8.03]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials.Loco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group position={[6.57, 1.03, 5.15]} rotation={[Math.PI / 2, 0, 1.71]}>
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
          material={glowOrange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_3.geometry}
          material={glowDarkRed}
        />
      </group>
    </group>
    );
}

export default Room