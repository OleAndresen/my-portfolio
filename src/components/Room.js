import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import Emitter from './Emitter';
import { gsap } from "gsap";

import Screens from './world/Screens';
import Effects from './world/Effects'
import Train from './world/Train';
import Cat from './world/Cat';
import Lights from './world/Lights';
import { useLayoutEffect, useRef, useState } from 'react';

const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(7, 0, 10), toneMapped: false })
const glowDarkRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.5, 0, 0), toneMapped: false })
const glowBlue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 0.5, 10), toneMapped: false })
const glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 2, 0.2), toneMapped: false })
const glowOrange = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.5, 0), toneMapped: false })
const glowYellow = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1, 0.2), toneMapped: false })
const glowWhite = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.8, 0.8, 0.5), toneMapped: false })
const hoverMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(.9, .9, .3)})

function Room(a) {
    const { nodes, materials } = useGLTF("/portfolio-finished.glb");

    const [hoveredObjects, hoverObjects] = useState(false)

    const tl = useRef();
    const modelRef = useRef();
    
    useLayoutEffect(() => {
      const introReady = () => {
        const ctx = gsap.context(() => {
        tl.current && tl.current.progress(0).kill();
        tl.current = gsap.timeline()
          .to(modelRef.current.children[13].position, {
            z: 40,
            ease: "power3.out(2.5)",
            duration: 3
          }, "+=.5")
          .to(modelRef.current.children[13].position, {
            y: 1.03
          },("car","-=1.25"))
          .to(modelRef.current.children[13].scale, {
            x: 1,
            y: 1,
            z: 1
          },("car","-=1.25"))
          .to(modelRef.current.children[13].rotation, {
            x: Math.PI / 2,
            y: 0,
            z: 1.71
          },("car","-=1.25"))
          .to(modelRef.current.children[10].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },("car","-=1.25"))
          .to(modelRef.current.children[16].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },"-=.50")
          .to(modelRef.current.children[14].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },"building")
          .to(modelRef.current.children[7].children[1].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },"building")
          .to(modelRef.current.children[13].position, {
            x: 6.57,
            z: 3.69,
            ease: "power3.out(2.5)",
            duration: 3
          },("-=.2", "tree"))
          .to(modelRef.current.children[12].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },"tree")
          .to(modelRef.current.children[15].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },"tree")
          .to(modelRef.current.children[6].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },"tree")
          .to(modelRef.current.children[0], {
            intensity: 0.3,
            ease: "back-out(2.2)",
            duration: 0.5
          },("light", "-=1.2"))
          .to(modelRef.current.children[1], {
            intensity: 0.3,
            ease: "back-out(2.2)",
            duration: 0.5
          },("light", "-=1.2"))
          .to(modelRef.current.children[2], {
            intensity: 0.4,
            ease: "back-out(2.2)",
            duration: 0.5
          },("light", "-=1.2"))
          .to(modelRef.current.children[3], {
            intensity: 0.5,
            ease: "back-out(2.2)",
            duration: 0.5
          },("light", "-=1.2"))
          .to(modelRef.current.children[4], {
            intensity: 0.5,
            ease: "back-out(2.2)",
            duration: 0.5
          },("light", "-=1.2"))
          .to(modelRef.current.children[5], {
           
          })
          .to(modelRef.current.children[8].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },("cat", "-=2"))
          .to(modelRef.current.children[9].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },("cat", "-=2"))
          .to(modelRef.current.children[11].scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back-out(2.2)",
            duration: 0.5
          },("cat", "-=2"))
          
        }, modelRef);
       
      }
      
      const listener = Emitter.addListener('intro-ready', introReady);
      return ()=> {
        listener.remove();
      }
    }, []);
    
    return (
      <group dispose={null} ref={modelRef}>
          <Lights />
          <Effects/>
          <Screens a={a}/>
          <Train />
          <Cat />
        <group position={[-4.22, 1.75, 9.81]} scale={0}>
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
          scale={0}
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0.23, -0.06, 7.03]}
        />
        <group
          scale={0}
          position={[1.5, 1.22, -2.28]}
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
            material= {hoveredObjects ? hoverMat : materials["TrainTracks.001"]}
            onPointerOver={(e) => {
              document.body.style.cursor = 'pointer'
              hoverObjects(true)
            }}
            onPointerOut={(e) => {
              document.body.style.cursor = 'default'
              hoverObjects(false)
            }}
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
        <group position={[-12.42, 0.02, -0.77]} rotation={[Math.PI, 0, Math.PI]} scale={0}>
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
            material={materials.Ropes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Leaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_3.geometry}
            material={glowDarkRed}
          />
        </group>
        <group position={[4.2, -1, -2.2]} rotation={[Math.PI / 2, 0, -1.6]} scale={1.4}>
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
            material={glowYellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_3.geometry}
            material={glowDarkRed}
          />
        </group>
        <group
          scale={0}
          position={[-1.9, 5.62, -1.23]}
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
            geometry={nodes.Text005_26.geometry}
            material={materials.Door}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text005_27.geometry}
            material={glowWhite}
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Neon-Sign2"].geometry}
            material={glowRed}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
        </group>
        <group position={[0.74, 13.17, -0.22]} rotation={[-0.24, 0.06, -0.12]} scale={0}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials.StandTop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.DarkWood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.Barrel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_3.geometry}
            material={materials.Saloon}
          />
        </group>
        <group position={[-2.74, 3.06, -1.62]} rotation={[Math.PI, 0, Math.PI]} scale={0}>
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
      </group>
    );
}

export default Room