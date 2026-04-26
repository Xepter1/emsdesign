"use client";

import { useRef } from "react";
import { type MotionValue, motion, useScroll, useTransform, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

/* ——————————————————————————————————
   SVG Cloud Filter Definition
   Creates organic, cloud-like edges via feTurbulence
   —————————————————————————————————— */
function CloudFilterDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        {/* Cloud-edge displacement filter */}
        <filter id="cloud-warp" x="-30%" y="-5%" width="160%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.035"
            numOctaves={5}
            seed={2}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={55}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        {/* Softer variant for mobile */}
        <filter id="cloud-warp-sm" x="-20%" y="-5%" width="140%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.06"
            numOctaves={3}
            seed={5}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={22}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* ——————————————————————————————————
   Liquid Glass Cloud Strip (Desktop)
   Vertical cloud with scroll-reactive effects
   —————————————————————————————————— */
function LiquidGlassCloud({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const rotate = useTransform(scrollProgress, [0, 1], [0, 3]);
  const scaleX = useTransform(scrollProgress, [0, 0.3, 0.6, 1], [0.92, 1.05, 0.97, 1.02]);
  const gradientY = useTransform(scrollProgress, [0, 1], [0, -60]);
  const glowOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0.5, 1.0, 0.6]);

  return (
    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[160px] z-10 pointer-events-none hidden lg:block">
      {/* Outer glow aura */}
      <motion.div
        className="absolute -inset-10 rounded-[90px] blur-3xl"
        style={{
          background: "linear-gradient(180deg, rgba(201,167,232,0.45) 0%, rgba(244,167,187,0.5) 30%, rgba(139,184,232,0.45) 60%, rgba(168,230,207,0.35) 85%, rgba(201,167,232,0.45) 100%)",
          filter: "url(#cloud-warp)",
          opacity: glowOpacity,
        }}
      />

      {/* Main cloud body */}
      <motion.div
        className="absolute inset-0 rounded-[70px]"
        style={{
          background: "linear-gradient(180deg, rgba(201,167,232,0.55) 0%, rgba(244,167,187,0.62) 20%, rgba(139,184,232,0.55) 45%, rgba(168,230,207,0.45) 65%, rgba(244,167,187,0.52) 82%, rgba(201,167,232,0.55) 100%)",
          backdropFilter: "blur(28px) saturate(1.5)",
          WebkitBackdropFilter: "blur(28px) saturate(1.5)",
          border: "1.5px solid rgba(255,255,255,0.55)",
          boxShadow: "0 8px 60px rgba(201,167,232,0.35), 0 4px 30px rgba(244,167,187,0.25), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(255,255,255,0.25)",
          filter: "url(#cloud-warp)",
          rotate,
          scaleX,
        }}
      />

      {/* Depth blob */}
      <motion.div
        className="absolute inset-3 rounded-[60px]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(201,167,232,0.18) 50%, rgba(255,255,255,0.2) 100%)",
          filter: "url(#cloud-warp)",
          scaleX: useTransform(scrollProgress, [0, 0.5, 1], [1.03, 0.95, 1.01]),
        }}
      />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 glass-cloud-shimmer rounded-[70px]"
        style={{
          filter: "url(#cloud-warp)",
          y: gradientY,
        }}
      />
    </div>
  );
}

/* ——————————————————————————————————
   Connector line bridging card column → cloud column
   Rendered as a standalone element in the grid cell
   —————————————————————————————————— */
function ConnectorLine({ isLeft }: { isLeft: boolean }) {
  const W = 120; // px — must be >= half the center column width (180/2=90) + a bit of overlap
  return (
    <div
      className="hidden lg:block pointer-events-none"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        // Sit right at the column boundary: on the right edge for left cards, left edge for right cards
        ...(isLeft
          ? { right: 0, marginRight: "-" + W + "px" }
          : { left: 0, marginLeft: "-" + W + "px" }),
        width: W,
        zIndex: 30,
      }}
    >
      <svg
        width={W}
        height={14}
        viewBox={`0 0 ${W} 14`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={isLeft ? "conn-l" : "conn-r"}
            x1={isLeft ? "0" : String(W)}
            y1="0"
            x2={isLeft ? String(W) : "0"}
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(201,167,232,0)" />
            <stop offset="35%" stopColor="rgba(201,167,232,0.55)" />
            <stop offset="70%" stopColor="rgba(244,167,187,0.75)" />
            <stop offset="100%" stopColor="rgba(244,167,187,0.35)" />
          </linearGradient>
        </defs>
        {/* Dashed line */}
        <line
          x1={isLeft ? "8" : String(W - 8)}
          y1="7"
          x2={isLeft ? String(W) : "0"}
          y2="7"
          stroke={`url(#${isLeft ? "conn-l" : "conn-r"})`}
          strokeWidth="1.5"
          strokeDasharray="5 3"
        />
        {/* Dot at card edge */}
        <circle
          cx={isLeft ? "5" : String(W - 5)}
          cy="7"
          r="4"
          fill="rgba(201,167,232,0.65)"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

/* ——————————————————————————————————
   Mobile Cloud Accent (between cards)
   —————————————————————————————————— */
function MobileCloudAccent() {
  return (
    <div className="lg:hidden flex justify-center my-6">
      <div
        className="w-[200px] h-[18px] rounded-full opacity-70"
        style={{
          background: "linear-gradient(90deg, rgba(201,167,232,0.5) 0%, rgba(244,167,187,0.65) 50%, rgba(139,184,232,0.5) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.5)",
          filter: "url(#cloud-warp-sm)",
        }}
      />
    </div>
  );
}

/* ——————————————————————————————————
   Project Card (Glass Design)
   —————————————————————————————————— */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="glass-card rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-text-primary">
            {project.year}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="glass-panel p-2.5 rounded-full">
            <ExternalLink size={16} className="text-text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        <span className="text-xs font-semibold text-pastel-lavender tracking-wider uppercase">
          {project.category}
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-text-primary mt-1 mb-2 group-hover:text-pastel-rose transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/50 border border-white/40 text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ——————————————————————————————————
   Single Timeline Row (static, no fly-in)
   —————————————————————————————————— */
function TimelineCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* Desktop: wide 3-column layout with connector lines */}
      <div className="hidden lg:grid grid-cols-[1fr_180px_1fr] gap-0 items-center mb-20">
        {/* Left column — card with connector extending toward center */}
        <div className="relative">
          {isLeft && (
            <>
              <ProjectCard project={project} />
              <ConnectorLine isLeft={true} />
            </>
          )}
        </div>

        {/* Center spacer (cloud via absolute positioning) */}
        <div />

        {/* Right column — connector first (closer to cloud), then card */}
        <div className="relative">
          {!isLeft && (
            <>
              <ConnectorLine isLeft={false} />
              <ProjectCard project={project} />
            </>
          )}
        </div>
      </div>

      {/* Mobile: single column with cloud accent between */}
      <div className="lg:hidden mb-4">
        <ProjectCard project={project} />
        {index < projects.length - 1 && <MobileCloudAccent />}
      </div>
    </>
  );
}

/* ——————————————————————————————————
   Main Portfolio Section
   —————————————————————————————————— */
export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="portfolio" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6" ref={sectionRef}>
      <CloudFilterDefs />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-pastel-lavender tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mt-4 leading-tight">
            Ausgewählte
            <span className="bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-blue bg-clip-text text-transparent">
              {" "}
              Projekte
            </span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-sm sm:text-base">
            Jedes Projekt erzählt eine Geschichte. Scrolle durch meine
            Timeline und entdecke die Vielfalt meiner Arbeit.
          </p>
        </motion.div>
      </div>

      {/* Timeline Container — wider max-w for more card spread */}
      <div className="relative max-w-7xl mx-auto">
        {/* Liquid Glass Cloud Strip */}
        <LiquidGlassCloud scrollProgress={scrollYProgress} />

        {/* Project Cards */}
        {projects.map((project, index) => (
          <TimelineCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
