
const About = () => {
  return (
    <div className=" sm:h-[20vh] md:w-[50%] w-[100%] h-[100%] p-6 flex flex-col">
        {/* <h1 className="font-gord text-[26px]">About</h1> */}
        <p className="font-inter w-[100%] text-[1rem] pt-5 ">
        I am Joseph but most people call me ray. 

        I am a multidisciplinary artist, designer and front-end web developer with a focus on buidling long lasting experiences with sound and visuals. I love to experiment and create interative visual, websites, generative art, and animations.

        </p>

        <div className="pt-10 font-inter text-[1.2rem] ">
          <h2 className="text-primary"> My skills include: </h2> 
        
          <p className="pt-5 text-[1rem]">
          Three.js, <br /> GLSL,<br /> React,<br /> CSS, <br />p5.js, <br />HTML,<br />Blender

          </p>
        </div>


    </div>
  )
}

export default About