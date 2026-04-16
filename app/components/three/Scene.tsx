"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Bounds, Center, Environment, Stars } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, refreshScrollTrigger } from "../../utils/GsapScroll";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function MindNet({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = scrollProgress * 0.5;
      meshRef.current.rotation.y = scrollProgress * 0.3;
    }
  }, [scrollProgress]);

  return (
    <group position={[0, 0, 0]}>
      {/* Central Node */}
      <mesh position={[0, 0, 0]} ref={meshRef}>
        <sphereGeometry args={[0.3, 32, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Connection Lines */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;
        return (
          <mesh key={i} position={[x, 0, z]}>
            <cylinderGeometry args={[0.02, 3]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
          </mesh>
        );
      })}
      
      {/* Outer Ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.1, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function Model({ scrollProgress }: { scrollProgress: number }) {
  const { scene } = useGLTF(
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
  );
  const { camera } = useThree();
  const ref = useRef<THREE.Group>(null);

  console.log('Model component rendering, scene loaded:', !!scene);

  // Simple positioning without GSAP initially
  useEffect(() => {
    console.log('Model useEffect triggered, ref.current:', ref.current);
    if (ref.current) {
      ref.current.position.set(0, 0, 0);
      ref.current.rotation.set(0, 0, 0);
      ref.current.scale.set(8, 8, 8);
    }
  }, []);

  return (
    <group ref={ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <Canvas
      className="character-model w-full h-full"
      camera={{ fov: 45, position: [0, 0, 3] }}
      dpr={[1, 2]}
      shadows
    >
      {/* Lighting */}
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

      {/* Environment */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="city" />

      {/* Mind Net Visualization */}
      <Suspense fallback={null}>
        <MindNet scrollProgress={scrollProgress} />
      </Suspense>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

export default Scene;
