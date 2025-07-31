import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  useAnimations,
  useGLTF,
  Text,
  Float,
  useTexture,
  OrthographicCamera,
  useAspect,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import * as THREE from "three";

const LandingPage = () => {
  const stickers = useRef([]);

  const [sticker, setSticker] = useState(
    useTexture("/stickers/Asset " + 1 + ".webp")
  );
  // const [sticker, setSticker] = useState('')

  // const stickersUrl = ['/stickers/Asset 1.png','/stickers/Asset 2.png','/stickers/Asset 3.png','/stickers/Asset 4.png','/stickers/Asset 5.png','/stickers/Asset 6.png','/stickers/Asset 7.png','/stickers/Asset 8.png','/stickers/Asset 9.png','/stickers/Asset 10.png']
  const stickerUrls = Array.from(
    { length: 6 },
    (_, i) => `/stickers/Asset ${i + 1}.webp`
  );
  const stickersTexture = useTexture(stickerUrls);
  stickersTexture.forEach((texture) => {
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
  });

  useEffect(() => {}, []);

  // console.log(stickers)

  const size = useAspect(1800, 1000);

  const viewport = useThree((state) => state.viewport);

  // console.log(size)

  // const

  const mouse = new THREE.Vector2(0, 0);
  const prevMouse = new THREE.Vector2(0, 0);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX - viewport.width / 2;
    mouse.y = viewport.height / 2 - e.clientY;
  });

  let currentSticker = 0;

  const setNewSticker = (x, y) => {
    const n = Math.floor(Math.random() * stickersTexture.length) + 1;

    setSticker(stickersTexture[n]);

    let mesh = stickers.current;

    // console.log(mesh)

    mesh.visible = true;

    mesh.position.x = x;
    mesh.position.y = y;

    mesh.material.opacity = 1;
  };

  // console.log(stickers.current[0])

  const trackMousePos = () => {
    // setNewSticker()
    if (
      Math.abs(mouse.x - prevMouse.x) < 4 ||
      Math.abs(mouse.y - prevMouse.y) < 4
    ) {
      //do nothing
    } else {
      setNewSticker(mouse.x, mouse.y, currentSticker);

      currentSticker = (currentSticker + 1) % 100;

      // console.log(currentSticker)
    }

    prevMouse.x = mouse.x;
    prevMouse.y = mouse.y;
  };

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useFrame(({ gl }) => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // gl.setClearColor('#070600')

    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    // gl.toneMapping = THREE.LinearToneMapping
    // gl.toneMappingExposure =  0.9

    // stickers.current.position.y = mouse.y
    // stickers.current.position.x = mouse.x

    trackMousePos();

    stickers.current.material.opacity *= 0.999;

    // stickers.current.material.map.minFilter = THREE.LinearFilter;

    // stickers.current.forEach(sticker => {
    // })

    // console.log(stickers.current)
  });

  return (
    <>
      <OrthographicCamera
        near={-1000}
        far={1000}
        makeDefault
        position={[0, 0, 2]}
        left={sizes.width / -2}
        right={sizes.width / 2}
        top={sizes.height / 2}
        bottom={sizes.height / -2}
      />
      {/* <OrbitControls/> */}
      {/* <mesh scale={size} >
            <planeGeometry args={[1,1, 1,1]}/>
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                // wireframe
                // fragmentShader={fragmentShader}
                // vertexShader={vertexShader}
            />
        </mesh> */}

      {/* <Text font="/Satoshi-Medium.woff"  color='black' fontSize={20} position={[0,400,0]} anchorX="center" anchorY="middle" >
            ray's curious mind
        </Text> */}

      {/* {stickersTexture.map((texture, index) => {
            return(
             
            )
           
        })} */}
      <ambientLight intensity={0.5} />
      <mesh scale={200} ref={stickers} visible={false}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial map={sticker} transparent={true} />
      </mesh>
    </>
  );
};

export default LandingPage;
