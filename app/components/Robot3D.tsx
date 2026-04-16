"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Bounds, Center, Environment } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

function Model({ scrollProgress }: { scrollProgress: number }) {
  const { scene } = useGLTF(
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
  );

  const ref = useRef<THREE.Group>(null);

  // Keep model facing front - no rotation
  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = 0; // Face front
    }
  }, []);

  return (
    <group ref={ref} scale={8}>
      <primitive object={scene} />
    </group>
  );
}

function Shadow() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  useFrame(() => {
    if (!materialRef.current) return;
    
    // Subtle pulsing animation for the shadow
    const time = Date.now() * 0.001;
    materialRef.current.opacity = 0.3 + Math.sin(time * 2) * 0.05;
  });

  return (
    <mesh 
      ref={meshRef} 
      position={[0, -2.8, 0]} 
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <circleGeometry args={[2.5, 32]} />
      <meshBasicMaterial 
        ref={materialRef}
        color="#000000" 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
}

export default function Robot3D({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ fov: 45, position: [0, 0, 3] }}
      dpr={[1, 2]}
      shadows
    >
      <ambientLight intensity={0.8} />
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={1.2} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#60a5fa" />
      <pointLight position={[0, 6, 4]} intensity={0.6} color="#00ff96" />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.3}>
          <Center>
            <Model scrollProgress={scrollProgress} />
          </Center>
          <Shadow />
        </Bounds>
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

useGLTF.preload(
  "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
);