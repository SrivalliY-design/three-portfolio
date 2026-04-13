"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Lock camera position (no zoom / no scroll zoom)
    camera.position.set(0, 0, 5);
  }, [camera]);

  return null;
}