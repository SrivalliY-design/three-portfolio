"use client";

import { useEffect, useState } from "react";
import Model from "../three/Model";
import CameraController from "./CameraController";

export default function Experience() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* Camera Control */}
      <CameraController />
<>
  <ambientLight intensity={1.2} />
  <directionalLight position={[5, 5, 5]} intensity={2} />

  <Model />
</>
    
    </>
  );
}