"use client";
import { useState, useEffect } from "react";

type Props = {
  image: string;
  title: string;
  titleColor: string;
  titleOutlineColor: string;
  imageBrightness?: number;
};

export default function MouseRevealHero({ image, title, titleColor, titleOutlineColor, imageBrightness}: Props) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; t: number }[]>([]);
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());
  const [active, setActive] = useState(1);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      const diff = Date.now() - lastMoveTime;
      setActive(Math.max(0, 1 - diff / 1000));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [lastMoveTime]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMouse({ x, y });
        setLastMoveTime(Date.now());
        setActive(1);
        setTrail((prev) => [{ x, y, t: Date.now() }, ...prev].slice(0, 40));
      }}
    >
      <img
  src={image}
  className="absolute inset-0 w-full h-full object-cover"
  style={{
    filter: `grayscale(100%) contrast(1.5) brightness(${imageBrightness ?? 1.1}) sepia(0.1) hue-rotate(200deg)`,
  }}
/>

      {trail.map((p, i) => {
        const age = Date.now() - p.t;
        const opacity = Math.max(0, 1 - age / 300);
        return (
          <div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{
              WebkitMaskImage: `radial-gradient(circle 240px at ${p.x}px ${p.y}px, black 0%, black 70%, transparent 100%)`,
              maskImage: `radial-gradient(circle 240px at ${p.x}px ${p.y}px, black 0%, black 70%, transparent 100%)`,
              opacity,
            }}
          >
          <img
          src={image}
          className="w-full h-full object-cover"
          style={{ filter: `brightness(${imageBrightness ?? 1})` }}
        />
          </div>
        );
      })}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: active,
          WebkitMaskImage: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, black 0%, black 70%, transparent 100%)`,
          maskImage: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, black 0%, black 70%, transparent 100%)`,
        }}
      >
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl px-4 text-center">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.05]"
          style={{ fontFamily: "Bebas Neue, sans-serif", color: titleColor }}
        >
          {title}
        </h1>
        <h1
          className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl font-black leading-[1.05] px-4"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            color: "transparent",
            WebkitTextStroke: `clamp(1px, 0.4vw, 4px) ${titleOutlineColor}`,
            transform: "translate(-4px, -4px)",
          }}
        >
          {title}
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2f53e5] to-[#0b1587]" />
    </div>
  );
}
