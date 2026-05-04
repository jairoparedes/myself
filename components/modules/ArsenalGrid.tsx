"use client";

import { motion } from "framer-motion";
import { arsenal } from "@/data/arsenal";

export default function ArsenalGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-4 sm:gap-x-4">
      {arsenal.map((w, i) => (
        <motion.div
          key={w.name}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 * i, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="w-12 h-12 rounded-sm border border-panel-border bg-[#0a0a0b] flex items-center justify-center font-display font-black text-lg shadow-inner"
            style={{
              color: w.color,
              boxShadow: `inset 0 0 8px rgba(0,0,0,0.8), 0 0 6px ${w.color}25`,
            }}
            aria-hidden
          >
            <span style={{ textShadow: `0 0 8px ${w.color}` }}>{w.letter}</span>
          </div>
          <span className="text-[0.58rem] font-mono tracking-[0.2em] uppercase text-text-muted">
            {w.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
