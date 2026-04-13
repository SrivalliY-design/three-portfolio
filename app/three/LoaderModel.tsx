"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function LoaderModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/garden_gnome_4k.gltf/garden_gnome_4k.gltf");

  // ✅ Center model
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

 useFrame(() => {
  if (!groupRef.current) return;

  const p = progress / 100;

  // 🎯 Final rotation value (constant)
  const finalRotation = Math.PI * 4;

  // 🔄 Always move towards final (never reset to 0)
  const targetRotation = p * finalRotation;

  groupRef.current.rotation.y +=
    (targetRotation - groupRef.current.rotation.y) * 0.08;
});

  return (
    <group ref={groupRef} scale={2.2}>
      <primitive object={scene} />
    </group>
  );
}