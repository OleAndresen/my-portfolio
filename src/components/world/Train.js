import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { BackSide } from 'three'

import TravelImage from '../../assets/pictures/projects/project-travel.jpg'
import OldPorfolioImage from '../../assets/pictures/projects/project-portfolio-old.png'

const glowOrange = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.5, 0), toneMapped: false })
const glowYellow = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.5, 0.2), toneMapped: false })
const hoverMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(.9, .9, .3)})

function Train() {
    const { nodes, materials } = useGLTF("/portfolio-finished-train.glb");

    const textureTravelSite = useLoader(THREE.TextureLoader, TravelImage);
    const textureOldPortfolioSite = useLoader(THREE.TextureLoader, OldPorfolioImage);

    const [hovered, hover] = useState(false)
    const [trainMoved, trainMove] = useState(true)
    const [trainEnabled, enableTrain] = useState(false)

    const trainRef = useRef();
    const tlt = useRef();
    
    useLayoutEffect(() => {
      if(trainEnabled === true) {
        if(trainMoved === false) {
          trainRef.current.scale.x = 0;
          trainRef.current.scale.y = 0;
          trainRef.current.scale.z = 0;
  
          const ctx = gsap.context(() => {
            tlt.current && tlt.current.progress(0).kill();
            tlt.current = gsap.timeline()
            .to(trainRef.current.position, {
              x: 80,
            })
              .to(trainRef.current.scale, {
                x: 1,
                y: 1,
                z: 1,
                ease: "power3.out(2.5)",
                duration: .5
              })
              .to(trainRef.current.position, {
                x: 0,
                ease: "power3.out(2.5)",
                duration: 4
              })
          }, trainRef);
          return () => { 
            ctx.revert();
          }
        }
        else {
          trainRef.current.scale.x = 1;
          trainRef.current.scale.y = 1;
          trainRef.current.scale.z = 1;
  
          const ctx = gsap.context(() => {
            tlt.current && tlt.current.progress(0).kill();
            tlt.current = gsap.timeline()
              .to(trainRef.current.position, {
                x: -90,
                ease: "power3.in(2.5)",
                duration: 3
              })
              .to(trainRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                ease: "power3.out(2.5)",
                duration: .5
              })  
          }, trainRef);
          return () => { 
            ctx.revert();
          }
        }
      } 
    }, [trainMoved]);
    
  return (
    <group dispose={null}>
      <group ref={trainRef} scale={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenTrain.geometry}
          material={materials.Screen}
          position={[6.58, 0.29, -8.14]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={(e) => window.open('https://pers-travel-site.netlify.app/', '_blank')}
          onPointerOver={(e) => document.body.style.cursor = 'pointer'}
          onPointerOut={(e) => document.body.style.cursor = 'default'}
        >
          <meshBasicMaterial attach="material" map={textureTravelSite} side={BackSide}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenTrain2.geometry}
          material={materials.Screen}
          position={[3.33, 0.29, -8.14]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={(e) => window.open('https://oleandresen-portfolio-old.netlify.app/', '_blank')}
          onPointerOver={(e) => document.body.style.cursor = 'pointer'}
          onPointerOut={(e) => document.body.style.cursor = 'default'}
        >
          <meshBasicMaterial attach="material" map={textureOldPortfolioSite} side={BackSide}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenTrain3.geometry}
          material={materials.Screen}
          position={[0.11, 0.29, -8.14]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenTrain4.geometry}
          material={materials.Screen}
          position={[6.58, 0.29, -10.83]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          onClick={(e) => window.open('https://pers-travel-site.netlify.app/', '_blank')}
          onPointerOver={(e) => document.body.style.cursor = 'pointer'}
          onPointerOut={(e) => document.body.style.cursor = 'default'}
        >
        <meshBasicMaterial attach="material" map={textureTravelSite} side={BackSide}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenTrain5.geometry}
          material={materials.Screen}
          position={[3.33, 0.29, -10.86]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          onClick={(e) => window.open('https://oleandresen-portfolio-old.netlify.app/', '_blank')}
          onPointerOver={(e) => document.body.style.cursor = 'pointer'}
          onPointerOut={(e) => document.body.style.cursor = 'default'}
        >
        <meshBasicMaterial attach="material" map={textureOldPortfolioSite} side={BackSide}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScreenTrain6.geometry}
          material={materials.Screen}
          position={[0.11, 0.29, -10.85]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <group
        position={[-0.5, -0.16, -9.49]}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_2.geometry}
          material={glowYellow}
        />
        </group>
      </group>
      <group
        scale={0}
        position={[7.82, 2.61, -13.89]}
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
          material= {hovered ? hoverMat : materials.Sign}
          onClick={(e) => {
            enableTrain(true)
            trainMove(!trainMoved)
          }}
          onPointerOver={(e) => {
            document.body.style.cursor = 'pointer'
            hover(true)
          }}
          onPointerOut={(e) => {
            document.body.style.cursor = 'default'
            hover(false)
          }}
        />
      </group>
    </group>
  )
}

export default Train


