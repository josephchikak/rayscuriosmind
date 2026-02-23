import { useRef, useState, useLayoutEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap'

/* eslint-disable */
const WebCard = ({ entry }) => {

  const card = useRef(null)
  const { images, description, url } = entry

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(card.current, {
      scrollTrigger:{
        trigger: card.current,
        start:'0px bottom',
        end: '500px bottom',
        scrub:true,
      },
      y:'-20px',
      duration:1,
      ease:'linear'
    })
  }, [])

  // Get the main image URL from first image in array
  const mainImageUrl = images && images[0]?.fields?.file?.url
  const mainImageMimeType = images && images[0]?.fields?.file?.contentType || ''
  const [displayedImage, setDisplayedImage] = useState(mainImageUrl)
  const [displayedMimeType, setDisplayedMimeType] = useState(mainImageMimeType)

  const handleImageClick = (image) => {
    const imageUrl = image?.fields?.file?.url
    const mimeType = image?.fields?.file?.contentType || ''
    if (imageUrl) {
      setDisplayedImage(imageUrl)
      setDisplayedMimeType(mimeType)
    }
  }

  const isVideo = (mimeType) => {
    return mimeType && mimeType.startsWith('video/')
  }

 

  return (
    <div
      className="p-3 sm:p-5 mb-2 flex h-fit journalCard w-full bg-text transition-all ease-in-out rounded-lg border-2 border-primary relative text-[1rem] font-nudica break-inside-avoid"
      ref={card}
    >
      <div className="rounded-[10px] w-full">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Main Image */}
          <div className='w-[100%]'>
            {displayedImage && (
              isVideo(displayedMimeType) ? (
                <video
                  className="lg:h-[250px] w-full object-cover rounded-lg border-2 border-primary"
                  controls
                  muted
                >
                  <source src={displayedImage} type={displayedMimeType} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className="lg:h-[250px] object-cover h-auto max-w-full rounded-lg border-2 border-primary"
                  src={displayedImage}
                  alt="Web project"
                />
              )
            )}
          </div>

          {/* Description and Links */}
            <div className='md:ml-5 mt-4 md:mt-0 h-auto max-w-full rounded-lg text-primary font-nudica flex flex-col gap-4 justify-between'>
            <div>
              {/* Render description text */}
              <div className='w-full text-background text-[0.85rem] sm:text-[0.9rem]'>
                {description && (
                  typeof description === 'string' ? (
                    <p>{description}</p>
                  ) : (
                    <p>{description.content?.[0]?.content?.[0]?.value || 'No description'}</p>
                  )
                )}
              </div>

              {/* Links */}
              <div className='flex flex-col pt-2'>
                {url && (
                  <a href={url} target='_blank' rel="noopener noreferrer" className='hover:cursor-pointer text-background'>
                    <span className='text-primary pb-5'>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Image Thumbnails */}
            {images && images.length > 0 ? (
              <div className='flex flex-row gap-2 items-center overflow-x-auto bg-red-200 p-2'>
                {images.map((image, index) => {
                  const mimeType = image?.fields?.file?.contentType || ''
                  const isVid = isVideo(mimeType)
                  const isActive = displayedImage === image?.fields?.file?.url
                  return (
                    <div
                      key={index}
                      className={`relative h-16 w-16 flex-shrink-0 rounded-lg border-2 hover:cursor-pointer group overflow-hidden transition-all ${
                        isActive ? 'border-secondary shadow-lg' : 'border-primary'
                      }`}
                      onClick={() => handleImageClick(image)}
                    >
                      {isVid ? (
                        <>
                          <video
                            className="h-full w-full object-cover"
                            muted
                          >
                            <source src={image?.fields?.file?.url} type={mimeType} />
                          </video>
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841L2.532.563l-1.065.636 1.95 1.231V15.7c0 .819.67 1.488 1.49 1.488h14.175c.819 0 1.49-.669 1.49-1.488V2.564h1.065l1.951-1.231-1.065-.636L13.7 2.841m0 0a1.483 1.483 0 011.48 1.489v13.073a1.483 1.483 0 01-1.48 1.488H-1.475a1.483 1.483 0 01-1.48-1.488V4.33a1.483 1.483 0 011.48-1.489z" />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <img
                          className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
                          src={image?.fields?.file?.url}
                          alt={`Project thumbnail ${index + 1}`}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className='bg-yellow-200 p-2 w-full'>No images found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebCard
