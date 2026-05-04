"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  tech?: string;
  level: number;
  delay?: number;
}

const SEGMENTS = 14;

export default function SkillBar({ name, tech, level, delay = 0 }: SkillBarProps) {
  const filled = Math.round((level / 100) * SEGMENTS);

  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 py-2.5 border-b border-[rgba(234,217,204,0.08)] last:border-b-0">
      <div className="min-w-0 text-[0.7rem] font-mono tracking-[0.08em] uppercase text-text-primary truncate">
        {name}
        {tech && (
          <span className="text-text-muted normal-case tracking-normal">
            {" "}
            ({tech})
          </span>
        )}
      </div>

      <div className="flex gap-[2px]" aria-label={`${level}%`}>
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: delay + i * 0.04, duration: 0.25 }}
            className={`block w-2 h-3 origin-left ${
              i < filled
                ? "bg-accent-red-glow shadow-[0_0_4px_rgba(201,26,26,0.7)]"
                : "bg-[#1c1c1f] border border-[#2a2a2e]"
            }`}
          />
        ))}
      </div>

      <span className="text-[0.7rem] font-mono text-accent-red-glow w-9 text-right">
        {level}%
      </span>
    </div>
  );
}
