"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Cpu,
  Factory,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import { Mission } from "@/data/missions";

interface MissionCardProps {
  mission: Mission;
  index?: number;
}

const ICONS: Record<string, LucideIcon> = {
  cpu: Cpu,
  monitor: Monitor,
  cloud: Cloud,
  brain: Brain,
  factory: Factory,
};

export default function MissionCard({ mission, index = 0 }: MissionCardProps) {
  const Icon = ICONS[mission.icon] ?? Cpu;
  const isCompleted = mission.status === "completed";
  const statusLabel = isCompleted ? "COMPLETADA" : "EN PROGRESO";
  const statusColor = isCompleted ? "text-accent-green" : "text-amber-400";
  const statusMark = isCompleted ? "✓" : "⟳";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="h-full flex flex-col min-h-0"
    >
      <div
        className={`relative aspect-[16/10] rounded-sm overflow-hidden border border-[#3a2818] bg-gradient-to-br ${mission.gradient} parchment-tint`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(201,26,26,0.18), transparent 55%), radial-gradient(ellipse at 70% 90%, rgba(0,0,0,0.85), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="w-12 h-12 text-white/85 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
            strokeWidth={1.2}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)",
          }}
        />
      </div>

      <h4 className="font-display font-bold text-[0.78rem] tracking-[0.12em] text-[var(--text-color,#ead9cc)] uppercase mt-2.5">
        {mission.title}
      </h4>

      <p className="mt-1 text-[0.66rem] font-mono text-[rgba(234,217,204,0.72)] leading-relaxed flex-1">
        {mission.description}
      </p>

      <div className="mt-auto pt-2 border-t border-dashed border-[#3a2818] flex items-center gap-1.5 flex-wrap">
        <span className={`${statusColor} text-xs`}>{statusMark}</span>
        <span className="text-[0.55rem] font-mono tracking-[0.18em] uppercase text-[rgba(234,217,204,0.5)]">
          Estado:
        </span>
        <span className={`text-[0.58rem] font-mono tracking-[0.18em] uppercase ${statusColor}`}>
          {statusLabel}
        </span>
      </div>
    </motion.div>
  );
}
