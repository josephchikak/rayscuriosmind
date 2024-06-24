
const About = () => {
  return (
    <div className=" sm:h-[20vh] md:w-[50%] w-[100%] h-[100%] p-6 flex flex-col">
        {/* <h1 className="font-gord text-[26px]">About</h1> */}
        <p className="font-entryFont w-[100%] text-[1.25rem] pt-5 ">
        I am Joseph but most people call me ray. 

        I am a multidisciplinary artist, designer and front-end web developer with a focus on buidling long lasting experiences with sound and visuals. I love to experiment and create interative visual, websites, generative art, and animations.

        </p>

        <div className="pt-10 font-entryFont text-[1.35rem] ">
          <h2> My skills include: </h2> 
        
          <p className="pt-5 text-[1.20rem]">
          Three.js, <br /> GLSL,<br /> React,<br /> CSS, <br />p5.js, <br />HTML,<br />Blender

          </p>
        </div>


    </div>
  )
}

export default About