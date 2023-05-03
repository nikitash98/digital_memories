import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import Person from "../Assets/Person";
import { Guy } from "../Assets/Guy";
import WindParticles from "../WindParticles";
const Swing = (props) => {


    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>

        <group scale={20.0}>
                      <WindParticles filename = {"tree.ply"}></WindParticles>

        </group>
        <group scale={20.0}>
            {/*
            <BasicParticles filename={"hydrant.ply"} point_size = {10.0}/>
                      <BasicParticles filename = {"tree.ply"} point_size = {5.0}></BasicParticles>

            */}

        </group>
        </group>

    );
  };

  export default Swing