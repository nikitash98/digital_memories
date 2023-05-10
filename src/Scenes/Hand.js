import { useMemo, useRef, useEffect, useState  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
import BloodSpawner from "../Assets/BloodSpawner";
import AppearHand from "../Assets/AppearHand";
import { Html } from "@react-three/drei";
const Hand = (props) => {

    const [running, setRunning] = useState(false)
    // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>
          {/*
          <BasicParticles filename = {"hand_01.ply"} point_size = {2.0}></BasicParticles>
          */}

          <AppearHand setRunning = {setRunning}/>
          <BloodSpawner running = {running}/>
        </group>
    );
  };

  export default Hand