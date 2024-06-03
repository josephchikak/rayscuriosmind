import JournalEntry from "./components/JournalEntry"
import './journal.css'
import P5sketch from "./p5Js/Sketch"
import Scene from "./components/Scene"
import { motion, useScroll } from 'framer-motion'
import About from "./components/About"
import { Canvas , useFrame} from "@react-three/fiber"
import Monitor from "./components/Monitor"




const Journal = () => {

    // let width = p5Cointainer.clientWidth
    // let height = p5Cointainer.clientHeight

  return (
    <motion.div
    
     className=' w-[100%] h-[100%] text-black flex flex-col bg-background transition-all ease-in-out overflow-hidden'>
          <div className="h-[80vh] invinsible sm:visible sm:h-[50vh] relative">
                  <Scene/>

          <div className='list-none h-[100%] w-[100vw]  z-1 overflow-hidden absolute '>
                <nav className="w-[100%]">
                    <ul className="flex p-2 font-gord justify-center z-10 text-[1.25rem] ">
                        <li className="p-2 hover:cursor-pointer hover:border-b-primary hover:border-b-2 absolute hidden sm:visible">
                            contact me
                        </li>

                        {/* <li className="p-1 hover:cursor-pointer hover:border-b-primary hover:border-b-4">
                            projects
                        </li> */}
                    </ul>

                </nav>
                {/* <ul className=""> */}
                    <h1 className="w-[20%] flex justify-left flex-col font-gord pl-14 sm:pb-20  z-[1000] text-[5.062rem]">
                    {/* <span className="text-[2rem] ">welcome to </span>  */}
                    ray's curious mind <br/>
                    <span className="text-[1.25rem] font-entryFont md:w-[50vw] w-[70vw] pt-10 sm:pt-0 sm:w-[100%]">Hi and welcome to my playground</span>
                    </h1>
                {/* </ul> */}
        </div>

            </div>
     
      

        <main className="w-[100%] h-[100%] flex flex-col border-black border-t-2">
      


            <h2 className="p-5 text-[1.5rem] border-b-2 border-primary font-gord self-center">About</h2>

            <div className="p-5 flex flex-col md:flex-row h-[50vh] sm:h-[100%] w-[100vw] ">

                <About/>

                <motion.div  

                    initial={{ x: 500 }}
                    whileInView={{ x:0,
                    transition: {
                        type: "spring",
                        duration: 2,
                    
                    } }}
                    // exit={{x: 500}}
                    
                                    
                className="md:h-[50vh] md:w-[50%] invisible md:visible hover:cursor-pointer">

                <Canvas>
                    <Monitor/>
                </Canvas>

                </motion.div>

            </div>

            <h2 className="p-5 mb-1 text-[1.5rem] border-b-2 border-primary font-gord self-center">Projects/ Jornal Entries</h2>

            <motion.div 
            
                className="p-5 column-4 h-[100%] flex w-[100%] border-black ">
                <JournalEntry/>

                {/* <div>
                     <P5sketch/>
               </div> */}

            {/* <div className="sticky bottom-[90%] z-1 left-[80%] w-[250px] h-[250px] bg-primary border-4 border-black bg-cover bg-center bg-[url('/photos/DSC01927.jpg')]">

            </div> */}

         </motion.div>
         
          
       
        </main>
 
  </motion.div>
  )
}

export default Journal