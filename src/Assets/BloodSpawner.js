import React, { useState, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';

const BloodSpawner = (props) => {
  const ref = useRef();
  const [particleCount, setParticleCount] = useState(1000);

  // create the particles
  const particles = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff });
  let count = 10
  let sep = 10
  const [running, setRunning] = useState(false)
  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = 0;
        let z = 0;
        let y = 0;
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions); //merupakan array yang sesuai dengan buffer
  }, [count, sep]); //ini dibuat menjadi 1d array dikarenakan bufferAtribute tidak dapat menggunakan 2d array maka dari itu position array akan menjadi seperti [x1,y1,z1,x2,y2,z2,x....]

  // create the particle system
  const particleSystem = new THREE.Points(particles, particleMaterial);
  // add the particle system to the scene
  useFrame(() => {
    if(props.running) {
      for (let i = 0; i < count * count; i++) {
        //positions[(i*3) + 2] += (0.03 + Math.sin(positions[(i*3) + 1]) * Math.pow(i/1000, 2)) 
        positions[(i*3) + 0] += Math.cos(positions[(i*3) + 2] * 2) * .1
        positions[(i*3) + 1] += (0.01 + Math.sin(positions[(i*3) + 0]) * i/1000) 
        positions[(i*3) + 2] += i/1000

        if(positions[(i*3) + 2] > 10) {
          positions[(i*3) + 2] = 0
          positions[(i*3) + 1] = 0
          positions[(i*3) + 0] = 0
        }
  
      }
    }

      
    ref.current.geometry.attributes.position.needsUpdate = true;

  });

  return (
    <points ref={ref}>
      <sphereGeometry args={[1, 48, 48]} />
      <bufferGeometry >
      <bufferAttribute attach={"attributes-position"} 
      array={positions}
      count= {positions.length/3}
      itemSize={3}/>

      </bufferGeometry>
      <pointsMaterial color="#FF0000" size={.1} sizeAttenuation />
    </points>
  );
};

export default BloodSpawner;