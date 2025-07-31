import JournalEntry from "./components/JournalEntry";
import "./journal.css";
import P5sketch from "./p5Js/Sketch";
import Scene from "./components/Scene";
import { delay, motion, useScroll } from "framer-motion";
import About from "./components/About";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Monitor from "./components/Monitor";
import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect, Suspense } from "react";
import LocomotiveScroll from "locomotive-scroll";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Journal = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const locomotiveScroll = new LocomotiveScroll();

    const timeline = gsap.timeline({
      // scrollTrigger:{
      //     trigger: document.documentElement,
      //     start:'top',
      //     end: 'bottom',
      //     scrub:true,
      //     toggleActions: 'reverse'
      // }
    });

    timeline.from(".hiddenText", {
      y: "100%",
      ease: "Power4.easeOut",
      stagger: 0.3,
      delay: 0.5,
      duration: 1.5,
    });
  });

  const container = useRef();
  const textRef = useRef(null);

  // useLayoutEffect(() => {

  //    let height = container.current.getBoundingClientRect().height

  //     document.body.style.height = height + "px";

  //     console.log(height, document.documentElement.clientHeight)

  //     gsap.to(container.current, {
  //         y: () => -(height - document.documentElement.clientHeight),
  //         // ease: 'sine.out',
  //         // duration:2,
  //         scrollTrigger: {
  //           trigger: document.body,
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: 1,
  //         //   scroll:container.current
  //         //   toggleActions:'reverse'
  //         }
  //       });

  // },[])

  // let width = p5Cointainer.clientWidth
  // let height = p5Cointainer.clientHeight

  return (
    <>
      {/* <Loading/> */}

      <div
        data-scroll
        // data-scroll-speed='0.5'
        ref={container}
        className=" w-[100vw] h-[100%] text-text flex flex-col bg-background transition-all ease-in-out overflow-hidden"
      >
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="h-[100vh] w-[100vw] invinsible sm:visible sm:h-[100vh] relative cursor-none"
        >
          {/* <Suspense fallback={<Loading/>}> */}

          <Scene />

          {/* </Suspense> */}

          <div className="list-none h-[100%] w-[100vw]  z-1 overflow-hidden absolute  text-background  ">
            <div className="absolute left-[50%] bottom-[5%]  animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" size-10"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#E24E1B"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </div>
            <nav className="w-[100%]">
              <ul className="flex p-2 font-gord justify-center z-10 text-[0.7rem] ">
                <li className="p-2 font-inter hover:border-b-primary hover:border-b-2 absolute sm:visible">
                  UNDER CONSTRUCTION
                </li>

                {/* <li className="p-1 hover:cursor-pointer hover:border-b-primary hover:border-b-4">
                            projects
                        </li> */}
              </ul>
            </nav>
            {/* <ul className=""> */}
            <div>
              <div className="w-[100%] text-background h-[60vh] sm:h-[100%] flex justify-left flex-col gap-10 font-modern pl-10 sm:pb-20 pt-10 sm:pt-0 z-[1000] sm:text-[10rem] text-[5.062rem]">
                <h1 className="relative h-[300px] sm:h-[200px] m-0 overflow-hidden ">
                  {/* <span className="text-[2rem] ">welcome to </span>  */}
                  <span className="hiddenText absolute z-2 "> RAY </span>
                </h1>

                <h1 className=" relative h-[300px] sm:h-[200px] m-0 overflow-hidden ">
                  {/* <span className="text-[2rem] ">welcome to </span>  */}
                  <span className="hiddenText absolute z-2 ">THE</span>
                </h1>

                <h1 className="relative h-[300px] sm:h-[200px] m-0 overflow-hidden">
                  {/* <span className="text-[2rem] ">welcome to </span>  */}
                  <span className=" hiddenText absolute z-2 "> BOFFIN </span>
                </h1>

                <p className="relative h-[1.5rem] m-0 overflow-hidden text-[0.8rem] font-inter md:w-[100vw] w-[70vw] pt-10 sm:pt-0 sm:w-[100%]">
                  <span className=" hiddenText absolute z-2 flex sm:w-[90vw] justify-between">
                    <span>WELCOME</span> <span>TO MY</span>{" "}
                    <span>PLAYGROUND</span>
                  </span>
                </p> 

                {/* <img src="/icons/logo.png" alt="bg" className="w-[10%] h-[10%] absolute top-2 right-5 object-cover" />  */}
              </div>

              {/* <div className="border-t-2">
                    </div> */}
              {/* </ul> */}
            </div>
          </div>
        </div>

        <main className="w-[100%] h-[100%] flex flex-col border-primary border-t-2">
          <h2 className="p-5 pl-10 text-[2rem] sm:text-[10.5rem] border-b-2 border-primary font-gord">
            About
          </h2>

          <div className="p-5 flex flex-col md:flex-row h-[50%] sm:h-[100%] w-[100vw] ">
            <About />

            <motion.div
              initial={{ x: 500 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  duration: 2,
                },
              }}
              // exit={{x: 500}}

              className="md:h-[50vh] md:w-[50%] invisible md:visible hover:cursor-pointer"
            >
              {/* 
                <Canvas>
                    <Monitor/>
                </Canvas> */}
            </motion.div>
          </div>

          <h2 className="p-5 pl-10 mb-1 text-[2rem] sm:text-[10.5rem] border-b-2 border-primary font-gord">
            Projects
          </h2>
{/* 
          <div
            data-scroll
            data-scroll-speed="0.1"
            className="p-5 column-4 h-[100%] flex w-[100%] border-black "
          >
            <JournalEntry />

         
          </div> */}

          <div
            id="footer"
            className="w-[100%] h-[20vh] border-t-primary border-t-2 p-5 flex flex-col justify-end"
          >
            <div className="flex pb-5 pt-5">
              {/* <a target="_blank" href="https://icons8.com/icon/447/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}

              <a
                target="_blank"
                href="https://www.linkedin.com/in/joseph-chikak-4b232221b/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary  w-[80%]"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
                </svg>
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/rayscuriousmind"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary  w-[80%]"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                </svg>
              </a>
            </div>

            <div className="pb-2">
              <p className="text-[0.9rem]">josephchikak@gmail.com</p>
            </div>

            <div className="flex justify-between">
              <p>© all rights reserved 2025 </p>

              <p className="text-[0.9rem]">designed by Joseph Chikak</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Journal;
