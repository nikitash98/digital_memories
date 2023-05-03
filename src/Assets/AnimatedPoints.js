
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, PointMaterial, Point } from '@react-three/drei'
import * as THREE from "three" // <---
import { PointsMaterial } from 'three'
export function AnimatedPoints(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('Blue_end.glb')
  const { actions } = useAnimations(animations, group)
  const pointRef = useRef();

  useEffect(() => {
    actions["Anim Blye"].play()

  }, []);

  



Object.values(nodes).forEach((node) => {
  node.traverse((child) => {
    node.frustumCulled = false
  });
});


const pMaterial = new PointsMaterial();
const sMaterial = new THREE.MeshStandardMaterial()

pMaterial.size = 0.01
//materials.MikeAlger_Material
  return (
    
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Anim_blye">
          <group name="BloomBlye001_L" scale={0.01} />
          <group name="BloomBlye002_L" scale={0.01} />
          <group name="BloomBlye003_L" scale={0.01} />
          <group name="BloomBlye004_L" scale={0.01} />
          <group name="BloomBlye005_L" scale={0.01} />
          <group name="BloomBlye006_L" scale={0.01} />
          <group name="BloomBlye_L" scale={0.01} />
          <group name="BloomSTBlye001_L" scale={0.01} />
          <group name="BloomSTBlye002_L" scale={0.01} />
          <group name="BloomSTBlye003_L" scale={0.01} />
          <group name="BloomSTBlye004_L" scale={0.01} />
          <group name="BloomSTBlye005_L" scale={0.01} />
          <group name="BloomSTBlye006_L" scale={0.01} />
          <group name="BloomSTBlye_L" scale={0.01} />
          <group name="Petal001-" scale={0.01} />
          <group name="Petal002-" scale={0.01} />
          <group name="Petal003Blye_L" scale={0.01} />
          <group name="Petal004Blye_L" scale={0.01} />
          <group name="PetalBlye_L" scale={0.01} />
          <group name="stemBlye02_L" scale={0.01} />
          <group name="stemBlye_L" scale={0.01} />
          <primitive object={nodes.Bone} />

          <skinnedMesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Iris and blye']} skeleton={nodes.Circle001.skeleton} />
          <skinnedMesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Iris and blye']} skeleton={nodes.Circle002.skeleton} />
          <skinnedMesh name="Circle009" geometry={nodes.Circle009.geometry} material={materials['Iris and blye']} skeleton={nodes.Circle009.skeleton} />
          <skinnedMesh name="Circle010" geometry={nodes.Circle010.geometry} material={materials['Iris and blye']} skeleton={nodes.Circle010.skeleton} />
          <skinnedMesh name="Circle014" geometry={nodes.Circle014.geometry} material={materials['Iris and blye.001']} skeleton={nodes.Circle014.skeleton} />
          <points name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={sMaterial} skeleton={nodes.Cylinder001.skeleton} />
          <skinnedMesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={pMaterial} skeleton={nodes.Cylinder007.skeleton} />

          <skinnedMesh name="NurbsPath" geometry={nodes.NurbsPath.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath.skeleton} />
          <skinnedMesh name="NurbsPath001" geometry={nodes.NurbsPath001.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath001.skeleton} />
          <skinnedMesh name="NurbsPath002" geometry={nodes.NurbsPath002.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath002.skeleton} />
          <skinnedMesh name="NurbsPath003" geometry={nodes.NurbsPath003.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath003.skeleton} />
          <skinnedMesh name="NurbsPath004" geometry={nodes.NurbsPath004.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath004.skeleton} />
          <skinnedMesh name="NurbsPath005" geometry={nodes.NurbsPath005.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath005.skeleton} />
          <points name="NurbsPath006" geometry={nodes.NurbsPath006.geometry} material={materials['Iris and blye']} skeleton={nodes.NurbsPath006.skeleton} />

        {/* 

          <skinnedMesh name="Sphere016" geometry={nodes.Sphere016.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere016.skeleton} />
          <skinnedMesh name="Sphere017" geometry={nodes.Sphere017.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere017.skeleton} />
          <skinnedMesh name="Sphere018" geometry={nodes.Sphere018.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere018.skeleton} />
          <skinnedMesh name="Sphere019" geometry={nodes.Sphere019.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere019.skeleton} />
          <skinnedMesh name="Sphere020" geometry={nodes.Sphere020.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere020.skeleton} />
          <skinnedMesh name="Sphere021" geometry={nodes.Sphere021.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere021.skeleton} />
          <skinnedMesh name="Sphere022" geometry={nodes.Sphere022.geometry} material={materials['Iris and blye']} skeleton={nodes.Sphere022.skeleton} />

            */}

        </group>

      </group>

      <points name = {"NurbsPath002"} skeleton = {nodes.NurbsPath001.skeleton} >
      <bufferGeometry attach="geometry" {...nodes.NurbsPath002.geometry} />
        
        <PointMaterial transparent color = {0xffffff} size={2} sizeAttenuation={false} depthWrite={false} />

        </points>
    </group>

  )
}


useGLTF.preload('Blue_end.glb')