import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import BasicParticles from './BasicParticles';
import BackdropPoints from './Assets/BackdropPoints';
import CustomGeometryParticles from './Assets/BackdropPoints2';
import Hand from './Scenes/Hand';
import Subway from './Scenes/Subway';
import ShaderTest from './Assets/ShaderTest';
import { useState, useRef, useEffect, Suspense} from 'react';
import LookCamera from './Cameras/LookCamera';
import MouseOrbit from './Cameras/MouseOrbit';
import Childhood from './Scenes/Childhood';
import { AnimatedPoints } from './Assets/AnimatedPoints';
import pingSound from "./ambient.mp3"
import SkinnedPointCloudGLB from './Assets/SkinnedPointCloudGLB';
import Swing from './Scenes/Swing';
import Plane from './Scenes/Plane';
import Bathroom from './Scenes/Bathroom';
import Office from './Scenes/Office';
import Dock from './Scenes/Dock';
import LivingRoom from './Scenes/LivingRoom';
import { FilmCamera } from './Assets/FilmCamera';
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Characters from './Scenes/Characters';

function App() {

  const [scene, setScene] = useState(0)
  const [info, setInfo] = useState(false)
  const camRef = useRef()
  const orbRef = useRef()
  const [lookPositionIndex, setLookPositionIndex]  = useState(0)
  const ping = new Audio(pingSound)
  useEffect(()=> {
  }, [])

  function playSound() {
    // ping.play()

  }
  console.log(scene)
  return (
    <div className="App">
      <div class = "game_container" onClick={playSound}>
        <Canvas >
          <group >
          {
            scene == 0  && (
              <group rotation={[0, +Math.PI/2, 0]}>
                  <Hand />
                  <MouseOrbit distance = {7}/>
              </group>

            )
          }


          
          {   
            scene == 1 && (
              <group>
                <Subway camRef = {camRef} setLookPositionIndex = {() => {setLookPositionIndex(lookPositionIndex + 1)}}/>
                <LookCamera camRef = {camRef} startposition = {[0, 1, 10]} rotation = {[0, 0, 0]}
                lookPositionIndex = {lookPositionIndex}/>
              </group>
            )
          }
          {
            scene == 2 && (
              <group>
                <Childhood/>
                <MouseOrbit distance = {10.0}/>
              </group>
            )
          }
          {
            scene == 3 && (
              <group>
                <Plane/>
                {/*
                <LookCamera camRef = {camRef} startposition = {[1.2, 2, 1]} rotation = {[0, Math.PI/4, 0]} />
            */}
                <OrbitControls/>
              </group>
            )
          }
          {
            scene == 4 && (
              <group>
                <group position={[0, -.2, 2]} rotation ={[-Math.PI/2, 0, 0]}>

                  <Bathroom/>
                </group>
                <OrbitControls/>

                {/*

                <LookCamera camRef = {camRef} startposition = {[1.2, 2, 1]} rotation = {[0, Math.PI/4, 0]}/>
            */}

              </group>
            )
          }
          {
            scene == 5 && (
              <group>

                <Office/>
                <OrbitControls/>
              </group>
            )
          }
          
          { 
          
            scene == 6 && (
            <group>
                  <Swing/>
                  <OrbitControls/>
                  
            </group>
            )

          }
          { 
          
          scene == 7 && (
          <group>
                <LivingRoom/>
                <OrbitControls/>
                
          </group>
          )

        }


          {/*

          {
            scene == 7 && (
              <group>
                <SkinnedPointCloudGLB/>

                <BasicParticles filename = "boxer-pointcloud.ply" setScene = {setScene} scene = {scene}/>

                <group name="Camera" position={[10, 0, 0]} rotation={[0, 0.02, -0.05]}>
                <Swing/>

                </group>

                <OrbitControls/>
              </group>
            )
          }
                */}

          {
            scene == 8  && (
              <group rotation={[0,Math.PI, 0]}>


                  <EffectComposer>
                      <DepthOfField
                        focusDistance={2}
                        focalLength={.8}
                        bokehScale={8}
                      />
                    </EffectComposer>

                  <Dock />
                  <OrbitControls/>
              </group>

            )
          }
          {
            scene == 9 && (
            <group>
              <FilmCamera/>
              <MouseOrbit distance = {.4}/>
              <ambientLight intensity={0.5}/>
            </group>
            )
          }
          {
            scene == 10 && (
            <group>
              <Characters/>
              <OrbitControls/>
              <ambientLight intensity={0.5}/>
            </group>
            )
          }


          </group>


        </Canvas>
      </div>
      <div class = "overlay">
        <div class = "logo-icon">
          <h1>Memoria</h1>
        </div>
        <button class = "click-button" id = "next" onClick={()=> {setScene((scene + 1)%11)}}>Next - </button>
        <button class = "click-button" id = "previous" onClick={()=> {setScene((scene - 1)%11)}}> - Previous</button>

        <div class = "info-icon" onMouseEnter={()=> {setInfo(true)}}>
          Info!
        </div>
        {info && (
          <div class = "info-container" onMouseLeave={()=>{setInfo(false)}}>
          <h1>
            1. Digital Memoria
          </h1>
          <p>
          My Major Studio project concerns a merging of three strains of inquiry - memory, the internet, and computer generated imagery (CGI). I will start by tracing the history of memory in computation and the internet. From this history, I will argue for the use of point clouds as an artistic medium, capable of mimicking and representing memories. I conclude with a description my website, Digital Memoria
          <br/>
          <br/>
Sed eget molestie mi. Aenean vel fringilla sem, a mattis lorem. Curabitur vel diam eu nibh fermentum ultrices. Morbi pretium elit sit amet elit pulvinar, in mollis mi euismod. Phasellus in cursus eros. Aliquam erat volutpat. Vivamus eget pretium odio. Ut imperdiet sed massa ut varius. Aliquam imperdiet nec turpis eu porttitor. Phasellus ut mi pharetra, porta nisi vitae, pretium risus. In ut ipsum mauris. Donec ultrices, lacus non semper ullamcorper, mi lectus sollicitudin odio, sed lacinia tellus dui sit amet dolor.
<br/>
          <br/>
          <h1>
            2. Digital Memoria
          </h1>
Curabitur ut leo erat. In interdum, tellus et hendrerit ornare, dolor velit egestas lectus, vitae cursus nisl ipsum sed velit. Suspendisse et faucibus dolor. Nunc id ex vestibulum, lobortis ligula id, lobortis massa. Sed sollicitudin semper velit, at vestibulum urna venenatis vel. Integer id tempus mi, eget hendrerit velit. Nulla vehicula pharetra nulla a consectetur. Curabitur consequat fringilla pulvinar. Nulla purus metus, condimentum ac scelerisque quis, vestibulum non ipsum. Duis quis imperdiet ipsum. Curabitur lacinia vestibulum justo sit amet tempor. Donec enim tellus, mattis et maximus sed, sagittis ac felis.
<br/>
          <br/>
Duis pharetra leo eu semper varius. Phasellus pretium nisi quis rutrum vulputate. In euismod justo vitae mattis iaculis. Morbi ante risus, porttitor viverra nulla eget, iaculis maximus urna. Cras lacinia tellus et ornare molestie. Morbi sollicitudin augue venenatis leo imperdiet pretium. Etiam aliquet massa et nisi ultricies, a congue magna blandit. Nulla nec urna ac urna condimentum porta eu sed orci. Aenean molestie hendrerit congue. Maecenas sed justo ac lectus elementum mollis sed vel ligula. Phasellus condimentum vulputate dictum.
<br/>
          <br/>
Suspendisse a sapien eget nibh imperdiet hendrerit volutpat vestibulum orci. Praesent hendrerit tempus libero ut tempus. Pellentesque euismod metus vitae fermentum varius. Pellentesque sed urna porttitor quam accumsan hendrerit eu ac urna. Donec varius nisi ac ornare pharetra. Aliquam non luctus arcu. Sed volutpat nibh nec vehicula mattis. Suspendisse finibus mi eu tortor euismod ultrices non ut nibh. Nullam mattis tempus turpis, porta tempor neque ultricies a. Ut gravida faucibus augue, sed feugiat diam semper at. Vivamus ipsum ex, aliquet nec venenatis ut, scelerisque a enim. Praesent luctus sit amet nulla sed dapibus. Mauris justo velit, porttitor sed fringilla quis, pharetra at leo. Phasellus eget pharetra nulla. Mauris commodo, ante id commodo accumsan, lacus nisl molestie velit, in posuere massa nisl ac odio.

          </p>
        </div>

        )}
        
      </div>
    </div>
  );
}

export default App;
