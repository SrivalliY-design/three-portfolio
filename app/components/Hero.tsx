// "use client";

// import { useEffect, useState, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { gsap } from "gsap";
// import Model from "../three/Model";

// export default function Hero() {
//   const [show, setShow] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     // Enable scrolling after initial animation
//     const enableScrolling = () => {
//       document.documentElement.style.overflow = "";
//       document.body.style.overflow = "";
//       document.body.style.margin = "0";
//       document.body.style.padding = "0";
//     };

//     const t = setTimeout(() => {
//       setShow(true);
//       enableScrolling();
//     }, 150);
    
//     return () => clearTimeout(t);
//   }, []);

//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const maxScroll = windowHeight;
      
//       // Calculate scroll progress (0 to 1)
//       const progress = Math.min(scrollY / maxScroll, 1);
//       setScrollProgress(progress);

//       // Start transition when scroll reaches 80%
//       if (progress >= 0.8 && !isTransitioning) {
//         setIsTransitioning(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isTransitioning]);

//   return (
//     <section
//       style={{
//         background: "#000",
//         position: "fixed",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         margin: 0,
//         padding: 0,
//         transform: `translateY(${scrollProgress * -100}%)`,
//         opacity: isTransitioning ? 0 : 1,
//         transition: isTransitioning ? "opacity 1s ease, transform 1s ease" : "none",
//       }}
//     >
//       {/* Green grid bg */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage:
//             "linear-gradient(rgba(0,255,150,0.04) 1px, transparent 1px)," +
//             "linear-gradient(90deg,rgba(0,255,150,0.04) 1px,transparent 1px)",
//           backgroundSize: "60px 60px",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       />

//       {/* ── LEFT: text ─────────────────────────────── */}
//       <div
//         style={{
//           width: "50%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "0 6vw",
//           boxSizing: "border-box",
//           zIndex: 10,
//           transition: "opacity 1s ease 0.1s, transform 1s ease 0.1s",
//           opacity: show ? 1 : 0,
//           transform: show ? "translateX(0)" : "translateX(-48px)",
//         }}
//       >
//         <p
//           style={{
//             color: "#00ff96",
//             fontFamily: "'Courier New', monospace",
//             fontSize: "0.78rem",
//             letterSpacing: "0.22em",
//             textTransform: "uppercase",
//             marginBottom: "1.1rem",
//             opacity: show ? 1 : 0,
//             transition: "opacity 1s ease 0.35s",
//           }}
//         >
//           {"<welcome to my portfolio />"}
//         </p>

//         <h1
//           style={{
//             fontFamily: "'Georgia', serif",
//             fontSize: "clamp(2.6rem, 4.8vw, 4.5rem)",
//             fontWeight: 700,
//             color: "#fff",
//             lineHeight: 1.1,
//             margin: "0 0 0.5rem",
//           }}
//         >
//           Hi, I&apos;m{" "}
//           <span
//             style={{
//               color: "#00ff96",
//               display: "inline-block",
//               opacity: show ? 1 : 0,
//               transform: show ? "translateY(0)" : "translateY(20px)",
//               transition: "opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s",
//             }}
//           >
//             Srivalli Y
//           </span>
//         </h1>

//         <h2
//           style={{
//             fontFamily: "'Courier New', monospace",
//             fontSize: "clamp(0.9rem, 1.7vw, 1.25rem)",
//             color: "#9ca3af",
//             marginBottom: "1.5rem",
//             opacity: show ? 1 : 0,
//             transition: "opacity 1s ease 0.75s",
//           }}
//         >
//           Frontend Developer{" "}
//           <span style={{ color: "#00ff96" }}>_</span>
//         </h2>

//         <p
//           style={{
//             fontFamily: "'Georgia', serif",
//             fontSize: "0.98rem",
//             color: "#6b7280",
//             lineHeight: 1.8,
//             maxWidth: "440px",
//             marginBottom: "1.8rem",
//             opacity: show ? 1 : 0,
//             transition: "opacity 1s ease 0.95s",
//           }}
//         >
//           I craft scalable, interactive web experiences using{" "}
//           <span style={{ color: "#d1fae5" }}>React</span>,{" "}
//           <span style={{ color: "#d1fae5" }}>Next.js</span>, and{" "}
//           <span style={{ color: "#d1fae5" }}>Three.js</span> — bridging
//           pixel-perfect UI with performant, production-grade architecture.
//         </p>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "0.45rem",
//             marginBottom: "1.8rem",
//             opacity: show ? 1 : 0,
//             transition: "opacity 1s ease 1.15s",
//           }}
//         >
//           {["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "REST APIs"].map(
//             (tag) => (
//               <span
//                 key={tag}
//                 style={{
//                   fontFamily: "'Courier New', monospace",
//                   fontSize: "0.68rem",
//                   color: "#00ff96",
//                   border: "1px solid rgba(0,255,150,0.3)",
//                   borderRadius: "4px",
//                   padding: "3px 9px",
//                   background: "rgba(0,255,150,0.05)",
//                   letterSpacing: "0.07em",
//                 }}
//               >
//                 {tag}
//               </span>
//             )
//           )}
//         </div>

//         <div
//           style={{
//             display: "flex",
//             gap: "1rem",
//             opacity: show ? 1 : 0,
//             transition: "opacity 1s ease 1.35s",
//           }}
//         >
//           <button
//             onClick={scrollToAbout}
//             style={{
//               background: "#00ff96",
//               color: "#000",
//               border: "none",
//               padding: "0.65rem 1.5rem",
//               fontFamily: "'Courier New', monospace",
//               fontWeight: 700,
//               fontSize: "0.78rem",
//               letterSpacing: "0.1em",
//               cursor: "pointer",
//               borderRadius: "4px",
//             }}
//           >
//             VIEW WORK
//           </button>
//           <button
//             onClick={scrollToAbout}
//             style={{
//               background: "transparent",
//               color: "#fff",
//               border: "1px solid rgba(255,255,255,0.25)",
//               padding: "0.65rem 1.5rem",
//               fontFamily: "'Courier New', monospace",
//               fontSize: "0.78rem",
//               letterSpacing: "0.1em",
//               cursor: "pointer",
//               borderRadius: "4px",
//             }}
//           >
//             CONTACT ME
//           </button>
//         </div>
//       </div>

//       {/* ── RIGHT: 3D canvas ──────────────────────── */}
//       <div
//         style={{
//           width: "50%",
//           height: "100%",
//           position: "relative",
//           flexShrink: 0,
//           zIndex: 5,
//           opacity: show ? 1 : 0,
//           transform: show ? "translateX(0)" : "translateX(48px)",
//           transition: "opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s",
//         }}
//       >
//         <Canvas
//           /*
//            * Camera sits at z=6, looks at origin (0,0,0).
//            * Model is centered at origin inside Model.tsx.
//            * fov=45 gives a natural perspective — not fish-eye, not flat.
//            * This combination frames the full gnome in the right half.
//            */
//           camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
//           gl={{ antialias: true, alpha: true }}
//           style={{ position: "absolute", inset: 0 }}
//         >
//           {/* Bright enough to see all model detail */}
//           <ambientLight intensity={1.2} />
//           <directionalLight position={[2, 4, 4]} intensity={1.5} castShadow />
//           <directionalLight position={[-2, 2, -2]} intensity={0.6} />
//           <pointLight position={[0, 3, 3]} intensity={0.8} color="#00ff96" />

//           <Suspense fallback={null}>
//             <Model scrollProgress={scrollProgress} />
//           </Suspense>
//         </Canvas>
"use client";

import { useState, useEffect } from "react";
import Robot3D from "./Robot3D";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
   <section className="relative w-full h-screen bg-black flex items-center justify-center px-10 overflow-hidden font-[Poppins]">

  {/* 🌌 ENHANCED STAR BACKGROUND WITH PARALLAX */}
  <div 
    className="absolute inset-0 star-bg"
    style={{
      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
    }}
  />

  {/* 🔵 ENHANCED ATMOSPHERIC GLOWS */}
  <div className="absolute inset-0 pointer-events-none">
    <div 
      className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[200px] top-[5%] left-[0%]"
      style={{
        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
      }}
    />
    <div 
      className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/15 to-blue-400/15 blur-[180px] bottom-[5%] right-[5%]"
      style={{
        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
      }}
    />
    <div 
      className="absolute w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-[160px] top-[45%] right-[15%]"
      style={{
        transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
      }}
    />
  </div>

  {/* CONTENT */}
  <div className="w-full max-w-7xl flex items-center justify-between z-10">

    {/* LEFT TEXT WITH ENHANCED ANIMATIONS */}
    <div className="max-w-xl text-white">
      <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
        <p className="text-sm font-medium text-cyan-400 mb-4 tracking-widest uppercase animate-pulse">
          Welcome to my universe
        </p>
        
        <h1 className="text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Hello,
          </span>
          <br />
          <span className={`block transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            I'm <span className="text-cyan-400 font-bold">Srivalli</span>
          </span>
        </h1>

        <div className={`transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl leading-relaxed text-gray-300 mb-6">
            Professional Software Developer &
            <span className="text-cyan-400 font-semibold"> Creative Technologist</span>
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['React', 'Next.js', 'Three.js', 'TypeScript'].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  animationDelay: `${700 + index * 100}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT ROBOT WITH ENHANCED CONTAINER */}
    <div className={`relative w-[500px] h-[600px] flex items-center justify-center transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
      {/* GLOW EFFECT BEHIND ROBOT */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse" />
      
      {/* ROBOT CONTAINER */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Robot3D />
      </div>
      
      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>

  </div>

  {/* 🎨 ENHANCED STYLES */}
  <style>{`
    .star-bg {
      background-image: 
        radial-gradient(white 1px, transparent 1px),
        radial-gradient(cyan 0.5px, transparent 0.5px);
      background-size: 50px 50px, 25px 25px;
      background-position: 0 0, 25px 25px;
      opacity: 0.15;
      animation: twinkle 10s ease-in-out infinite;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 0.15; }
      50% { opacity: 0.25; }
    }

    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease-in-out infinite;
    }
  `}</style>
</section>
  );
}