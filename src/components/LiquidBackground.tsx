"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "w-[500px] h-[500px] bg-gradient-to-br from-pastel-pink/40 to-pastel-lavender/30",
    style: { top: "-5%", left: "-10%" },
    animate: {
      scale: [1, 1.1, 0.95, 1.05, 1],
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 15, -10, 0],
    },
    duration: 14,
  },
  {
    className: "w-[400px] h-[400px] bg-gradient-to-br from-pastel-sky/35 to-pastel-blue/25",
    style: { top: "15%", right: "-8%" },
    animate: {
      scale: [1, 0.95, 1.08, 0.97, 1],
      x: [0, -25, 10, -15, 0],
      y: [0, 20, -30, 10, 0],
    },
    duration: 16,
  },
  {
    className: "w-[350px] h-[350px] bg-gradient-to-br from-pastel-peach/30 to-pastel-orange/20",
    style: { top: "40%", left: "5%" },
    animate: {
      scale: [1, 1.05, 0.92, 1.03, 1],
      x: [0, 15, -25, 20, 0],
      y: [0, -20, 25, -15, 0],
    },
    duration: 12,
  },
  {
    className: "w-[450px] h-[450px] bg-gradient-to-br from-pastel-lavender/25 to-pastel-pink/20",
    style: { top: "55%", right: "0%" },
    animate: {
      scale: [1, 0.98, 1.06, 0.94, 1],
      x: [0, -20, 30, -10, 0],
      y: [0, 15, -20, 25, 0],
    },
    duration: 18,
  },
  {
    className: "w-[300px] h-[300px] bg-gradient-to-br from-pastel-mint/25 to-pastel-sky/20",
    style: { top: "75%", left: "15%" },
    animate: {
      scale: [1, 1.08, 0.96, 1.02, 1],
      x: [0, 20, -15, 10, 0],
      y: [0, -30, 20, -10, 0],
    },
    duration: 15,
  },
  {
    className: "w-[380px] h-[380px] bg-gradient-to-br from-pastel-blue/20 to-pastel-lavender/15",
    style: { top: "90%", right: "10%" },
    animate: {
      scale: [1, 0.94, 1.04, 0.98, 1],
      x: [0, -15, 25, -20, 0],
      y: [0, 20, -15, 30, 0],
    },
    duration: 20,
  },
];

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full mix-blend-multiply blur-3xl ${blob.className}`}
          style={blob.style}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Extra subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/30 to-surface/60" />
    </div>
  );
}
