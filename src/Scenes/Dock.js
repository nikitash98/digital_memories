import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import BloodSpawner from "../Assets/BloodSpawner";
import AppearHand from "../Assets/AppearHand";
import { Html } from "@react-three/drei";
import Water from "../Assets/Water";
const Dock = (props) => {


    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>
          {/*
          <BasicParticles filename = {"hand_01.ply"} point_size = {2.0}></BasicParticles>
          */}
        {/* 
        
        */}
          <group position={[0, 0,0]} rotation={[0, Math.PI, 0]}>

          <BasicParticles filename={"dock2.ply"} point_size = {2.0}></BasicParticles>
          </group>
          <Water/>
        </group>
    );
  };

  export default Dock