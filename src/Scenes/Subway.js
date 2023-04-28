import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import Person from "../Assets/Person";
import { Guy } from "../Assets/Guy";
const Subway = (props) => {


    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>
            <BasicParticles filename = "subway.ply"></BasicParticles>
            {/*

            <Person camRef = {props.camRef}></Person>

            */

            }
            <Guy camRef = {props.camRef}/>
        </group>
    );
  };

  export default Subway