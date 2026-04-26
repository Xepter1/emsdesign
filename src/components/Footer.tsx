"use client";

import { motion } from "framer-motion";
import { Globe, PenTool, Link2, Heart } from "lucide-react";

const socialLinks = [
  { icon: <Globe size={20} />, href: "#", label: "Website" },
  { icon: <PenTool size={20} />, href: "#", label: "Behance" },
  { icon: <Link2 size={20} />, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  { label: "Impressum", href: "#impressum" },
  { label: "Datenschutz", href: "#datenschutz" },
];

export default function Footer() {
  return (
    <footer id="impressum" className="relative py-16 px-6">
      {/* Glass background */}
      <div className="absolute inset-0 glass-nav" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              className="text-2xl font-semibold text-text-primary tracking-tight"
            >
              emilia<span className="text-pastel-lavender">.</span>
            </a>
            <p className="text-sm text-text-secondary mt-2 max-w-xs">
              Freelance Grafikdesignerin für einzigartige visuelle Identitäten
              und kreative Markenerlebnisse.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-end gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="glass-card p-2.5 rounded-xl text-text-secondary hover:text-pastel-rose transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Emilia Krüger. Alle Rechte
              vorbehalten.
            </p>
            <p className="text-xs text-text-muted flex items-center gap-1">
              Mit <Heart size={12} className="text-pastel-pink" /> gestaltet
            </p>
          </div>
        </div>

        {/* Impressum Content */}
        <div className="mt-10 glass-panel rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Impressum
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-text-secondary leading-relaxed">
            <div>
              <p className="font-medium text-text-primary mb-1">
                Angaben gemäß § 5 TMG
              </p>
              <p>Emilia Krüger</p>
              <p>Grafikdesign & Branding</p>
              <p>Musterstraße 42</p>
              <p>10115 Berlin</p>
            </div>
            <div>
              <p className="font-medium text-text-primary mb-1">Kontakt</p>
              <p>E-Mail: hello@emiliadesign.de</p>
              <p>Telefon: +49 (0) 30 12345678</p>
              <p className="mt-3 font-medium text-text-primary mb-1">
                Umsatzsteuer-ID
              </p>
              <p>DE 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
