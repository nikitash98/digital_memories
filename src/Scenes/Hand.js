import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
const Hand = (props) => {


    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>
          <BasicParticles filename = {"hand_01.ply"} point_size = {2.0}></BasicParticles>
          <BasicParticles filename = {"blood.ply"} point_size = {20.0}></BasicParticles>
        </group>
    );
  };

  export default Hand