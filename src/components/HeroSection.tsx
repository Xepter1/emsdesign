"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Decorative Hero Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pastel-pink/25 via-pastel-lavender/20 to-pastel-sky/15 blur-3xl"
        style={{ top: "10%", right: "-5%" }}
        animate={{
          scale: [1, 1.05, 0.97, 1.03, 1],
          rotate: [0, 5, -3, 2, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-pastel-peach/20 via-pastel-orange/15 to-pastel-pink/10 blur-3xl"
        style={{ bottom: "5%", left: "-5%" }}
        animate={{
          scale: [1, 0.96, 1.04, 0.98, 1],
          rotate: [0, -3, 5, -2, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-panel px-5 py-2 rounded-full mb-8"
        >
          <Sparkles size={16} className="text-pastel-orange" />
          <span className="text-sm font-medium text-text-secondary">
            Freelance Grafikdesignerin
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
        >
          Kreatives Design,
          <br />
          <span className="bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-blue bg-clip-text text-transparent">
            das Geschichten erzählt
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ich gestalte einzigartige visuelle Identitäten, die deine Marke
          unvergesslich machen — von Brand Identity über Packaging bis hin zu
          Social Media Design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-solid px-8 py-3.5 rounded-full text-base font-semibold tracking-wide"
          >
            Dienste buchen
          </a>
          <a
            href="#portfolio"
            className="btn-glass px-8 py-3.5 rounded-full text-base font-medium text-text-primary"
          >
            Portfolio ansehen
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 md:mt-24"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Entdecken
            </span>
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
