"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pastel-lavender/15 to-pastel-pink/10 blur-3xl -z-10"
        style={{ top: "10%", left: "-10%" }}
        animate={{
          scale: [1, 1.05, 0.97, 1],
          x: [0, 20, -10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-pastel-sky/15 to-pastel-blue/10 blur-3xl -z-10"
        style={{ bottom: "5%", right: "-5%" }}
        animate={{
          scale: [1, 0.96, 1.04, 1],
          x: [0, -15, 10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-pastel-lavender tracking-widest uppercase">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mt-4 leading-tight">
            Lass uns dein Projekt
            <span className="bg-gradient-to-r from-pastel-pink to-pastel-lavender bg-clip-text text-transparent">
              {" "}
              zum Leben erwecken
            </span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Du hast eine Idee? Schreib mir und ich melde mich innerhalb von
            24 Stunden bei dir.
          </p>
        </motion.div>

        {/* Glass Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass-glow rounded-3xl p-8 md:p-10 lg:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle size={48} className="text-pastel-mint mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Nachricht gesendet!
              </h3>
              <p className="text-text-secondary">
                Vielen Dank! Ich melde mich bald bei dir.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="flex items-center gap-2 text-sm font-medium text-text-primary mb-2"
                >
                  <User size={16} className="text-pastel-lavender" />
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Dein Name"
                  className="input-glass w-full px-5 py-3.5 rounded-xl text-text-primary placeholder:text-text-muted"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="flex items-center gap-2 text-sm font-medium text-text-primary mb-2"
                >
                  <Mail size={16} className="text-pastel-pink" />
                  E-Mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="deine@email.de"
                  className="input-glass w-full px-5 py-3.5 rounded-xl text-text-primary placeholder:text-text-muted"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="flex items-center gap-2 text-sm font-medium text-text-primary mb-2"
                >
                  <MessageSquare size={16} className="text-pastel-sky" />
                  Nachricht
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Erzähl mir von deinem Projekt..."
                  className="input-glass w-full px-5 py-3.5 rounded-xl text-text-primary placeholder:text-text-muted resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-solid w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Nachricht senden
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
