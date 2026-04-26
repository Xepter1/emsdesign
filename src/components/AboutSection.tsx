"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Heart, Coffee } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-pastel-lavender tracking-widest uppercase">
            Über mich
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-glow">
              {/* Profile image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/40 via-pastel-lavender/30 to-pastel-sky/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-white/40 backdrop-blur-md border border-white/60 flex items-center justify-center mx-auto mb-4">
                    <Palette size={48} className="text-pastel-lavender" />
                  </div>
                  <p className="text-sm text-text-secondary/60 font-medium">
                    Dein Foto hier
                  </p>
                </div>
              </div>

              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
            </div>

            {/* Decorative floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass-panel px-4 py-3 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <Coffee size={18} className="text-pastel-orange" />
                <span className="text-sm font-medium text-text-primary">
                  5+ Jahre Erfahrung
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
              Design mit
              <br />
              <span className="bg-gradient-to-r from-pastel-rose to-pastel-lavender bg-clip-text text-transparent">
                Leidenschaft & Liebe
              </span>
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hi, ich bin Emilia! Als Freelance-Grafikdesignerin verwandle ich
                Ideen in visuelle Erlebnisse. Ob eine neue Markenidentität, ein
                auffälliges Packaging oder eine Social-Media-Kampagne, die im
                Gedächtnis bleibt — ich bringe deine Vision zum Leuchten.
              </p>
              <p>
                Mein Ansatz verbindet strategisches Denken mit kreativer
                Intuition. Ich glaube daran, dass gutes Design nicht nur schön
                aussieht, sondern Emotionen weckt und Geschichten erzählt.
              </p>
            </div>

            {/* Skill Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Palette size={20} />, label: "Brand Identity", color: "text-pastel-lavender" },
                { icon: <Heart size={20} />, label: "Social Media", color: "text-pastel-pink" },
                { icon: <Coffee size={20} />, label: "Packaging", color: "text-pastel-orange" },
              ].map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="glass-card px-4 py-3 rounded-xl flex items-center gap-3"
                >
                  <span className={skill.color}>{skill.icon}</span>
                  <span className="text-sm font-medium text-text-primary">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
