"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoaderModel from "../three/LoaderModel";

export default function Loader({ onFinish }: { onFinish: () => void }) {           //onFinish() → called when loading completes
  const [progress, setProgress] = useState(0);              //Text → Loading... 45%

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);      //Every 25ms, progress increases by 1

      if (value >= 100) {
        clearInterval(interval);             //Stops the loop when loading completes

        // small delay for settle animation 
        setTimeout(() => {
          onFinish();           //Delay before finishing
        }, 800);
      }
    }, 25); // speed of loading

    return () => clearInterval(interval);               //Prevents memory leaks
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      
      {/* 🎥 Creates a Three.js scene */}
      <div className="w-full h-[65vh]">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>     //Camera:Positioned at [0, 0, 6], looking at center
          <ambientLight intensity={1.5} />               //Without this → model = invisible
          <directionalLight position={[5, 5, 5]} />
          <LoaderModel progress={progress} />         //Your 3D model reacts to loading progress
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