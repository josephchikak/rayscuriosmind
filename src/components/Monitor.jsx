import React, { useRef } from 'react'
import { useGLTF, useTexture , OrbitControls, Html, Float, PresentationControls} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Monitor(props) {
  const { nodes } = useGLTF('models//Retro computer.glb')

const bakedTexture = useTexture('models/monitor baked.jpg')
bakedTexture.flipY = false


useFrame(({gl})=>{

  gl.setPixelRatio((Math.min(window.devicePixelRatio, 2)))
      
  // gl.setClearColor('#E24E1B')

  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure =0.7
  gl.antialias = true
  // gl.setClearColor('black')
})

const matTexture1 = useTexture('/models/texture/9D9D9D_4E4E4E_646464_6C6C6C.png')
matTexture1.flipY = false
const matTexture2 = useTexture('/models/texture/9D9D9D_4E4E4E_646464_6C6C6C.png')




  return (
<>

<PresentationControls

// global
// rotation={ [ 0.13, 0.1, 0 ] }
polar={ [ - 0.15, 0.2 ] }
azimuth={ [ - 0.2, 0.25 ] }
config={ { mass: 2, tension: 400 } }
>


{/* <ambientLight intensity={0}/> */}
<Float 
rotationIntensity={ 0.3 }
floatIntensity={0.5}
>

<group {...props} dispose={null}  >
      <group rotation={[-Math.PI / 2, -Math.PI *0.5, -Math.PI * 0.5]} position={[0,0,-0.50]} scale={2.5}>
        {/* <group rotation={[Math.PI / 2,0, 0]}>
    

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            // material={materials.Part2}
          > 
          <meshToonMaterial
          // wireframe={true}
          color={'#E24E1B'}
          map={matTexture2}/>

          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            // material={materials.Part1}
          >

          <meshMatcapMaterial map={matTexture2}
          // wireframe={true}

          />

        
          </mesh>

        </group> */}

      <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={1}
            rotation={[0,Math.PI * 0.5 ,0]}
            // position={[0,0.25,-0.02]}

        > 
            <iframe src='https://light-house-particles.vercel.app/'/>
        </Html>

      </group>
      
    </group>

    
</Float>

</PresentationControls>


    {/* <OrbitControls/> */}

{/* 
    <group {...props} dispose={null} 
        rotation={[0, Math.PI * 0.5, 0]}
        position={[0,-0.3,-1.2]}
        rotation={[0,Math.PI*0.5,-Math.PI*0.05]}
    >
      <mesh
        geometry={nodes.baked.geometry}
        position={[0, 0.992, 0]}
        scale={2}
      >

        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide}/>
        <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={1.1}
            rotation={[0,Math.PI * 0.5 ,0]}

        > 
            <iframe src='https://light-house-particles.vercel.app/'/>
        </Html>

        </mesh>
    </group> */}


 
{/* </Float> */}

      
</>

  )
}

useGLTF.preload('models/monitor.glb')
