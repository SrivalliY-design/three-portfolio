// "use client";

// import { useRef, useEffect } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// interface ModelProps {
//   scrollProgress?: number;
// }

// export default function Model({ scrollProgress = 0 }: ModelProps) {
//   const groupRef = useRef<THREE.Group>(null);
//   const { scene } = useGLTF("/garden_gnome_4k.gltf/garden_gnome_4k.gltf");

//   useEffect(() => {
//     if (!scene) return;

//     // 1. Compute bounding box
//     const box = new THREE.Box3().setFromObject(scene);
//     const center = box.getCenter(new THREE.Vector3());
//     const size = box.getSize(new THREE.Vector3());

//     // 2. Move the scene so its CENTER (x/z) and VERTICAL CENTER (y) is at origin
//     scene.position.set(
//       -center.x,
//       -center.y,   // true center vertically → model sits centered in view
//       -center.z
//     );

//     console.log("Model bounding size:", size.toArray());
//   }, [scene]);

//   // Scroll-based animation
//   useFrame(() => {
//     if (!groupRef.current) return;

//     // Rotation based on scroll (0 to 2 full rotations)
//     const rotationY = scrollProgress * Math.PI * 2;
//     const rotationX = scrollProgress * Math.PI * 0.5; // Less rotation on X axis

//     // Position animation - move to center and scale up as scroll progresses
//     const targetScale = 6 + scrollProgress * 4; // Scale from 6 to 10
//     const targetX = scrollProgress * -2; // Move slightly to center
//     const targetZ = scrollProgress * -2; // Move closer to camera

//     // Apply smooth animations
//     groupRef.current.rotation.y = rotationY;
//     groupRef.current.rotation.x = rotationX;
//     groupRef.current.scale.setScalar(targetScale);
//     groupRef.current.position.set(targetX, 0, targetZ);
//   });

//   return (
//     <group ref={groupRef} scale={6}>
//       <primitive object={scene} />
//     </group>
//   );
// }
