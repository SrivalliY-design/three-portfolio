"use client";

import { useState, useEffect } from "react";
import Robot3D from "./Robot3D";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modelPosition, setModelPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / windowHeight, 1);
      
      console.log('Scroll event triggered:', { scrollY, windowHeight, progress });
      setScrollProgress(progress);
      
      // Stage 1: Model moves to left bottom corner (first 50% of scroll)
      if (progress <= 0.5) {
        const modelProgress = progress * 2; // 0 to 1 in first half
        const leftMovement = -600 * modelProgress; // Move further left
        const downMovement = 400 * modelProgress; // Move further down
        setModelPosition({ x: leftMovement, y: downMovement });
      } else {
        // Stage 2: Model stays in corner, about content appears (second 50% of scroll)
        setModelPosition({ x: -600, y: 400 });
      }
    };

    // Initial check
    console.log('Initial scroll setup:', { scrollY: window.scrollY, windowHeight: window.innerHeight });
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black overflow-hidden" style={{ paddingTop: '64px', minHeight: '150vh' }}>
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-between px-16">
          
          {/* LEFT SIDE - Welcome Message (visible initially, fades after model moves) */}
          <div 
            className="text-white w-1/3 transition-opacity duration-1000"
            style={{ opacity: scrollProgress > 0.5 ? 0 : 1 }}
          >
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              <span className="text-cyan-400">Welcome</span><br/>to My Universe
            </h1>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              I'm a creative developer passionate about building immersive digital experiences.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors text-lg">
                Explore My Work
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors text-lg">
                Get In Touch
              </button>
            </div>
          </div>

          {/* CENTER - 3D Model */}
          <div 
            className="relative w-1/3 h-[600px] transition-transform duration-1000 flex items-center justify-center"
            style={{ transform: `translate(${modelPosition.x}px, ${modelPosition.y}px)` }}
          >
            <div className="w-full h-full">
              <Robot3D scrollProgress={scrollProgress} />
            </div>
          </div>

          {/* RIGHT SIDE - About Content (comes from right after model settles) */}
          <div 
            className="text-white w-1/3 transition-all duration-1000"
            style={{ 
              opacity: scrollProgress > 0.5 ? 1 : 0,
              transform: scrollProgress > 0.5 
                ? `translate(0px, 400px)` 
                : `translate(500px, 400px)`,
              visibility: scrollProgress > 0.5 ? 'visible' : 'hidden'
            }}
          >
            <h2 className="text-7xl font-bold mb-8 leading-tight">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              I specialize in creating cutting-edge web applications with modern technologies.
              My expertise includes React, Three.js, and creating stunning 3D experiences.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-xl text-gray-300">Frontend Development</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-xl text-gray-300">3D Web Experiences</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-xl text-gray-300">Creative Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      </div>
  );
}
