"use client";
import "../styles/hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.img
        src="/newlogo-fullblack.svg"
        className="hero-logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        A partnership that actually creates profit...
        
        <span>Or we work for free</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      We build and operate the full-funnel growth infrastructure behind high-performing DTC brands,
combining performance creative, paid media, funnels and retention into one profit-focused system.
      </motion.p>

      <motion.a
        href="https://calendly.com/yash-hypeon/30min?month=2026-02"
        target="_blank"
        className="hero-btn"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
      >
        Start your free growth audit
      </motion.a>
    </section>
  );
}
