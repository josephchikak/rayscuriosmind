import { Canvas, useThree , useFrame} from "@react-three/fiber"
import { Box, OrbitControls, useAnimations, useGLTF, Text, Float , useTexture, OrthographicCamera, useAspect} from "@react-three/drei"
import { useEffect, useRef, useState} from "react"
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import * as THREE from 'three'
import bgImag from '/photos/DSC01958.jpg'



const LandingPage = () => {

    const stickers = useRef([])

const [sticker, setSticker] = useState(useTexture('/stickers/Asset ' + (1) + '.webp'))
    // const [sticker, setSticker] = useState('')

// const stickersUrl = ['/stickers/Asset 1.png','/stickers/Asset 2.png','/stickers/Asset 3.png','/stickers/Asset 4.png','/stickers/Asset 5.png','/stickers/Asset 6.png','/stickers/Asset 7.png','/stickers/Asset 8.png','/stickers/Asset 9.png','/stickers/Asset 10.png']
const stickersTexture = []

for (let i = 0; i < 10; i++) {
    stickersTexture.push(useTexture('/stickers/Asset ' + (i+1) + '.webp'));
    stickersTexture[i].magFilter = THREE.NearestFilter;
    stickersTexture[i].minFilter = THREE.LinearMipMapLinearFilter;
}

useEffect(() =>{

},[])

// console.log(stickers)





const size = useAspect(1800, 1000)

const viewport = useThree(state => state.viewport)

// console.log(size)

// const 

const mouse = new THREE.Vector2(0,0) 
const prevMouse = new THREE.Vector2(0,0) 


window.addEventListener('mousemove' , (e) => {
        mouse.x = e.clientX - viewport.width/2;
        mouse.y = viewport.height/2 - e.clientY
})

let currentSticker = 0


const setNewSticker = (x,y,index) => {

    const n = Math.floor(Math.random() * stickersTexture.length) + 1



    setSticker(stickersTexture[n])

    
    let mesh = stickers.current

    // console.log(mesh)


    mesh.visible = true

    mesh.position.x = x 
    mesh.position.y = y 

    mesh.material.opacity = 1



}

// console.log(stickers.current[0])









const trackMousePos = () =>{
// setNewSticker()
        if(Math.abs(mouse.x - prevMouse.x) < 4 || Math.abs(mouse.y - prevMouse.y) < 4){
            //do nothing
        }
        else {
            
        setNewSticker(mouse.x, mouse.y, currentSticker)

        currentSticker = (currentSticker + 1)%10

        // console.log(currentSticker)
        }

        prevMouse.x = mouse.x 
        prevMouse.y = mouse.y 

}



useFrame(({gl}) => {



    // gl.setPixelRatio((Math.min(window.devicePixelRatio, 2)))
      
    // gl.setClearColor('#E24E1B')

    // gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMapping = THREE.LinearToneMapping 
    gl.toneMappingExposure =  0.9
    gl.antialias = true



    // stickers.current.position.y = mouse.y
    // stickers.current.position.x = mouse.x

    trackMousePos()

    stickers.current.material.opacity *= 0.995

    // stickers.current.material.map.minFilter = THREE.LinearFilter;

    // stickers.current.forEach(sticker => {
    // })

    
    // console.log(stickers.current)

})

  return (
    <>
        
        <OrthographicCamera  near={-1000} far={1000}  makeDefault position={[0,0,2]} left={-0.5} right={0.5} top={0.5} bottom={-0.5} />
        {/* <OrbitControls/> */}
        {/* <mesh scale={size} >
            <planeGeometry args={[1,1, 1,1]}/>
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                // wireframe
                // fragmentShader={fragmentShader}
                // vertexShader={vertexShader}
            />
        </mesh> */}

        {/* <Text font="/Satoshi-Medium.woff"  color='black' fontSize={20} position={[0,400,0]} anchorX="center" anchorY="middle" >
            ray's curious mind
        </Text> */}

        {/* {stickersTexture.map((texture, index) => {
            return(
             
            )
           
        })} */}

                <mesh scale={100} ref={stickers} rotation={[0,0,2*Math.PI*Math.random()]} visible={false}>
                    <planeGeometry args={[1,1]}/>
                    <meshBasicMaterial map={sticker}   transparent={true}/>
                </mesh>
       

 

    </>
  )
}

export default LandingPage