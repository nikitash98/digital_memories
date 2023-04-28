import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import BasicParticles from './BasicParticles';
import BackdropPoints from './Assets/BackdropPoints';
import CustomGeometryParticles from './Assets/BackdropPoints2';
import Hand from './Scenes/Hand';
import Subway from './Scenes/Subway';
import ShaderTest from './Assets/ShaderTest';
import { useState, useRef, useEffect} from 'react';
import LookCamera from './Cameras/LookCamera';
import MouseOrbit from './Cameras/MouseOrbit';
import Childhood from './Scenes/Childhood';

import pingSound from "./ambient.mp3"

function App() {

  const [scene, setScene] = useState(0)
  const camRef = useRef()
  const orbRef = useRef()

  const ping = new Audio(pingSound)
  useEffect(()=> {
  }, [])

  function playSound() {
    ping.play()
    console.log("ABC")

  }
  return (
    <div className="App">
      <div class = "game_container" onClick={playSound}>
        <Canvas camera={{ position: [0, 10, 0] }}>
          <group >

          {
            scene == 0 && (
              <group rotation={[0, +Math.PI/2, 0]}>
              <Hand />
              <MouseOrbit/>
              {/*
              <OrbitControls ref = {orbRef} />
              <OrbitControls />

              */

              }
              <CustomGeometryParticles count = {4000}/>
              </group>

            )
          }

          {
            scene == 1 && (
              <group>
                <Subway camRef = {camRef}/>
                <LookCamera camRef = {camRef}/>

                
              </group>
            )
          }
          {/* 
          <BackdropPoints/>
          
          */}
          {
            scene == 2 && (
              <group>
                <Childhood/>
              <MouseOrbit/>

              </group>
            )
          }

          {
            scene == 3 && (
              <group>
              <MouseOrbit/>

                <group scale={0.1} rotation={[-Math.PI/2, 0, Math.PI/3]} >
                  <BasicParticles filename = "boxer-pointcloud.ply" setScene = {setScene} scene = {scene}/>
                </group>
              </group>
            )
          }
          </group>

          <axesHelper args={[5]} />

          <ambientLight color="#ffffff" intensity={4}/>
        </Canvas>
      </div>
      <div class = "overlay">
        <button onClick={()=> {setScene((scene + 1)%4)}}>ABC</button>
      </div>
    </div>
  );
}

export default App;
