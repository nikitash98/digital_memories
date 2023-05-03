import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import useMousePosition from '../useMousePosition'
const MouseOrbit = () => {
  const controlsRef = useRef()
  const { clientX, clientY } = useMousePosition();

  useFrame(() => {
    controlsRef.current.update()
    controlsRef.current.setAzimuthalAngle(((clientX/window.innerWidth)-0.5) * 1)
    controlsRef.current.setPolarAngle((1-((clientY/window.innerHeight)-1)) * 1)

  })


  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.5}
      enabled = {false}
    />
  )
}

export default MouseOrbit