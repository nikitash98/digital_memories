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
            <BasicParticles filename = "sub_low.ply" point_size = {5.0} ></BasicParticles>
            <BasicParticles filename = "metro_low.ply" point_size = {5.0}></BasicParticles>
            {/*

            <Person camRef = {props.camRef}></Person>

            */

            }

        <Guy camRef = {props.camRef} position = {[-1, 0, -1]} setLookPositionIndex = {props.setLookPositionIndex}/>

            <Guy camRef = {props.camRef} position = {[2, 0, 2]} setLookPositionIndex = {props.setLookPositionIndex}/>

            <Guy camRef = {props.camRef} position = {[-1, 0, 8]} setLookPositionIndex = {props.setLookPositionIndex}/>

            <Guy camRef = {props.camRef} position = {[-1, 0, -5]} setLookPositionIndex = {props.setLookPositionIndex}/>

        </group>
    );
  };

  export default Subway