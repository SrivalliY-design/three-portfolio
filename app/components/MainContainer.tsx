"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Hero from "./Hero";
import Scene from "./three/Scene";

interface MainContainerProps {
  children?: PropsWithChildren["children"];
}

const MainContainer = ({ children }: MainContainerProps) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth > 1024 : true
  );

  useEffect(() => {
    const resizeHandler = () => {
      if (typeof window !== 'undefined') {
        setIsDesktopView(window.innerWidth > 1024);
      }
    };
    
    if (typeof window !== 'undefined') {
      resizeHandler();
      window.addEventListener("resize", resizeHandler);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", resizeHandler);
      }
    };
  }, [isDesktopView]);

  return (
    <div className="container-main bg-black min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Global 3D Scene */}
      {isDesktopView && (
        <div className="fixed inset-0 pointer-events-none z-10 bg-blue-500/10">
          <div className="absolute top-4 left-4 text-white text-xs bg-black/50 p-1 rounded">
            3D Scene Active
          </div>
          <Scene scrollProgress={0} />
        </div>
      )}
      
      {/* Global Elements */}
      {children}
      
      {/* Main Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <Hero />
      </div>
    </div>
  );
};

export default MainContainer;
