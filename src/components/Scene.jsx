import { Canvas,} from "@react-three/fiber"
import { View} from "@react-three/drei"
import { useRef } from "react"

import WalkMan from "./WalkMan"
// import * as THREE from 'three'
import LandingPage from "./LandingPageC"




const Scene = () => {

const container = useRef()



  return (
    <div className="absolute top-0 h-[100vh] w-full bg-background"  ref={container}>






    <View index={1} className="absolute top-0 w-full h-[60vh] sm:h-[70%] md:h-[80%] p-3 sm:p-5 z-10">


        <LandingPage/>



    </View>


 <View index={2} className="absolute hidden sm:block border-background top-[50px] left-[50%] md:left-[67%] lg:left-[79%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-[black] bg-center border-2 rounded-lg border-black hover:cursor-pointer z-20" onClick={() => window.open('https://t.co/htY4nn8tWe', '_blank')}>
        <WalkMan/>
</View>

<p className="absolute hidden sm:block top-[255px] left-[50%] md:left-[67%] lg:left-[79%] w-[200px] text-center font-nudica text-[0.55rem] text-secondary uppercase tracking-widest z-20 pointer-events-none">
  click player for more
</p>



 <Canvas className="canvas top-0 right-0 w-full sm:h-[100%] z-20" eventSource={container}>

        <View.Port/>

</Canvas>

 <div className="invisible absolute top-0 right-0  h-[80%] lg:w-[32vw] md:w-[40vw] rounded-lg  border-4 flex justify-center items-end z-[1] flow ">

   
 </div>


      

    </div>

  )
}

export default Scene