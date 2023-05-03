import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import { Plane_Window } from "../Assets/Plane_window";
const Bathroom = (props) => {

    const cloudRef = useRef()
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial

    useFrame(() => {
    })
    return (

        <group>
          <group ref={cloudRef}>
          <BasicParticles filename = {"bathroom.ply"} point_size = {5.0}></BasicParticles>
        </group>
        </group>
        
        
    );
  };

  export default Bathroom