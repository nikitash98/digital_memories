import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---

//import vertexShader from "./Assets/windVertexShader";
//import vertexShader from "./Assets/windVertexShader";
import vertexShader from "./Assets/windVertexShader";

import fragmentShader from "./Assets/windfragmentShader";
import useMousePosition from "./useMousePosition";

const WindParticles = ({filename, noise = 0}) => {
    // This reference gives us direct access to our points
    const points = useRef();
    const smallRef = useRef();
    const {clientX, clientY} = useMousePosition();
    const previousMousePosition = useRef([0, 0, 0])
    let selectedShader = vertexShader;

    const deltaTime = performance.now() - previousMousePosition.current[2]
    const deltaX = clientX - previousMousePosition.current[0]
    const deltaY = clientY - previousMousePosition.current[1]

    const speed = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))/deltaTime
    console.log(speed)

    previousMousePosition.current = [clientX, clientY, performance.now()] 
    
    const pointCloud = useLoader(
        PLYLoader,
        filename
      );
      const uniforms = useMemo(
        () => ({
          uTime: {
            value: 1.0,
          },
          uSpeed: {
            value: 0.0,
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

    useFrame((state) => {
      const { clock } = state;
      points.current.material.uniforms.uTime.value = clock.elapsedTime;
      points.current.material.uniforms.uSpeed.value = Math.min(speed, 100);

    })
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
      <group >

        <points ref={points} >
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
            vertexColors= {true}
            uniforms={uniforms}
            />
          }


        </points>
      </group>

    );
  };

  export default WindParticles