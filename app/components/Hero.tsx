"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import Model from "../three/Model";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Enable scrolling after initial animation
    const enableScrolling = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    };

    const t = setTimeout(() => {
      setShow(true);
      enableScrolling();
    }, 150);
    
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);

      // Start transition when scroll reaches 80%
      if (progress >= 0.8 && !isTransitioning) {
        setIsTransitioning(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransitioning]);

  return (
    <section
      style={{
        background: "#000",
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        transform: `translateY(${scrollProgress * -100}%)`,
        opacity: isTransitioning ? 0 : 1,
        transition: isTransitioning ? "opacity 1s ease, transform 1s ease" : "none",
      }}
    >
      {/* Green grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,150,0.04) 1px, transparent 1px)," +
            "linear-gradient(90deg,rgba(0,255,150,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── LEFT: text ─────────────────────────────── */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 6vw",
          boxSizing: "border-box",
          zIndex: 10,
          transition: "opacity 1s ease 0.1s, transform 1s ease 0.1s",
          opacity: show ? 1 : 0,
          transform: show ? "translateX(0)" : "translateX(-48px)",
        }}
      >
        <p
          style={{
            color: "#00ff96",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "1.1rem",
            opacity: show ? 1 : 0,
            transition: "opacity 1s ease 0.35s",
          }}
        >
          {"<welcome to my portfolio />"}
        </p>

        <h1
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.6rem, 4.8vw, 4.5rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 0.5rem",
          }}
        >
          Hi, I&apos;m{" "}
          <span
            style={{
              color: "#00ff96",
              display: "inline-block",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s",
            }}
          >
            Srivalli Y
          </span>
        </h1>

        <h2
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "clamp(0.9rem, 1.7vw, 1.25rem)",
            color: "#9ca3af",
            marginBottom: "1.5rem",
            opacity: show ? 1 : 0,
            transition: "opacity 1s ease 0.75s",
          }}
        >
          Frontend Developer{" "}
          <span style={{ color: "#00ff96" }}>_</span>
        </h2>

        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.98rem",
            color: "#6b7280",
            lineHeight: 1.8,
            maxWidth: "440px",
            marginBottom: "1.8rem",
            opacity: show ? 1 : 0,
            transition: "opacity 1s ease 0.95s",
          }}
        >
          I craft scalable, interactive web experiences using{" "}
          <span style={{ color: "#d1fae5" }}>React</span>,{" "}
          <span style={{ color: "#d1fae5" }}>Next.js</span>, and{" "}
          <span style={{ color: "#d1fae5" }}>Three.js</span> — bridging
          pixel-perfect UI with performant, production-grade architecture.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.45rem",
            marginBottom: "1.8rem",
            opacity: show ? 1 : 0,
            transition: "opacity 1s ease 1.15s",
          }}
        >
          {["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "REST APIs"].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.68rem",
                  color: "#00ff96",
                  border: "1px solid rgba(0,255,150,0.3)",
                  borderRadius: "4px",
                  padding: "3px 9px",
                  background: "rgba(0,255,150,0.05)",
                  letterSpacing: "0.07em",
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            opacity: show ? 1 : 0,
            transition: "opacity 1s ease 1.35s",
          }}
        >
          <button
            onClick={scrollToAbout}
            style={{
              background: "#00ff96",
              color: "#000",
              border: "none",
              padding: "0.65rem 1.5rem",
              fontFamily: "'Courier New', monospace",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            VIEW WORK
          </button>
          <button
            onClick={scrollToAbout}
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "0.65rem 1.5rem",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            CONTACT ME
          </button>
        </div>
      </div>

      {/* ── RIGHT: 3D canvas ──────────────────────── */}
      <div
        style={{
          width: "50%",
          height: "100%",
          position: "relative",
          flexShrink: 0,
          zIndex: 5,
          opacity: show ? 1 : 0,
          transform: show ? "translateX(0)" : "translateX(48px)",
          transition: "opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s",
        }}
      >
        <Canvas
          /*
           * Camera sits at z=6, looks at origin (0,0,0).
           * Model is centered at origin inside Model.tsx.
           * fov=45 gives a natural perspective — not fish-eye, not flat.
           * This combination frames the full gnome in the right half.
           */
          camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
          gl={{ antialias: true, alpha: true }}
          style={{ position: "absolute", inset: 0 }}
        >
          {/* Bright enough to see all model detail */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 4, 4]} intensity={1.5} castShadow />
          <directionalLight position={[-2, 2, -2]} intensity={0.6} />
          <pointLight position={[0, 3, 3]} intensity={0.8} color="#00ff96" />

          <Suspense fallback={null}>
            <Model scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
