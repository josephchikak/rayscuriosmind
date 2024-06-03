import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations, useTexture, } from '@react-three/drei'
import walkMan from '../assets/Sony TPS-L2 Walkman.glb'
import texture from '../assets/baked.jpg'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';


// useGLTF.preload('/Sony TPS-L2 Walkman.glb')
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/




export default function Model(props) {

  // const walkMan = useRef()


  // const bgImage =
  const group = useRef()
  const { nodes, animations } = useGLTF(walkMan)
  const { actions } = useAnimations(animations, group)

//   const { ref, mixer, names, actions, clips } = useAnimations(animations)
const bakedTexture = useTexture(texture)
bakedTexture.flipY = false


  useEffect(() => {
    //  playAnimation()
  }) 

  const playAnimation = () =>{
       
    if(actions.coverAnimation.isRunning === true ) {
        
        actions.coverAnimation.stop()
        actions.tapeAnimation.stop()
        actions.buttonAnimation.stop()
        
    }
          else {
 
            actions.coverAnimation.play()
            actions.tapeAnimation.play()
            actions.buttonAnimation.play()

          
    }
        
    
    // console.log(actions.coverAnimation.paused)
        
  
  }



  useFrame(({gl, scene, camera}, delta) => {

    gl.setPixelRatio((Math.min(window.devicePixelRatio, 2)))
      
    gl.setClearColor('#E24E1B')

    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure =0.7
    gl.antialias = true

    group.current.rotation.y += 0.006

    // console.log( )


  })





  return (

    <>
      {/* <ambientLight intensity={1}/> */}
    <group ref={group} {...props}   scale={0.4} position={[0,-1,1]} rotation={[0,Math.PI/3,0]}  dispose={null}>
      <group name="Scene">
     
        <mesh
          name="cover001"
          castShadow
          receiveShadow
          geometry={nodes.cover001.geometry}
         >
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            rotation={[0, -0.004, 0]}>
            <mesh
              name="Cylinder004"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004.geometry}
              material={nodes.Cylinder004.material}
              position={[-0.395, 3.653, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={0.191}
            />
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide}/>

            <group name="Speaker001" />
            <mesh
              name="tape001"
              castShadow
              receiveShadow
              geometry={nodes.tape001.geometry}
              material={nodes.tape001.material}
              position={[-0.195, 2.618, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1.602, 0.624, 0.763]}
            />

          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide}/>
            
          </mesh>

          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide}/>

        </mesh>
      </group>
    </group>
    </>

  )
}

// useGLTF.preload('/Sony TPS-L2 Walkman.glb')
