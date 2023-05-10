import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---

import vertexShader from "./Assets/mildvertex";
import fragmentShader from "./Assets/basicfragmentShader";
const BasicParticles = ({filename, ...props}) => {
    // This reference gives us direct access to our points
    const points = useRef();
    const smallRef = useRef();

    let selectedShader = vertexShader;

    const pointCloud = useLoader(
        PLYLoader,
        filename
      );
      const uniforms = useMemo(
        () => ({
          uTime: {
            value: 1.0,
          },
          uSize: {
            value: props.point_size,
          },
          uNoise: {
            value: props.noise,
          }
        }),
        []
      );
    if(points.current) {

    points.current.material.uniforms.uNoise.value = props.noise
    }
    useEffect(() => {
        smallRef.current.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(pointCloud.attributes.position.array), 3));
        if("color" in pointCloud.attributes) {
          smallRef.current.setAttribute( 'color', new THREE.BufferAttribute(new Float32Array(pointCloud.attributes.color.array), 3));

        }
    })

    useFrame((state) => {
      const { clock } = state;
      points.current.material.uniforms.uTime.value = clock.elapsedTime;
    })
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
      <group >

        <points ref={points} frustumCulled={false}>
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

    );
  };

  BasicParticles.defaultProps = {
    point_size: 1.0,
    noise: 0.0
  }

  export default BasicParticles