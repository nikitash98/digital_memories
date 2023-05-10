import React, { useCallback,useMemo, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SkinnedMesh, Vector3 } from 'three';
import { useEffect } from 'react';
const SkinnedPointCloudGLB = () => {
  const meshRef = useRef();
  const { nodes, animations } = useLoader(GLTFLoader, 'blend.glb');


  const vertices = nodes.node_id53.geometry.attributes.position.array
  

  const update = useCallback(self => {
    self.needsUpdate = true
  }, [])


  useEffect(() => {

    var geometry = nodes.node_id53.geometry;

    meshRef.geometry = nodes.node_id53.geometry
    console.log(meshRef.geometry)
    //meshRef.current.updateMorphTargets();

  }) 

  useFrame(({ clock }) => {
    //influence.current = Math.sin(clock.getElapsedTime()) * 0.5 + 0.5;
    //meshRef.current.morphTargetInfluences[0] = 1;
});
return (
    <group>


    {/*}

        <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
    <points ref={meshRef} scale={100}>
      
      <bufferGeometry attach="geometry" {...nodes.Cylinder001.geometry}>
      </bufferGeometry>
      <pointsMaterial attach="material" color="blue" size={0.05} />
    </points>
      
     <mesh scale={3}>
      
      <bufferGeometry attach="geometry">
      <bufferAttribute
          attach = "attributes-position"
          array={vertices}
          count={vertices.length / 3}
          itemSize={3}
          onUpdate={update}
      <bufferAttribute
          attach = "attributes-position"
          array={vertices}
          count={vertices.length / 3}
          itemSize={3}
        />
        />
      </bufferGeometry>
      <meshBasicMaterial attach="material" color="hotpink" />
    </mesh>
    */}
     <points ref={meshRef} scale={1}>
      {/*
      <bufferGeometry attach="geometry" geometry={}>
      </bufferGeometry>
      <pointsMaterial attach="material" color="blue" size={0.05} />
      */}

    </points>
    {/*

    */}

    </group>

  );
};

export default SkinnedPointCloudGLB;