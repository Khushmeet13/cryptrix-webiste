import React, { useRef, useEffect, useMemo } from "react";
import Globe from "react-globe.gl";
import HexagonParticles from "./HexagonParticles";

const particles = [...Array(30)].map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 10,
}));

const HeroSection = () => {
  const particleData = useMemo(() => particles, []);
  const globeRef = useRef();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.8;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 3-LAYER NETWORK
    const LAYERS = [
      { count: 40, speed: 0.15, size: 2.2, color: "rgba(60, 191, 242, 0.9)" }, // Near
      { count: 50, speed: 0.1, size: 1.6, color: "rgba(0, 187, 255, 0.6)" }, // Mid
      { count: 60, speed: 0.05, size: 1.0, color: "rgba(0,255,255,0.25)" }, // Far (bokeh)
    ];

    const nodes = [];

    LAYERS.forEach((layer, idx) => {
      for (let i = 0; i < layer.count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * layer.speed,
          vy: (Math.random() - 0.5) * layer.speed,
          radius: layer.size,
          opacity: layer.color,
          layer: idx,
        });
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // connections only for layer 0 + 1 (fast)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          // Avoid far layer heavy checks
          if (a.layer === 2 && b.layer === 2) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = dx * dx + dy * dy;

          if (dist < 15000) {
            const opacity = 1 - dist / 15000;

            ctx.strokeStyle = `rgba(0,255,255,${opacity * 0.4})`;
            ctx.lineWidth = a.layer === 0 ? 1.2 : 0.6;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.fillStyle = n.opacity;
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Animation loop for rotating objects
  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;
    const scene = globe.scene();

    const animate = () => {
      scene.traverse((child) => {
        if (child.userData.rotationSpeed) {
          child.rotation.z += child.userData.rotationSpeed;
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    // Auto-rotate globe
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.7;

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div
      className="w-full h-[80vh] relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/background.gif')` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        {/* <HexagonParticles /> */}

        {/* Animated Background Particles & Glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-60">
            {particleData.map((p, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-float"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                }}
              />
            ))}
          </div>

          {/* Large glowing orbs */}
          <div className="absolute top-0 -left-10 w-66 h-66 bg-cyan-600/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-20 right-20 w-66 h-66 bg-cyan-600/50 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-32 left-32 w-80 h-80 bg-cyan-600/40 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-600/10 via-transparent to-pink-600/10 rounded-full blur-3xl" />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0">
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereAltitude={0.25}
            pointLightColor="#818cf8"
            pointLightIntensity={2}
            ambientLightColor="#4f46e5"
            enableGlow={true}
            // Hex grid on globe surface
            hexBinPointsData={particleData}
            hexBinResolution={4}
            hexAltitude={0.008}
            hexTopColor={() => "#818cf8"}
            hexSideColor={() => "#4f46e5"}
          />
        </div>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-indigo-900/60 via-black/10 to-black/60"></div>

        {/* S A P H E R — TRON STYLE FADE BACKGROUND TEXT */}
        {/* <h1 className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="text-[300px]
               font-black tracking-tighter leading-none
               bg-gradient-to-br from-white via-white to-white 
               bg-clip-text text-transparent
               drop-shadow-2xl
               [text-shadow:0_0_80px_rgba(255,255,255,0.15)]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff' stop-opacity='0.15'/%3E%3Cstop offset='50%25' stop-color='%23ffffff' stop-opacity='0.05'/%3E%3Cstop offset='100%25' stop-color='%23ffffff' stop-opacity='0.02'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x='50' y='68' font-family='Impact, Arial Black, sans-serif' font-size='90' fill='url(%23grad)' text-anchor='middle'%3ESapher%3C/text%3E%3C/svg%3E")`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Sapher
          </span>
        </h1> */}
        {/* <h1 className="absolute text-[300px] font-extrabold text-white/20 tracking-tight">
          Sapher
        </h1> */}
        <div className="absolute text-center z-20 font-['Dancing_Script']">
          <h2 className="text-5xl font-medium italic uppercase leading-tight mt-14">
            The Future of Decentralized
          </h2>
          <h2 className="text-5xl font-medium italic uppercase leading-tight -mt-1">
            Governance
          </h2>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative w-full flex justify-center">
        <div className="bg-white w-[92%] md:w-[85%] shadow-xl -mt-14 z-30">
          {/* Red Top Strip */}
          <div className="bg-indigo-900/80 text-white py-4 text-center text-base">
            Boasting over 349 million accounts and 12.2 billion transactions,
            SAPHER is the world’s fastest-growing public chain.
          </div>

          {/* Content Box */}
          <div className="py-5 px-6">
            {/* Four Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 text-center gap-10">
              <StatBox label="Total Number of Accounts" value="349,751,624" />
              <StatBox label="Transaction Count" value="12,230,172,672" />
              <StatBox label="Total Value Locked" value="$22,956,679,239" />
              <StatBox label="Transfer Volume (24h)" value="$29,923,907,157" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatBox = ({ label, value }) => (
  <div className="bg-white/10 border-r border-gray-200 last:border-r-0">
    <h3 className="text-2xl text-black">{value}</h3>
    <p className="text-gray-400 mt-2">{label}</p>
  </div>
);

export default HeroSection;
