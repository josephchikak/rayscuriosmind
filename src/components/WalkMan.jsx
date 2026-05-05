import { useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import walkMan from '../assets/Sony TPS-L2 Walkman.glb'
import texture from '../assets/baked.jpg'
import * as THREE from 'three'

export default function Model(props) {
  const group = useRef()
  const { nodes, animations } = useGLTF(walkMan)
  const { actions } = useAnimations(animations, group)

  const bakedTexture = useTexture(texture)
  bakedTexture.flipY = false
  bakedTexture.colorSpace = THREE.SRGBColorSpace

  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.006
  })

  return (
    <>
      <group ref={group} {...props} scale={0.4} position={[0, -1, 1]} rotation={[0, Math.PI / 3, 0]} dispose={null}>
        <group name="Scene">
          <mesh name="cover001" castShadow receiveShadow geometry={nodes.cover001.geometry}>
            <mesh
              name="Cube003"
              castShadow
              receiveShadow
              geometry={nodes.Cube003.geometry}
              material={nodes.Cube003.material}
              rotation={[0, -0.004, 0]}
            >
              <mesh
                name="Cylinder004"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                material={nodes.Cylinder004.material}
                position={[-0.395, 3.653, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.191}
              />
              <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
              <group name="Speaker001" />
              <mesh
                name="tape001"
                castShadow
                receiveShadow
                geometry={nodes.tape001.geometry}
                material={nodes.tape001.material}
                position={[-0.195, 2.618, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.602, 0.624, 0.763]}
              />
              <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
            </mesh>
            <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>
    </>
  )
}
