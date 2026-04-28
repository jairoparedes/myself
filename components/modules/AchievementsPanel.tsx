"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function AchievementsPanel() {
  return (
    <div className="flex gap-4 items-start">
      <ul className="flex-1 space-y-2 font-mono text-[0.78rem]">
        {achievements.map((a, i) => (
          <motion.li
            key={a.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.07 * i }}
            className="flex items-baseline gap-2"
          >
            <span className="text-accent-red-glow">⚙</span>
            <span className="text-accent-red-glow font-bold">{a.value}</span>
            <span className="text-text-primary">{a.label}</span>
          </motion.li>
        ))}
      </ul>

      {/* SILUETA / EMBLEMA */}
      <div className="hidden md:block relative w-20 h-32 shrink-0 opacity-90">
        <svg viewBox="0 0 80 130" className="w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="achGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b3a2a" />
              <stop offset="100%" stopColor="#0a0a0b" />
            </linearGradient>
          </defs>
          <path
            d="M40 6 C18 6 12 40 14 80 C16 110 26 124 40 128 C54 124 64 110 66 80 C68 40 62 6 40 6 Z"
            fill="url(#achGrad)"
            stroke="#3a2a20"
          />
          <ellipse cx="40" cy="40" rx="14" ry="16" fill="#0a0a0b" />
          <circle cx="34" cy="40" r="1.6" fill="#ff3030" />
          <circle cx="46" cy="40" r="1.6" fill="#ff3030" />
          <rect x="32" y="48" width="16" height="4" fill="#0a0a0b" stroke="#3a2a20" />
          <path d="M30 60 L50 60 L46 100 L34 100 Z" fill="#2a1c14" stroke="#3a2a20" />
          {/* aquila */}
          <text
            x="40"
            y="80"
            textAnchor="middle"
            fontSize="14"
            fill="#c91a1a"
            opacity="0.85"
          >
            ⚜
          </text>
        </svg>
      </div>
    </div>
  );
}
