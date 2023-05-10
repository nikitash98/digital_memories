import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import { Html } from "@react-three/drei";
const Office = (props) => {

    const cloudRef = useRef()
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial

    useFrame(() => {
    })
    return (

        <group>
          <group ref={cloudRef}>
          <BasicParticles filename = {"office_low.ply"} point_size = {5.0}></BasicParticles>
          <group rotation = {[0,-Math.PI/8, 0]}>

          <Html position={[.5, .8, -.4]} rotation = {[-Math.PI/8,0, 0]}scale={.02} transform>
            <div className="programming_screen">
            <h1>ABC</h1>

              <div className="programming_interior">
                ABC
              </div>
            </div>
          </Html>
          </group>

        </group>

        </group>
        
        
    );
  };

  export default Office