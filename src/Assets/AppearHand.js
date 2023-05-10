import { useMemo, useRef, useEffect, useState  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---

import vertexShader from "./appearVertexShader";
import fragmentShader from "./basicfragmentShader";
import { Html } from "@react-three/drei";
const AppearHand = (props) => {
    // This reference gives us direct access to our points
    const points = useRef();
    const smallRef = useRef();

    let selectedShader = vertexShader;
    let clockStarted = useRef(false)

    const pointCloud = useLoader(
        PLYLoader,
        "hand_low.ply"
      );
      const uniforms = useMemo(
        () => ({
          uTime: {
            value: 0.0,
          },
          startPosition: {
            value: new THREE.Vector3(0, 20, 0),
          }
        }),
        []
      );

      useEffect(() => {
        smallRef.current.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(pointCloud.attributes.position.array), 3));
        if("color" in pointCloud.attributes) {
          smallRef.current.setAttribute( 'color', new THREE.BufferAttribute(new Float32Array(pointCloud.attributes.color.array), 3));

        }
    })

    useFrame((state, delta) => {
      const { clock } = state;
      if(clockStarted.current  ) {
        points.current.material.uniforms.uTime.value += delta

      }
    })

    let classTest = "start_button"
    if(clockStarted.current) {
      classTest = classTest + " fadeOut";
      console.log(classTest)
    }
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
      <group >
          <Html position = {[0, 0, 0]} >
            <div className= {classTest}  onMouseOver={()=> { props.setRunning(true); clockStarted.current = true; console.log(clockStarted)}}>
              
            </div>
          </Html>
        <group position={[-2.0, -8, 0]} rotation = {[-Math.PI/2, 0, -Math.PI/2]}>
        <points ref={points} frustumCulled = {false}>
          <bufferGeometry ref={smallRef}/>
          {/*
                          <pointsMaterial attach="material" vertexColors={true} size={0.01} />
                  <pointsMaterial attach = "material" vertexColors={true}  size={0.0001} sizeAttenuation />
onPointerOver={()=> {        document.body.style.cursor = 'pointer';}} onPointerOut = {() => {document.body.style.cursor = 'auto';}}
          */
            <shaderMaterial
            depthWrite={true}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
            vertexColors= {true}
            
            />
          }


        </points>
        </group>
      </group>

    );
  };

  export default AppearHand