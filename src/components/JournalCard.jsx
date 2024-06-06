import Draggable from 'react-draggable';
import { motion } from "framer-motion"
import { Reorder } from 'framer-motion'
import { useRef, useState } from 'react';

const JournalCard = ( {entry, images, url, code} ) => {



    const constraintRef = useRef(null)

   const [mainPic, setMainPic] = useState(images[0].fields.file.url)

   const handleClick =(image) =>{
    setMainPic(image.fields.file.url)
   }

  //  console.log(images)


    // console.log(entry[id].images[id])

    // console.log(entry)
  return ( 
    <div 
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity:1,
        //   transition: {
        //     type: "tween",
        //     duration: 2,
        //     // delay:1
        //   } }}
        // viewport={{ once: true }}
        className="p-5 mb-2 flex journalCard w-[100%] transition-all ease-in-out rounded-lg border-2 bg-primary"  ref={constraintRef}>
        <motion.div  
    

           className="grid grid-cols-3 md:grid-cols-1 rounded-[10px] w-[100%]" >
                    
            <div className='grid sm:grid-cols-2 gap-4'>

                {/* {
                images.map((image, index) => (
                <div key={index}>

                        <img  className="h-auto max-w-full rounded-lg border-4" 
                          src={`${image.fields.file.url}` } /> 

                </div>
                        
                        
                    )
                    ) 
               }     */}
                 <div className='w-[100%]'>

                  { (images[0].fields.description === 'video') ? 
                      <video muted={false} className='h-auto w-[100%] sm:h-auto sm:w-[100%] border-2 border-black rounded-lg' controls >
                      <source src={`${mainPic}`} type="video/mp4" />
    
                      </video> 
                      

                  :

                  <img  className="lg:h-[250px] h-auto max-w-full rounded-lg border-2 border-black" 
                  src={`${mainPic}`}/> 
                  }

                  

                 

                </div>

           <div className='ml-5 h-auto max-w-full rounded-lg text-[black] font-entryFont flex flex-col gap-4 justify-between'>
             {/* <h3 className='text-[2em]'> enry title</h3> */}
             <div>
                 <p className='sm:text-lg sm:w-fit w-[50vw]'> {entry} </p>
               
                 <div className='flex flex-col pt-2'>

                 {(url === undefined)
                     ? 
                      <></>   
                     : 
                     <a href={url} target='_blank ' className=' hover:cursor-pointer text-[white]'> <span className='text-[black] pb-5' >Live demo:</span> <br />{url}</a>

                     
                     }
                   
                     {(code === undefined)
                     ? 
                      <></>   
                     : 
                     <a href={code} target='_blank' className=' hover:cursor-pointer text-[white]'> <span className='text-[black] pb-5'> Code: </span><br />{code}</a>
                     
                     }
                 </div>

             </div>
             <div className='flex flex-row gap-2 items-end jus'>


                {
                    images.map((image, index) => (
                    <div key={index}>
                     { (image.fields.description === 'video') 
                     
                     ? 
                     
                     

                    < >
                    {/* //  <source src={image.fields.file.url} type="video/mp4"/> */}
   
                     </> 
                     
                     : 
                      
                     <img  key={index} className="h-auto w-[100%] p-2 rounded-lg border-black border-2  hover:cursor-pointer "
                     onClick={() => handleClick(image)} 
                     src={`${image.fields.file.url}` } /> 
                     
                     }


                    </div>
                            
                            
                        )
                        ) 
                  } 

             </div>
   

           </div>

           

          </div>
      
        </motion.div>


       
    </div>
  )
}

export default JournalCard