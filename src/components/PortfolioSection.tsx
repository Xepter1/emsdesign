"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

/* ——————————————————————————————————
   Persistent Liquid Glass Center Element
   —————————————————————————————————— */
function LiquidGlassOrb() {
  return (
    <div className="hidden lg:flex sticky top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
      <div className="relative">
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-8 rounded-full bg-gradient-to-br from-pastel-lavender/15 via-pastel-pink/10 to-pastel-sky/15 blur-2xl"
          animate={{
            scale: [1, 1.15, 0.95, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Glass orb */}
        <motion.div
          className="w-16 h-16 rounded-full glass-glow flex items-center justify-center animate-glow-pulse"
          animate={{
            scale: [1, 1.05, 0.97, 1.03, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pastel-lavender/60 to-pastel-pink/40" />
        </motion.div>
      </div>
    </div>
  );
}

/* ——————————————————————————————————
   Single Portfolio Timeline Card
   —————————————————————————————————— */
function TimelineCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isLeft ? [-120, 0] : [120, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    isLeft ? [-4, 0] : [4, 0]
  );

  return (
    <div
      ref={cardRef}
      className={`relative grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-4 lg:gap-0 items-center mb-16 lg:mb-24`}
    >
      {/* Left content (or empty spacer) */}
      <div className={`${isLeft ? "block" : "hidden lg:block"} ${!isLeft ? "lg:order-1" : ""}`}>
        {isLeft && (
          <motion.div style={{ x, opacity, rotate }}>
            <ProjectCard project={project} />
          </motion.div>
        )}
      </div>

      {/* Timeline center dot */}
      <div className="hidden lg:flex justify-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="timeline-dot w-4 h-4 rounded-full z-10"
        />
      </div>

      {/* Right content (or empty spacer) */}
      <div className={`${!isLeft ? "block" : "hidden lg:block"} ${!isLeft ? "lg:order-3" : ""}`}>
        {!isLeft && (
          <motion.div style={{ x, opacity, rotate }}>
            <ProjectCard project={project} />
          </motion.div>
        )}
        {isLeft && <div className="hidden lg:block" />}
      </div>

      {/* Mobile: always show card */}
      <div className="lg:hidden">
        {!isLeft && (
          <motion.div style={{ x: 0, opacity, rotate: 0 }}>
            <ProjectCard project={project} />
          </motion.div>
        )}
      </div>
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
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Year badge */}
        <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-text-primary">
            {project.year}
          </span>
        </div>

        {/* View icon on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="glass-panel p-2.5 rounded-full">
            <ExternalLink size={16} className="text-text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        {/* Category */}
        <span className="text-xs font-semibold text-pastel-lavender tracking-wider uppercase">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-text-primary mt-1 mb-2 group-hover:text-pastel-rose transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
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
   Main Portfolio Section
   —————————————————————————————————— */
export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-6" ref={sectionRef}>
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 lg:mb-24">
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
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Jedes Projekt erzählt eine Geschichte. Scrolle durch meine
            Timeline und entdecke die Vielfalt meiner Arbeit.
          </p>
        </motion.div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

        {/* Liquid Glass Center Orb */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-8 top-0 bottom-0">
          <LiquidGlassOrb />
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <TimelineCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
