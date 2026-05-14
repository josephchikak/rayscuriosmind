import { useThree, useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo, Suspense } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import FaceHead from "./FaceHead";

const STICKER_URLS = Array.from({ length: 9 }, (_, i) => `/stickers/Asset ${i + 1}.webp`);
const STICKER_DELAY = 200;

const LandingPage = () => {
  const stickerRef = useRef(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const lastStickerChange = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const textures = useTexture(STICKER_URLS);

  useEffect(() => {
    textures.forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearMipMapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.anisotropy = 4;
      tex.needsUpdate = true;
    });
  }, [textures]);

  const currentTexture = textures[currentIndex];
  const baseSize = 100;
  const aspect = useMemo(() => {
    const img = currentTexture?.image;
    return img ? img.width / img.height : 1;
  }, [currentTexture]);

  const viewport = useThree((state) => state.viewport);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX - viewport.width / 2;
      mouse.current.y = viewport.height / 2 - e.clientY;

      const now = Date.now();
      if (now - lastStickerChange.current > STICKER_DELAY) {
        setCurrentIndex(Math.floor(Math.random() * STICKER_URLS.length));
        lastStickerChange.current = now;
      }

      if (stickerRef.current) {
        stickerRef.current.visible = true;
        stickerRef.current.material.opacity = 1;
        stickerRef.current.position.x = mouse.current.x;
        stickerRef.current.position.y = mouse.current.y;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewport]);

  useFrame(() => {
    if (stickerRef.current?.material) {
      stickerRef.current.material.opacity *= 0.98;
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
      {/* <Suspense fallback={null}>
        <FaceHead />
      </Suspense> */}
      <mesh
        ref={stickerRef}
        visible={false}
        scale={[baseSize * aspect, baseSize, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={currentTexture} transparent depthWrite={false} />
      </mesh>
    </>
  );
};

export default LandingPage;
