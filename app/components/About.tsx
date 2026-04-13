"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-8 text-center">
      <div 
        className="space-y-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease-out"
        }}
      >
        <h1 
          className="text-5xl md:text-6xl font-bold mb-8"
          style={{
            background: "linear-gradient(135deg, #00ff96, #00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          About Me
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-300">
          <p className="leading-relaxed">
            I'm a passionate frontend developer with expertise in creating 
            immersive web experiences that blend cutting-edge technology 
            with stunning visual design.
          </p>
          
          <p className="leading-relaxed">
            Specializing in React, Next.js, and Three.js, I transform ideas 
            into interactive digital experiences that captivate and engage users.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            "React", "Next.js", "Three.js", "TypeScript",
            "Tailwind CSS", "GSAP", "WebGL", "Node.js"
          ].map((skill, index) => (
            <div
              key={skill}
              className="p-4 border border-green-500/30 rounded-lg bg-green-500/5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.9)",
                transition: `all 0.6s ease-out ${index * 0.1}s`
              }}
            >
              <span className="text-green-400 font-mono text-sm">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}