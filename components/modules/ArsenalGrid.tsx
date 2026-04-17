"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Server,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";

interface Weapon {
  name: string;
  icon: React.ReactNode;
  tier: "COMMON" | "RARE" | "RELIC";
}

const ARSENAL: Weapon[] = [
  { name: "Laravel", icon: <Server className="w-5 h-5" />, tier: "RELIC" },
  { name: "Next.js", icon: <Cpu className="w-5 h-5" />, tier: "RELIC" },
  { name: "GCP", icon: <Cloud className="w-5 h-5" />, tier: "RARE" },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, tier: "RARE" },
  { name: "ESP32", icon: <Zap className="w-5 h-5" />, tier: "RELIC" },
  { name: "Docker", icon: <GitBranch className="w-5 h-5" />, tier: "RARE" },
  { name: "Linux", icon: <Terminal className="w-5 h-5" />, tier: "COMMON" },
  { name: "CI/CD", icon: <Wrench className="w-5 h-5" />, tier: "RARE" },
];

const TIER_STYLES: Record<Weapon["tier"], string> = {
  COMMON: "text-text-muted border-panel-border",
  RARE: "text-accent-green border-accent-green/40 shadow-glow-green",
  RELIC: "text-accent-red-glow border-accent-red/50 shadow-glow-red",
};

export default function ArsenalGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {ARSENAL.map((w, i) => (
        <motion.div
          key={w.name}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 * i, duration: 0.4 }}
          whileHover={{ scale: 1.04 }}
          className={`relative bg-[#0a0a0b] border ${TIER_STYLES[w.tier]} p-2.5 rounded-sm cursor-default group`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span>{w.icon}</span>
            <span className="text-[0.55rem] font-mono tracking-[0.2em] uppercase opacity-70">
              {w.tier}
            </span>
          </div>
          <div className="font-display text-[0.78rem] tracking-wider uppercase text-text-primary group-hover:text-white transition">
            {w.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
