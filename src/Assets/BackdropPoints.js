import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three";

import vertexShader from './vertexShader.js';
import fragmentShader from './fragmentShader.js';

const BackdropPoints = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    //mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh>
  {/*

    <mesh ref={mesh} position={[-5, 0, 0]}  rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={60}>
        <planeGeometry args={[1, 1, 32, 32]} />


      
    <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe
      />

    </mesh>
    */}
    </mesh>
  

  );
};




export default BackdropPoints;
