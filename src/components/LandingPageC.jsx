import {useThree, useFrame } from "@react-three/fiber";
import {
  OrthographicCamera,
  Image,
useTexture
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const LandingPage = () => {
  const stickers = useRef([]);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const [currentStickerUrl, setCurrentStickerUrl] = useState("/stickers/Asset 1.webp");
  const lastStickerChange = useRef(0);
  const stickerChangeDelay = 200; // 200ms delay between sticker changes


  const stickerUrls = Array.from(
    { length: 9 },
    (_, i) => `/stickers/Asset ${i + 1}.webp`
  );

  const viewport = useThree((state) => state.viewport);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX - viewport.width / 2;
      mouse.current.y = viewport.height / 2 - e.clientY;
      
      const currentTime = Date.now();
      
      // Only change sticker if enough time has passed since last change
      if (currentTime - lastStickerChange.current > stickerChangeDelay) {
        const n = Math.floor(Math.random() * stickerUrls.length);
        const selectedUrl = stickerUrls[n];
        setCurrentStickerUrl(selectedUrl);
        lastStickerChange.current = currentTime;
      }
      
      // Position sticker at mouse location
      if (stickers.current) {
        stickers.current.visible = true;
     
  
        stickers.current.material.opacity = 1;
        stickers.current.position.x = mouse.current.x;
        stickers.current.position.y = mouse.current.y;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewport, stickerUrls, stickerChangeDelay]);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useFrame(({ gl }) => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;

    // Fade out sticker over time
    if (stickers.current && stickers.current.material) {
      stickers.current.material.opacity *= 0.980;
    }
  });

  return (
    <>
      <OrthographicCamera
        near={0}
        far={1000}
        makeDefault
        position={[0, 0, 1]}
        left={sizes.width / -2}
        right={sizes.width / 2}
        top={sizes.height / 2}
        bottom={sizes.height / -2}
      />
      <ambientLight />
    

      <Image
        ref={stickers}
        url={currentStickerUrl}

        
        scale={100}
       
        // zIndex={10}
  
        transparent
        visible={false}
      />
    </>
  );
};

export default LandingPage;
