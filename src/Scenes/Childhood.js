import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
const Childhood = (props) => {


    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>
          <group position={[0,0, -4]}>

            <BasicParticles filename = {"hause_low.ply"} point_size = {10.0}></BasicParticles>
          </group>
          <BasicParticles filename = {"famiglida.ply"} point_size = {10.0}></BasicParticles>

        </group>
    );
  };

  export default Childhood