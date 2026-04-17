"use client";

import { Skull } from "lucide-react";
import { motion } from "framer-motion";

interface SkullHeaderProps {
  title: string;
  subtitle?: string;
  glitch?: boolean;
}

export default function SkullHeader({ title, subtitle, glitch = true }: SkullHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 blur-md bg-accent-red/40 rounded-full" />
        <div className="relative w-11 h-11 flex items-center justify-center border border-panel-border bg-[#0a0a0b] rounded-sm">
          <Skull className="w-6 h-6 text-accent-red-glow animate-flicker" strokeWidth={1.5} />
        </div>
      </motion.div>
      <div>
        <h1
          data-text={title}
          className={`${glitch ? "glitch" : ""} font-display font-black text-xl sm:text-2xl tracking-widest uppercase`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[0.68rem] text-text-muted tracking-[0.3em] uppercase mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
