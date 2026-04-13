"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoaderModel from "../three/LoaderModel";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        // small delay for settle animation
        setTimeout(() => {
          onFinish();
        }, 800);
      }
    }, 25); // speed of loading

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      
      {/* 🎥 3D MODEL */}
      <div className="w-full h-[65vh]">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} />
          <LoaderModel progress={progress} />
        </Canvas>
      </div>

      {/* 📝 TEXT */}
      <p className="text-white mt-6 text-lg tracking-wide">
        Loading Your Experience... {progress}%
      </p>

      {/* 📊 PROGRESS BAR */}
      <div className="w-56 h-1 bg-gray-700 mt-4 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}