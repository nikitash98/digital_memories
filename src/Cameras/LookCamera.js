
import useMousePosition from "../useMousePosition";
import { useGLTF, PerspectiveCamera, useAnimations} from '@react-three/drei'
import { useFrame, useThree  } from "react-three-fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const LookCamera = (props) => {
    const { clientX, clientY } = useMousePosition();
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    let new_original_position = useRef(new Vector3(8.58 , 3.47, -14.29))
    let current_look_position = useRef(new Vector3(-1.29286,  2.05505, -30.9742))
    let move_vectors = props.position.map(x => new Vector3(x[0], x[1], x[2]))

    //const move_positions = [new Vector3(5.43317, 3.71172, -18.6191), new Vector3(1.43317, 5.71172, -100), new Vector3(5.43317, 3.71172, -18.6191)]
    //const look_positions = [[2.29286,  4.65505, -30.9742 + 30], [0.29286,  5.05505, -30.9742  + 30], [0.29286,  5.05505, -30.9742  + 0]]
    const look_positions = [[1.8,  4.65505, 0], [0.29286,  7.05505, 0], [0.29286,  6.05505, 0]]

    let look_vectors = look_positions.map(x => new Vector3(x[0], x[1], x[2]))

    let cont = props.counter % 3 

    const move_positions = [props.startposition, [0, 1, 5], [0, 1, 2], [0, 1, -5]]


    useEffect(()=> {
        console.log(props.lookPositionIndex)
        props.camRef.current.position.x = move_positions[props.lookPositionIndex][0]
        props.camRef.current.position.y = move_positions[props.lookPositionIndex][1]
        props.camRef.current.position.z = move_positions[props.lookPositionIndex][2]

    })
    useFrame(() => {
        /*
        //original_position = move_positions[cont]
        new_original_position.current.lerp(move_vectors[cont], .1)
        current_look_position.current.lerp(look_vectors[cont], .1)
        //original_position = original_position.lerp(move_positions[cont] ,0.1)
        props.camRef.current.position.x = new_original_position.current.x + (center[0] - clientX) *0.001;
        props.camRef.current.position.y = new_original_position.current.y + (center[1] - clientY) *0.001;
        props.camRef.current.position.z = new_original_position.current.z
        props.camRef.current.lookAt(current_look_position.current)

         || 
        (props.camRef.current.rotation.y > props.rotation.y + props.rotation_limits[0]) 
        */
        let move = -(clientX - center[0]) * 0.00007;
        if((props.camRef.current.rotation.y < props.rotation[1] + props.rotation_limits[1]) && 
        move > 0) {
            props.camRef.current.rotation.y += move;
        }


        if( (props.camRef.current.rotation.y > props.rotation[1] + props.rotation_limits[0]) && move < 0) {
            props.camRef.current.rotation.y += move;
        }
        //camRef.current.rotation.x += (clientY - center[1]) * 0.00007;
        
        //camRef.current.rotation.y += 0.01;

    })
    //14.43
    return(
        <group>

        <PerspectiveCamera ref = {props.camRef} name="Camera"  makeDefault={true} far={100} near={0.1} fov={50} position={props.startposition} rotation={props.rotation} />

        </group>
    )
}


LookCamera.defaultProps = {
    position: [0, 0.8, 4],
    rotation: [0, -Math.PI/2, 0],
    rotation_limits: [-Math.PI/4, Math.PI/4],
    lookPositionIndex: 0

}
export default LookCamera;