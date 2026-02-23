import { useRef, useState, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

/* eslint-disable */
const JournalCard = ({ entry, images, url, code }) => {
  const card = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(card.current, {
      scrollTrigger: {
        trigger: card.current,
        start: "0px bottom",
        end: "500px bottom",
        // markers: true,
        scrub: true,
        // toggleActions: 'reverse'
      },
      // opacity: 0,
      // delay:1,
      y: "-20px",
      duration: 1,
      ease: "linear",
    });

    //  timeline
    //     .from(card.current, {opacity: 0 })
  }, []);

  const constraintRef = useRef(null);

  const [mainPic, setMainPic] = useState(images[0]);

  const handleClick = (image) => {
    
    setMainPic(image);


  };

  //  console.log(images)

  // console.log(entry[id].images[id])

  // console.log(entry)
  return (
    <div
      className="p-3 sm:p-5 mb-2 flex h-full journalCard w-full bg-text transition-all ease-in-out rounded-lg border-2 border-primary relative text-[1rem] break-inside-avoid"
      ref={card}
    >
      <div className="rounded-[10px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* {
                images.map((image, index) => (
                <div key={index}>

                        <img  className="h-auto max-w-full rounded-lg border-4" 
                          src={`${image.fields.file.url}` } /> 

                </div>
                        
                        
                    )
                    ) 
               }     */}
          <div className="w-[100%]">

            {mainPic?.fields?.description === "video" ? (
              <video
                key={mainPic?.fields?.file?.url}
                muted={true}
                className="h-auto w-[100%] object-contain sm:h-auto sm:w-[100%] border-2 border-primary rounded-lg"
                controls
              >
                <source
                  src={`${mainPic?.fields?.file?.url}`}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                className="h-[200px] md:h-full object-contain w-full rounded-lg border-2 border-primary"
                src={`${mainPic?.fields?.file?.url}`}
              />
            )}
          </div>

          <div className="md:ml-5 mt-4 md:mt-0 h-auto max-w-full rounded-lg text-primary font-nudica flex flex-col gap-4 justify-between">
            {/* <h3 className='text-[2em]'> enry title</h3> */}
            <div>
              <p className="w-full text-background text-[0.85rem] sm:text-[0.9rem]">
                {" "}
                {entry}{" "}
              </p>

              <div className="flex flex-col pt-2">
                {url === undefined ? (
                  <></>
                ) : (
                  <a
                    href={url}
                    target="_blank "
                    className=" hover:cursor-pointer text-background"
                  >
                    {" "}
                    <span className="text-primary pb-5">Link</span>
                  </a>
                )}

                {code === undefined ? (
                  <></>
                ) : (
                  <a
                    href={code}
                    target="_blank"
                    className=" hover:cursor-pointer text-background"
                  >
                    {" "}
                    <span className="text-primary pb-5"> Code </span>
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {images &&
                images.map((image, index) => (
                  <div
                    key={index}
                    className="h-12 w-12 sm:h-16 sm:w-16 hover:cursor-pointer rounded-lg border-primary border-[0.5px] overflow-hidden"
                  >
                    {image?.fields?.description === "video" ? (
                      <video
                        muted={true}
                        className="h-12 w-12 sm:h-16 sm:w-16 object-cover p-0"
                        onClick={() => handleClick(image)}
                      >
                        <source
                          src={`${image?.fields?.file?.url}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        className="h-12 w-12 sm:h-16 sm:w-16 object-cover p-0"
                        src={`${image?.fields?.file?.url}`}
                        alt={`thumbnail ${index}`}
                        onClick={() => handleClick(image)}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
