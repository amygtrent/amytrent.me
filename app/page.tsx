"use client";
import Image from "next/image";
import { useState } from "react";
import { Inconsolata } from "next/font/google";
import { Fredoka } from "next/font/google";
import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
};

const fredoka = Fredoka({ subsets: ["latin"], weight: "400" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

type MediaItem = {
  type: "image" | "video";
  src: string;
  hoverSrc?: string;
  scale?: number;
};

function Carousel({ items }: { items: MediaItem[] }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = () => {
    setHovered(false);
    setIndex((index - 1 + items.length) % items.length);
  };

  const next = () => {
    setHovered(false);
    setIndex((index + 1) % items.length);
  };

  const currentItem = items[index];

  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
      {currentItem.type === "image" ? (
        <div className="relative w-full h-full flex items-center justify-center">
          
          <img
            src={currentItem.src}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-500"
            style={{
              transform: `scale(${currentItem.scale ?? 1})`,
              opacity: hovered && currentItem.hoverSrc ? 0 : 1,
            }}
          />

          {currentItem.hoverSrc && (
          <img
            src={currentItem.hoverSrc}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(prev => !prev)}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
            style={{
              transform: `translateX(20px) scale(${currentItem.scale ?? 1})`,
              opacity: hovered ? 1 : 0,
            }}
          />
        )}

          {!currentItem.hoverSrc && (
            <img
              src={currentItem.src}
              className="w-full h-full object-contain"
              style={{
                transform: `scale(${currentItem.scale ?? 1})`,
              }}
            />
          )}
        </div>
      ) : (
        <video
  src={currentItem.src}
  controls
  preload="metadata"
  className="w-full h-full object-contain bg-transparent"
  playsInline
/>
      )}

      <button
        onClick={prev}
        className="absolute left-2 z-20 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-2 z-20 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
      >
        →
      </button>
    </div>
  );
}

export default function Home() {
  const [photoToggled, setPhotoToggled] = useState(false);
const [toggledImage, setToggledImage] =
  useState<"toothless" | "cookie" | "batmobile" | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"about" | "projects">("about");
  const [hovered, setHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; t: number }[]>([]);
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());
  const [active, setActive] = useState(1);

  const words = [
    "creator",
    "problem solver",
    "robotics enthusiast",
    "SolidWorks survivor",
    "designer",
    "second-year student",
    "fast learner",
    "leader",
    "caffiene consumer"
  ];

  const [wordIndex, setWordIndex] = useState(0);

  const skills = [
    { img: "/solidworksIcon.jpeg", label: "SolidWorks" },
    { img: "/javaIcon.jpeg", label: "Java" },
    { img: "/cIcon.jpeg", label: "C Programming" },
    { img: "/arduinoIcon.jpeg", label: "Arduino" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let raf: number;

    const loop = () => {
      const now = Date.now();
      const diff = now - lastMoveTime;

      const newActive = Math.max(0, 1 - diff / 1000);

      setActive(newActive);

      raf = requestAnimationFrame(loop);
    };

   raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [lastMoveTime]);

  useEffect(() => {
    const handleTouch = () => {
      setActiveSkill(null);
    };
    if (activeSkill !== null) {
      document.addEventListener("touchstart", handleTouch);
    }
    return () => document.removeEventListener("touchstart", handleTouch);
  }, [activeSkill]);

  useEffect(() => {
    const handleTouch = () => {
      setToggledImage(null);
    };
    if (toggledImage !== null) {
      document.addEventListener("touchstart", handleTouch);
    }
    return () => document.removeEventListener("touchstart", handleTouch);
  }, [toggledImage]);

  return (
    <>
      <div className="overflow-x-hidden min-w-0">

        {/* HEADER */}
        <div
          className="relative w-full h-screen left-1/2 -translate-x-1/2 overflow-hidden flex flex-col items-center justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setMouse({ x, y });
            setLastMoveTime(Date.now());
            setActive(1);

            setTrail((prev) => {
              const next = [{ x, y, t: Date.now() }, ...prev];
              return next.slice(0, 40);
            });
          }}
        >
          {/* BASE IMAGE */}
          <img
            src="/campusAerial.jpg"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            style={{
              filter:
                "grayscale(100%) contrast(1.5) brightness(1.1) sepia(0.1) hue-rotate(200deg)",
            }}
          />

          {/* TRAIL OVERLAY */}
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
                  src="/campusAerial.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* MAIN CURSOR REVEAL */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: active,
              WebkitMaskImage: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, black 0%, black 70%, transparent 100%)`,
              maskImage: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, black 0%, black 70%, transparent 100%)`,
            }}
          >
            <img
              src="/campusAerial.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* TEXT + PORTRAIT */}
          <div className="relative z-10 flex flex-col items-center -translate-y-15 md:scale-[1.1] lg:scale-[1.3] scale-100 px-4">
            <div className="relative min-h-[140px] sm:min-h-[180px] md:h-[220px] flex items-center justify-center mb-10">
              <h1
 className="text-7xl sm:text-7xl md:text-8xl font-black text-center leading-[1.05] w-full"
  style={{
    fontFamily: "Bebas Neue, sans-serif",
    color: "#2f53e5",
  }}
>
  Hey, I’m{" "}
  <span className="block sm:inline">Amy Trent.</span>
</h1>

<h1
 className="absolute text-7xl sm:text-7xl md:text-8xl font-black text-center leading-[1.05] w-full"
  style={{
    fontFamily: "Bebas Neue, sans-serif",
    color: "transparent",
    WebkitTextStroke: "clamp(1px, 0.4vw, 4px) #0b1587",
    transform: "translate(-4px, -4px)",
  }}
>
  Hey, I’m{" "}
  <span className="block sm:inline">Amy Trent.</span>
</h1>
            </div>

            {/* PORTRAIT */}
              <div className="relative flex items-center justify-center -mt-1 sm:mt-4 md:-mt-10">
              <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-br from-[#0b1587] to-[#2f53e5] blur-xl opacity-40"></div>

              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[240px] md:h-[240px] rounded-full p-[6px] bg-gradient-to-br from-[#2f53e5] via-[#0b1587] to-[#2f53e5]">
                <div className="relative w-full h-full rounded-full overflow-hidden">
  
             <button
              type="button"
              onMouseEnter={() => setPhotoToggled(true)}
              onMouseLeave={() => setPhotoToggled(false)}
              onTouchStart={() => setPhotoToggled(prev => !prev)}
              className="relative w-full h-full p-0 border-0 bg-transparent cursor-pointer touch-manipulation"
            >
              <Image
                src={photoToggled ? "/babyMe.jpeg" : "/gradPhoto.jpeg"}
                alt="Portrait"
                fill
                className="object-cover transition-opacity duration-300 pointer-events-none select-none"
              />
            </button>
              </div>
              </div>
            </div>
          </div>

          {/* GRADIENT BAR */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2f53e5] to-[#0b1587]" />
        </div>

       {/* TAB SWITCHER */}
<div className="relative w-full left-1/2 -translate-x-1/2 flex bg-white border-b-2 border-gray-300">

  <button
    className={`w-1/2 text-center py-4 text-lg sm:text-xl md:text-2xl transition-all duration-200 ${
      activeTab === "about"
        ? "border-b-[5px] border-[#3b4cca] font-bold text-[#3b4cca]"
        : "text-gray-700 hover:text-[#3b4cca]"
    }`}
    onClick={() => setActiveTab("about")}
  >
    About Me
  </button>

  <button
    className={`w-1/2 text-center py-4 text-lg sm:text-xl md:text-2xl transition-all duration-200 ${
      activeTab === "projects"
        ? "border-b-[5px] border-[#3b4cca] font-bold text-[#3b4cca]"
        : "text-gray-700 hover:text-[#3b4cca]"
    }`}
    onClick={() => setActiveTab("projects")}
  >
    Projects
  </button>

</div>
{/* TAB CONTENT */}
{activeTab === "about" && (
  <div className="w-full bg-white min-h-screen">

    {/* WHO AM I */}
    <section className="w-full bg-[#1b2f77] text-white min-h-screen pt-24 md:pt-32 pb-24 md:pb-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-9xl font-bold text-center mb-10"
        >
          Who Am I?
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto space-y-6 text-base sm:text-lg leading-relaxed text-blue-100 text-left"
        >
          <p className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            I am a{" "}
            <span className="font-bold text-[#8fb3ff] transition-all duration-300">
              {words[wordIndex]}
            </span>
          </p>

          <p className="text-lg sm:text-xl md:text-3xl">
            ...who is studying mechanical engineering with a concentration in mechatronics at the{" "}
            <a
              href="https://www.ubc.ca"
              target="_blank"
              rel="noopener norefferrer"
              className="text-[#8fb3ff] hover:underline"
            >
              University of British Columbia
            </a>
            . I enjoy combining software and hardware to create innovative designs, a passion that first began in middle school. Since then, I've been drawn to projects involving robotics that don't just exist on a screen, but interact with and respond to the world around them.
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-16"
        >
          <a
            href="https://www.linkedin.com/in/amy-trent-b80944392/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-lg sm:text-2xl font-bold rounded-2xl hover:bg-[#8fb3ff] hover:scale-105 hover:text-[#1b2f77] transition-all duration-300 text-center"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-lg sm:text-2xl font-bold rounded-2xl hover:bg-[#8fb3ff] hover:scale-105 hover:text-[#1b2f77] transition-all duration-300 text-center"
          >
            Resume
          </a>
        </motion.div>

      </div>
    </section>

   {/* SKILLS */}
<section className="w-full bg-white text-black px-4 md:px-8 pt-24 md:pt-42 pb-20 md:min-h-screen md:pb-32">
  <div className="max-w-6xl mx-auto text-center">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-5xl sm:text-7xl md:text-9xl font-bold text-center mb-10 text-[#1b2f77]"
    >
      Skills
    </motion.h2>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 justify-items-center w-fit mx-auto">
      {skills.map((s) => {
        const isActive = activeSkill === s.label;

        return (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setActiveSkill(prev => (prev === s.label ? null : s.label));
            }}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-[#0b1587] flex relative items-center justify-center overflow-hidden cursor-pointer group"
          >

            {/* ICON */}
            <img
              src={s.img}
              alt={s.label}
              className={`
              absolute w-16 sm:w-24 md:w-35 h-16 sm:h-24 md:h-35 object-contain transition-opacity duration-300

              ${isActive ? "opacity-0" : "opacity-100"}

              sm:group-hover:opacity-0
            `}
            />

            {/* TEXT */}
            <p
             className={`
              absolute text-[#0b1587] text-lg sm:text-2xl md:text-3xl font-bold text-center px-2 transition-opacity duration-300

              ${isActive ? "opacity-100" : "opacity-0"}

              sm:group-hover:opacity-100
            `}
            >
              {s.label}
            </p>

          </motion.div>
        );
      })}
    </div>

  </div>
</section>
{/* EDUCATION */}
<section className="w-full min-h-screen flex items-center justify-center bg-[#1b2f77] text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden">

  <div className="max-w-6xl mx-auto w-full flex flex-col items-center relative">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl sm:text-6xl md:text-9xl font-bold text-center mb-16 md:mb-24"
    >
      Education
    </motion.h2>

    {/* STACK ON MOBILE */}
    <div className="relative w-full max-w-6xl">

      {/* TIMELINE LINE */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/30 -translate-x-1/2"
      />

      <div className="relative space-y-20 md:space-y-32">

        {/* UNIVERSITY */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">

          <motion.div className="w-full md:w-[45%] bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              Bachelor of Applied Science
            </h3>

            <p className="text-lg sm:text-xl text-white mb-1">
              University of British Columbia Okanagan
            </p>

            <p className="text-white mb-3">
              September 2025 – April 2029
            </p>

            <p className="text-white mb-1">
              • Mechanical Engineering with a Mechatronics Concentration
            </p>

            <p className="text-white mb-1">
              • 4.0 / 4.33 GPA
            </p>

            <p className="text-white">
              • Dean’s List (September 2025 - April 2026)
            </p>
          </motion.div>

          {/* DOT */}
          <div className="hidden lg:flex w-10 justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white bg-[#1b2f77]" />
          </div>

          <div className="w-full md:w-[45%]" />
        </div>

        {/* HIGH SCHOOL */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">

          <div className="w-full md:w-[45%]" />

          {/* DOT */}
          <div className="hidden lg:flex w-10 justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white bg-[#1b2f77]" />
          </div>

          <motion.div className="w-full md:w-[45%] bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              High School Diploma
            </h3>

            <p className="text-lg sm:text-xl text-white mb-1">
              Abbotsford Christian School
            </p>

            <p className="text-white mb-3">
              September 2021 – June 2025
            </p>

            <p className="text-white mb-1">
              • 4.0 / 4.0 GPA
            </p>

           <p className="text-white mb-1">
  •{" "}
  <a
    href="https://www2.gov.bc.ca/gov/content/education-training/k-12/support/scholarships/provincial-scholarships/bc-achievement-scholarships"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-300 underline hover:text-blue-200"
  >
    BC Achievement Scholarship
  </a>{" "}
  Recipient
</p>

            <p className="text-white mb-1">
              • Student Council (September 2023 - June 2025)
            </p>

            <p className="text-white mb-1">
              • Ambassador (September 2022 - June 2024)
            </p>

            <p className="text-white mb-1">
              • Soccer (Spring 2024 + Spring 2025)
            </p>

            <p className="text-white">
              • 5/5 AP English Language and Composition Exam Score
            </p>
          </motion.div>

        </div>

      </div>
    </div>

  </div>
</section>
</div> 
)}

{activeTab === "projects" && (
  <div className="w-full bg-white">

    {/* PROJECT 1 */}
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-24 bg-white text-black overflow-hidden">

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 leading-tight text-[#1b2f77]"
        >
          Innovative Tree Planter Prototype
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20 items-center"
        >

          <div>
            <span className="text-gray-600 text-base md:text-lg block mb-6">
              Feb. 2026 - April 2026
            </span>

            <p className="text-black text-base md:text-lg leading-relaxed">
              I led a team of six to invent a solution for tree planters. These people who replant
              our forests often report experiencing significant back pain from being hunched over in
              awkward positions with a shovel all day. Our solution was the "Sproute", a tool that
              allows efficient planting without the need to hunch over. The design features a foot
              pedal which opens a claw, pushing dirt aside in a similar way to a shovel. This creates
              the perfect hole in the dirt for a sapling to be planted. The sapling is then dropped
              down the chute of the device and into the hole, passing an IR break beam sensor which is
              programmed to show the amount of planted trees in a session on an LED screen. These
              electronics are powered with the use of a Raspberry Pi, connecting to an app to show
              the total amount and target number of planted trees. A majority of this prototype was
              3D printed and modeled using SolidWorks.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <Carousel
              items={[
                {
                  type: "image",
                  src: "/treePlanterFront.png",
                  hoverSrc: "/treePlanterTop.png",
                  scale: 1.4
                },
                { type: "image", src: "/treePlanterHandles.jpeg", scale: 1 },
                { type: "image", src: "/treePlanterClaw.jpeg", scale: 1 },
                { type: "image", src: "/treePlanterApp.jpeg", scale: 1 },
               { type: "video", src: "https://o58l1inhjbmrpwen.public.blob.vercel-storage.com/treePlanterVideo.mp4" },
              ]}
            />
          </div>

        </motion.div>
      </div>
    </section>

    {/* PROJECT 2 */}
<section className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-24 bg-[#1b2f77] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 leading-tight"
    >
      Full SolidWorks 1989 Batmobile
    </motion.h2>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20 items-center"
    >
      <div>
        <span className="text-blue-200 text-base md:text-lg block mb-6">
          Jan. 2026 - March 2026
        </span>
        <p className="text-blue-100 text-base md:text-lg leading-relaxed">
          I led a team of six to create a complete CAD model of the 1989 Batmobile using SolidWorks.
          The model includes everything from the car's shell, frame, and cockpit to a V8 engine jet
          engine, retractable wings, and machine guns. These features used a vast array of SolidWorks
          features, rapidly boosting proficiency. Every part was designed and modeled with precision
          to ensure everything would come together with the perfect fit. The parts were then all
          mated together in an assembly and brought to life through renderings in Blender.
        </p>
      </div>

      <div className="flex justify-center w-full">
        <Carousel
          items={[
            { type: "image", src: "/batmobileFront.png", hoverSrc: "/batmobileBack.png", scale: 1.3 },
            { type: "video", src: "https://o58l1inhjbmrpwen.public.blob.vercel-storage.com/batmobileVideo.mp4" },
          ]}
        />
      </div>

    </motion.div>
  </div>
</section>
    {/* PROJECT 3 */}
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-24 bg-white text-black overflow-hidden">

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 leading-tight text-[#1b2f77]"
        >
          3D Printed Servo Dragon Head
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >

          <div>
            <span className="text-gray-600 text-base md:text-lg block mb-6">
              Sept. 2023 - Jan. 2024
            </span>

            <p className="text-black text-base md:text-lg leading-relaxed">
              This project was inspired by{" "}
             <span
              className="font-bold text-[#2f53e5]"
              onMouseEnter={() => {
                setHovered(true);
                setHoveredImage("/toothless.png");
              }}
              onMouseLeave={() => {
                setHovered(false);
                setHoveredImage("");
              }}
              onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
            >
              Toothless
            </span>{" "}
              from <span className="italic">How to Train Your Dragon</span>. When I was 15, I decided
              a robot dragon would have to suffice. I created this Toothless head with the ability
              to shake its ears, move its LED eyes, and "breathe fire" with the help of an LED, all
              in accordance to where someone was positioned in front of it. Two proximity sensors
              detected whether someone had approached Toothless from the side or the front. If from
              the side, Toothless would become excited, moving his ears up and down a few times and
              looking towards whichever side the person was on. However, if he sensed that someone
              was directly in front of him, he would become scared: his ears would quiver non-stop
              and he would shoot plasma fire.
            </p>

            <p className="text-black text-base md:text-lg mt-6 leading-relaxed">
              The shell of the dragon head was created using 123D Design and 3D printing. Inside of
              it, a singular servo was connected with a wire to the two ears. When the servo moved
              back and forth, the ears were pulled to create the wiggling effect. Each eye was
              composed of three different green LEDs. At a given time, one LED from each eye would
              be lit, changing depending on the direction they were meant to be looking. The "fire"
              light was positioned near his mouth, shining blue to emulate the blue plasma that
              Toothless shoots in the movie. Through an Arduino MEGA2560, these components were
              hooked up to the transmitter and receiver sensors. If an object was detected in front
              of them, they would send a logic signal to the circuit boards, signalling the detection.
              The boards, programmed using C, would then respond by causing the dragon to react in
              relation to where that object was positioned.
            </p>
          </div>

          <div className="flex justify-center">
          <div
          className="relative w-full max-w-[650px] aspect-[4/3] overflow-hidden group"
          onTouchStart={(e) => {
          e.stopPropagation();
          setToggledImage(prev => prev === "toothless" ? null : "toothless");
        }}
        >

          <Image
            src="/dragonHeadFront.png"
            alt="Dragon Head Front"
            fill
            className={`object-contain transition-opacity duration-300 pointer-events-none select-none
              ${toggledImage === "toothless" ? "opacity-0" : "opacity-100"}
              group-hover:opacity-0
            `}
          />

          <Image
            src="/dragonHeadTop.png"
            alt="Dragon Head Top"
            fill
            className={`absolute top-0 left-0 object-contain transition-opacity duration-300 pointer-events-none select-none
              ${toggledImage === "toothless" ? "opacity-100" : "opacity-0"}
              group-hover:opacity-100
            `}
          />

        </div>
          </div>

        </motion.div>
      </div>
    </section>

    {/* PROJECT 4 */}
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-24 bg-[#1b2f77] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 leading-tight"
        >
          Arduino Dog Cookie Dispenser
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >

          <div>
            <span className="text-blue-200 text-base md:text-lg block mb-6">
              Feb. 2021 - April 2021
            </span>

            <p className="text-blue-100 text-base md:text-lg leading-relaxed">
              As a Grade 8 project, I designed a dog cookie dispenser to test whether my Great Dane,{" "} 
             <span
            className="font-bold text-[#2f53e5]"
            onMouseEnter={() => {
              setHovered(true);
              setHoveredImage("/finnegan.png");
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredImage("");
            }}
            onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
          >
            Finnegan
          </span>
              , could distinguish between two similar sounds. Built around a random timer, the dispenser would play the tones throughout the day. One sound resulted in absolutely nothing; however, the other would play a few seconds before a cookie was dispensed. I was curious whether my dog would learn to ignore one sound and get excited about the other. Unfortunately, the experiment took a turn and resulted in a sick-of-cookies dog who decided he didn't like cheap wheat-flour cookies anymore, so I never reached a conclusion about his sound-association abilities.
            </p>

            <p className="text-blue-100 text-base md:text-lg mt-6 leading-relaxed">
              This project involved a rack and pinion system. A motor would drive the rack forward,
              pushing a dog cookie out of the tower, until it hit a button signaling it was at the end
              of its path. It would then reverse until it hit a different button which would tell the
              Arduino Nano that it had returned to its original position, stopping the motor. The
              dispenser also featured a small speaker to play the tones, along with a couple of LEDs
              to indicate which sound was playing. The entire shell of the device was designed in 123D
              Design and 3D printed, while the hardware was coded in C on an Arduino Nano.
            </p>
          </div>

          <div className="flex justify-center w-full">
          <div
          className="relative w-full max-w-[650px] aspect-[4/3] group overflow-hidden"
          onTouchStart={(e) => {
          e.stopPropagation();
          setToggledImage(prev => prev === "cookie" ? null : "cookie");
        }}
        >

          <Image
            src="/cookieDispenserFront.png"
            alt="Cookie Dispenser Front"
            fill
            className={`object-contain transition-opacity duration-300 pointer-events-none select-none
              ${toggledImage === "cookie" ? "opacity-0" : "opacity-100"}
              sm:group-hover:opacity-0
            `}
          />

          <Image
            src="/cookieDispenserTop.png"
            alt="Cookie Dispenser Top"
            fill
            className={`absolute top-0 left-0 object-contain transition-opacity duration-300 pointer-events-none select-none
              ${toggledImage === "cookie" ? "opacity-100" : "opacity-0"}
              sm:group-hover:opacity-100
            `}
          />

        </div>
          </div>

        </motion.div>
      </div>
    </section>

  </div>
)}
{/* CONTACT SECTION */}
<div className="w-full flex justify-center bg-white pb-20 md:min-h-screen pt-20 md:pt-32 px-4">
  <div id="contact" className="w-full max-w-5xl bg-white flex flex-col items-center">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-5xl sm:text-7xl md:text-9xl font-bold text-center mb-10 text-[#1b2f77]"
    >
      Contact Me
    </motion.h2>

    <form
      action="https://formspree.io/f/xvzbqldp"
      method="POST"
      className="w-full flex flex-col gap-4"
    >
      <motion.input
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        type="text"
        name="name"
        placeholder="Name"
        required
        className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3b4cca]"
      />

      <motion.input
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        type="email"
        name="email"
        placeholder="Email"
        required
        className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3b4cca]"
      />

      <motion.textarea
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        name="message"
        placeholder="Message"
        rows={6}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3b4cca]"
      />

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        type="submit"
        className="px-6 py-3 rounded-full bg-[#0b1587] text-white font-semibold hover:bg-[#2f53e5] transition w-full sm:w-auto"
      >
        Send
      </motion.button>
    </form>
  </div>
</div>

{/* HOVERED IMAGE POPUP */}
{hovered && hoveredImage && (
  <div
    className="fixed pointer-events-none z-50 w-32 h-32 sm:w-40 sm:h-40"
    style={{ top: cursorPos.y + 20, left: cursorPos.x + 20 }}
  >
    <Image
      src={hoveredImage}
      alt="Hovered"
      width={160}
      height={160}
      className="rounded-lg object-cover"
    />
  </div>
)}

</div>
</>
);
}