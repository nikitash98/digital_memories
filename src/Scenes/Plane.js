import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import { Plane_Window } from "../Assets/Plane_window";
const Plane = (props) => {

    const cloudRef = useRef()
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial

    useFrame(() => {
        cloudRef.current.position.z -= 0.01
        if (cloudRef.current.position.z < -3) {
          cloudRef.current.position.z = 0.0
        }
    })
    return (

        <group>
          <Plane_Window/>

          <group ref={cloudRef}>
          <BasicParticles filename = {"cloud_col.ply"} point_size = {10.0}></BasicParticles>
        </group>
        </group>
        
        
    );
  };

  export default Plane