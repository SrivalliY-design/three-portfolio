// "use client";

// import { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";

// import Loader from "./components/Loader";
// import Experience from "./three/Experience";
// import Hero from "./components/Hero";
// import About from "./components/About";

// export default function Page() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Enable smooth scrolling
//     document.documentElement.style.scrollBehavior = "smooth";
//     return () => {
//       document.documentElement.style.scrollBehavior = "";
//     };
//   }, []);

//   // 🔄 Show Loader first
//   if (loading) {
//     return <Loader onFinish={() => setLoading(false)} />;
//   }

//   // 🚀 After loading → show portfolio
//   return (
//     <div className="bg-black" style={{ minHeight: "200vh" }}>

//       {/* 🎥 3D BACKGROUND */}
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 50 }} // 👈 balanced view
//         className="fixed top-0 left-0 w-full h-full"
//       >
//         <Experience />
//       </Canvas>

//       {/* 📄 HERO CONTENT */}
//       <main className="relative z-10">
//         <Hero />
        
//         {/* ABOUT SECTION */}
//         <section 
//           id="about" 
//           className="min-h-screen flex items-center justify-center text-white relative"
//           style={{
//             background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
//             paddingTop: "100vh"
//           }}
//         >
//           <About />
//         </section>
//       </main>

//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import MainContainer from "./components/MainContainer";

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return <MainContainer />;
}