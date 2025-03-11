import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Box, OrbitControls, useAnimations, useGLTF, PresentationControls, Float , View, OrthographicCamera, useAspect} from "@react-three/drei"
import { useRef } from "react"

import WalkMan from "./WalkMan"
import * as THREE from 'three'
import LandingPage from "./LandingPage"




const Scene = () => {

const container = useRef()



  return (
    <div className="absolute top-0 h-[100vh] w-[100vw] bg-background "  ref={container}>






    <View index={1} className="absolute top-0 w-[100vw] sm:w-[100%] h-[80vh] sm:h-[80%] p-5  bg-text ">


        <LandingPage/>



    </View>


 <View index={2} className="absolute invisible  border-background sm:visible top-[70%] sm:top-[50px] left-[50%] md:left-[67%] lg:left-[79%] w-[200px] h-[200px] bg-[black] bg-cover bg-center border-2 rounded-lg border-black hover:mouse-pointer " >

    {/* <ambientLight intensity={1}/> */}
    {/* <OrbitControls/> */}

    {/* <PresentationControls
        polar={[0, 0]}
        azimuth={[0, Math.PI/4]}
    > */}
        {/* <Float
            floatIntensity={1}
            rotationIntensity={0.5}
            floatingRange={[0, 1]} 
        
        > */}


      <WalkMan/>
    

        {/* </Float> */}


    {/* </PresentationControls> */}

</View> 



 <Canvas className="canvas top-0 right-0 w-[100vw]  sm:h-[100%] " eventSource={container}>

        <View.Port/>

</Canvas>

 <div className="invisible absolute top-0 right-0  h-[80%] lg:w-[32vw] md:w-[40vw] rounded-lg  border-4 flex justify-center items-end z-[1] flow ">

      {/* <img src="/icons/icons8-play-pause-48.png" /> */}
          {/* <svg className="m-20 hover:cursor-pointer hover:scale-110 transition-all duration-500 hover:ease-in-out  border-4 rounded-lg p-2 border-background " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            width="40px" height="40px" viewBox="0 0 45.974 45.975"
            xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <path d="M9.629,44.68c-1.154,1.16-2.895,1.51-4.407,0.885c-1.513-0.623-2.5-2.1-2.5-3.735V4.043c0-1.637,0.987-3.112,2.5-3.736
                    c1.513-0.625,3.253-0.275,4.407,0.885l17.862,17.951c2.088,2.098,2.088,5.488,0,7.585L9.629,44.68z"/>
                </g>
                <g>
                  <g>
                    <path d="M38.252,45.975c-2.763,0-5-2.238-5-5V5c0-2.762,2.237-5,5-5c2.762,0,5,2.238,5,5v35.975
                      C43.252,43.736,41.013,45.975,38.252,45.975z"/>
                  </g>
                </g>
              </g>
            </g>
          </svg> */}
 </div>


      

    </div>

  )
}

export default Scene