"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  category?: string;
  delay?: number;
}

export default function SkillBar({ name, level, category, delay = 0 }: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-baseline mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[0.8rem] font-mono text-text-primary tracking-wide">{name}</span>
          {category && (
            <span className="text-[0.6rem] font-mono text-text-muted uppercase tracking-[0.18em]">
              ::{category}
            </span>
          )}
        </div>
        <span className="text-[0.7rem] font-mono text-accent-green">
          {level.toString().padStart(3, "0")}%
        </span>
      </div>
      <div className="hud-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="hud-bar__fill"
        />
      </div>
    </div>
  );
}
