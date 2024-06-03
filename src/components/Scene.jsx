import { Canvas, useThree } from "@react-three/fiber"
import { Box, OrbitControls, useAnimations, useGLTF, PresentationControls, Float , View, OrthographicCamera, useAspect} from "@react-three/drei"
import { useRef } from "react"
import  Monitor  from "./Monitor"
import WalkMan from "./WalkMan"
import * as THREE from 'three'
import LandingPage from "./LandingPage"




const Scene = () => {

const container = useRef()



  return (
    <div className="absolute top-0 h-[100%] w-[100vw]"  ref={container}>



    <View index={1} className="absolute top-0 w-[100%] sm:w-[70%] h-[100%] p-5">


        <LandingPage/>



    </View>


 <View index={2} className="absolute invisible sm:visible top-[70%] sm:top-[50px] left-[50%] md:left-[67%] lg:left-[79%] w-[200px] h-[200px] bg-[black] bg-cover bg-center border-2 rounded-lg border-black hover:mouse-pointer" >

    <ambientLight intensity={1}/>
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

{/* <View index={3} className="absolute top-[50px] left-[79%] w-[500px] z-1 h-[500px] bg-[] bg-cover bg-center border-2 rounded-lg border-black hover:mouse-pointer">
        <Monitor/>

</View> */}

 <Canvas className="canvas top-0 left-0 w-[100%] h-[100%] z-1 " eventSource={container}>

        <View.Port/>

</Canvas>

 <div className="invisible sm:visible absolute top-0 right-0  h-[100%] lg:w-[30vw] md:w-[40vw]  border-2 flex justify-center items-end z-10">
      <img src="/icons/icons8-play-pause-48.png" className=" m-20 hover:cursor-pointer bg-primary hover:bg-background"/>
 </div>


      

    </div>

  )
}

export default Scene