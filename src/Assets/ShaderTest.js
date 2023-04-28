import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { useMemo, useRef} from "react";
import * as THREE from "three";
import vertexShader from './mouseVertexShader';
import fragmentShader from './basicfragmentShader';
import useMousePosition from "../useMousePosition";
const ShaderTest = (props) => {
  const { count } = props;
  const radius = 2;
  // This reference gives us direct access to our points
  const points = useRef();
  const { clientX, clientY } = useMousePosition();
  const { camera } = useThree();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt((Math.random() - 0.5)) * radius;
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      let x = distance * Math.sin(theta) * Math.cos(phi)
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0
    },
    uRadius: {
      value: radius
    },
    uMouse: { value: {
        x: clientX, y: clientY
    }
    },
    p_matrix: {
        value: camera.projectionMatrix
    },
    m_v_matrix: {
        value: camera.matrixWorldInverse
    }
  }), [])

  useFrame((state) => {
    const { clock } = state;
    points.current.material.uniforms.uMouse.value = [(clientX/window.innerWidth * 2) -1, clientY]
    points.current.material.uniforms.m_v_matrix.value = camera.matrixWorldInverse
    //points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={60}>
        <sphereGeometry args={[.2, 32]} />

      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default ShaderTest
