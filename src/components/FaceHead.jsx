import { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MAX_ROTATION = Math.PI / 3; // ±60°
const ROTATION_SPEED = 0.35;

export default function FaceHead({ z = -10 }) {
  const groupRef = useRef(null);
  const { scene } = useGLTF("/models/face.glb");
  const viewport = useThree((s) => s.viewport);

  // clone scene, flip to face camera, give it a clean PBR material, recenter
  const { object, sizeXY } = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.rotation.y = Math.PI;

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d6c2a8"),
      roughness: 0.55,
      metalness: 0.05,
    });

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
        child.castShadow = false;
        child.receiveShadow = false;
        child.frustumCulled = false;
      }
    });

    cloned.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    cloned.position.sub(center);

    return { object: cloned, sizeXY: Math.max(size.x, size.y, 0.001) };
  }, [scene]);

  const fitScale = useMemo(() => {
    const target = Math.min(viewport.width, viewport.height) * 0.75;
    return target / sizeXY;
  }, [sizeXY, viewport.width, viewport.height]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * ROTATION_SPEED) * MAX_ROTATION;
    }
  });

  // light positions are relative to the head group, so they rotate with it.
  // strong warm key from the upper-right, subtle cool fill, hot rim from behind.
  return (
    <group position={[0, 0, z]}>
      <ambientLight intensity={0.06} color="#221608" />
      <directionalLight
        position={[6, 8, 6]}
        intensity={3.2}
        color="#ffb070"
      />
      <directionalLight
        position={[-6, 2, 4]}
        intensity={0.4}
        color="#5a6b80"
      />
      <directionalLight
        position={[-3, 4, -6]}
        intensity={2.0}
        color="#ff7a1f"
      />
      <group ref={groupRef} scale={fitScale}>
        <primitive object={object} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/face.glb");
