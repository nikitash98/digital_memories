import { useMemo, useRef, useEffect  } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader, useFrame} from '@react-three/fiber';
import * as THREE from "three" // <---
import BasicParticles from "../BasicParticles";
const Person = (props) => {

    const handleHover = (e) => {
        document.body.style.cursor = 'pointer';
        console.log(props.camRef.current)
        props.camRef.current.fov = 20;
    }
    const unHover = (e) => {
        document.body.style.cursor = 'auto';
        props.camRef.current.fov = 50;

    }
     // <---
    // You can see that, like our mesh, points also takes a geometry and a material,
    // but a specific material => pointsMaterial
    return (
        <group>
            <BasicParticles filename = "guy.ply"></BasicParticles>
            <mesh position={[1.3, 0.8, 0.8]} onPointerOver={handleHover} onPointerOut={unHover}>
                <boxGeometry attach="geometry" args={[.3, .3, .3]}  />
                <meshStandardMaterial attach="material" color="#6be092" wireframe/>
            </mesh>
        </group>
    );
  };

  export default Person