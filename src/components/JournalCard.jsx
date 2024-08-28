import Draggable from 'react-draggable';
import { motion } from "framer-motion"
import { Reorder } from 'framer-motion'
import { useRef, useState, useLayoutEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';


const JournalCard = ( {entry, images, url, code} ) => {

  const card = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


      gsap.from(card.current, {
            scrollTrigger:{
                trigger: card.current,
                start:'0px bottom',
                end: '500px bottom',
                // markers: true,
                scrub:true,
                // toggleActions: 'reverse'
            },
            // opacity: 0,
            // delay:1,
            y:'-20px',
            duration:1,
            ease:'linear'
     })

    //  timeline
    //     .from(card.current, {opacity: 0 })

},[])

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
        
        className="p-5 mb-2 flex h-fit journalCard w-[100%] bg-background transition-all ease-in-out rounded-lg border-2 border-primary relative text-[1rem]"  ref={card}>
        <div
    

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
                      <video muted={true} className='h-auto w-[100%] sm:h-auto sm:w-[100%] border-2 border-primary rounded-lg' controls >
                      <source src={`${mainPic}`} type="video/mp4" />
    
                      </video> 
                      

                  :

                  <img  className="lg:h-[250px] object-cover h-auto max-w-full rounded-lg border-2 border-primary" 
                  src={`${mainPic}`}/> 
                  }

                  

                 

                </div>

           <div className='ml-5 h-auto max-w-full rounded-lg text-text font-inter  flex flex-col gap-4 justify-between'>
             {/* <h3 className='text-[2em]'> enry title</h3> */}
             <div>
                 <p className='sm:w-fit w-[50vw] text-text sm:text-[0.9rem]'> {entry} </p>
               
                 <div className='flex flex-col pt-2'>

                 {(url === undefined)
                     ? 
                      <></>   
                     : 
                     <a href={url} target='_blank ' className=' hover:cursor-pointer text-background'> <span className='text-primary pb-5' >Live demo</span></a>

                     
                     }
                   
                     {(code === undefined)
                     ? 
                      <></>   
                     : 
                     <a href={code} target='_blank' className=' hover:cursor-pointer text-background'> <span className='text-primary pb-5'> Code </span></a>
                     
                     }
                 </div>

             </div>
             <div className='flex flex-row gap-2 items-end'>


                {
                    images.map((image, index) => (
                    <div key={index}>
                     { (image.fields.description === 'video') 
                     
                     ? 
                     
                     

                    < >
                    {/* //  <source src={image.fields.file.url} type="video/mp4"/> */}
   
                     </> 
                     
                     : 
                      
                     <img  key={index} className="h-auto w-[100%] p-2 rounded-lg border-primary border-2  hover:cursor-pointer "
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
      
        </div>


       
    </div>
  )
}

export default JournalCard