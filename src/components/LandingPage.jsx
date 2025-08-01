import {useThree, useFrame } from "@react-three/fiber";
import {
  OrthographicCamera,
  useAspect,
  Image,
} from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";

const LandingPage = () => {
  const stickers = useRef([]);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const prevMouse = useRef(new THREE.Vector2(0, 0));
  const [currentStickerUrl, setCurrentStickerUrl] = useState("/stickers/Asset 1.webp");
  
  // Transition state
  const [positions, setPositions] = useState({
    target: { x: 0, y: 0 },
    current: { x: 0, y: 0 }
  });

  const stickerUrls = Array.from(
    { length: 9 },
    (_, i) => `/stickers/Asset ${i + 1}.webp`
  );

  // Memoized lerp factor for performance
  const lerpFactor = useMemo(() => 0.04, []);

  // console.log(stickers)

  const size = useAspect(1800, 1000);

  const viewport = useThree((state) => state.viewport);

  // console.log(size)

  // const

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX - viewport.width / 2;
      mouse.current.y = viewport.height / 2 - e.clientY;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewport]);



  let currentSticker = 0;

  const setNewSticker = (x, y) => {
    if (stickers.current && stickers.current.userData && stickers.current.userData.canPlace === false) {
      return; // Don't place sticker if delay is active
    }
    
    const n = Math.floor(Math.random() * stickerUrls.length);
    const selectedUrl = stickerUrls[n];
    
    setCurrentStickerUrl(selectedUrl);
    setPositions(prev => ({
      ...prev,
      target: { x, y }
    }));

    let image = stickers.current;
    image.visible = true;
    image.material.opacity = 1;
    
    // Set delay flag on the ref
    if (image.userData) {
      image.userData.canPlace = false;
    }
    
    // Set delay before allowing next sticker
    setTimeout(() => {
      if (stickers.current && stickers.current.userData) {
        stickers.current.userData.canPlace = true;
      }
    }, 800); // 500ms delay - adjust this value as needed
  };

  // console.log(stickers.current[0])

  const trackMousePos = () => {
    // Always update target position for smooth following
    setPositions(prev => ({
      ...prev,
      target: { x: mouse.current.x, y: mouse.current.y }
    }));
    
    // Only change sticker image if enough movement and delay allows
    if (
      Math.abs(mouse.current.x - prevMouse.current.x) < 4 ||
      Math.abs(mouse.current.y - prevMouse.current.y) < 4
    ) {
      //do nothing
    } else {
      setNewSticker(mouse.current.x, mouse.current.y);

      currentSticker = (currentSticker + 1) % 100;

      // console.log(currentSticker)
    }

    prevMouse.current.x = mouse.current.x;
    prevMouse.current.y = mouse.current.y;
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

    trackMousePos();

    // Handle smooth position transitions
    if (stickers.current && stickers.current.visible) {
      const newX = positions.current.x + (positions.target.x - positions.current.x) * lerpFactor;
      const newY = positions.current.y + (positions.target.y - positions.current.y) * lerpFactor;
      
      // Update position directly without state to avoid re-renders
      positions.current.x = newX;
      positions.current.y = newY;
      stickers.current.position.x = newX;
      stickers.current.position.y = newY;
    }

    if (stickers.current && stickers.current.material) {
      stickers.current.material.opacity *= 0.997;
    }
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
      {/* <mesh scale={200} >
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
      <Image
        ref={stickers}
        url={currentStickerUrl}
        scale={200}
        radius={10}
        fit="contain"
        transparent
        visible={false}
      />
    </>
  );
};

export default LandingPage;
