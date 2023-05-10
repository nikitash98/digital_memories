import { useMemo, useRef, useEffect, useState  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---

import vertexShader from "./waterVertexShader";
import fragmentShader from "./waterFragmentShader";
import { Html } from "@react-three/drei";
const Water = (props) => {
    // This reference gives us direct access to our points
    const points = useRef();

      const uniforms = useMemo(
        () => ({
          uTime: {
            value: 0.0,
          },
          uNoise: {
            value: 0.0,
          }
        }),
        []
      );
    
    useFrame((state) => {
        const { clock } = state;

        points.current.material.uniforms.uTime.value = clock.elapsedTime;

    })    
      // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
      <group position={[10, -1.5, 10]} rotation={[Math.PI/2, 0, Math.PI/4]}>

        <points ref={points} >
            <planeBufferGeometry attach="geometry" args={[20, 20, 80, 80]} />
            <shaderMaterial
            depthWrite={true}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
            vertexColors= {true}
            />
        </points>
      </group>

    );
  };

  export default Water