import { useThree, useFrame } from "@react-three/fiber";
import { OrthographicCamera, Image, useTexture } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const STICKER_URLS = Array.from({ length: 9 }, (_, i) => `/stickers/Asset ${i + 1}.webp`);
const STICKER_DELAY = 200;

const LandingPage = () => {
  const stickers = useRef(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const [currentStickerUrl, setCurrentStickerUrl] = useState(STICKER_URLS[0]);
  const lastStickerChange = useRef(0);

  const { gl } = useThree();
  const viewport = useThree((state) => state.viewport);

  const stickerTexture = useTexture(currentStickerUrl);
  const baseSize = 100;
  const aspect = stickerTexture.image
    ? stickerTexture.image.width / stickerTexture.image.height
    : 1;

  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX - viewport.width / 2;
      mouse.current.y = viewport.height / 2 - e.clientY;

      const now = Date.now();
      if (now - lastStickerChange.current > STICKER_DELAY) {
        setCurrentStickerUrl(STICKER_URLS[Math.floor(Math.random() * STICKER_URLS.length)]);
        lastStickerChange.current = now;
      }

      if (stickers.current) {
        stickers.current.visible = true;
        stickers.current.material.opacity = 1;
        stickers.current.position.x = mouse.current.x;
        stickers.current.position.y = mouse.current.y;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewport]);

  useFrame(() => {
    if (stickers.current?.material) {
      stickers.current.material.opacity *= 0.98;
    }
  });

  return (
    <>
      <OrthographicCamera
        near={0}
        far={1000}
        makeDefault
        position={[0, 0, 1]}
        left={viewport.width / -2}
        right={viewport.width / 2}
        top={viewport.height / 2}
        bottom={viewport.height / -2}
      />
      <ambientLight />
      <Image
        ref={stickers}
        url={currentStickerUrl}
        scale={[baseSize * aspect, baseSize]}
        transparent
        visible={false}
      />
    </>
  );
};

export default LandingPage;
