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
import SteampunkCorner from "@/components/ui/SteampunkCorner";

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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="tech-panel steampunk-frame h-full flex flex-col !p-2.5"
    >
      <SteampunkCorner position="tl" size={28} variant="tech-priest" />
      <SteampunkCorner position="tr" size={28} variant="tech-priest" />
      <SteampunkCorner position="bl" size={28} variant="tech-priest" />
      <SteampunkCorner position="br" size={28} variant="tech-priest" />

      {/* IMAGEN */}
      <div
        className={`relative aspect-[16/10] rounded-sm overflow-hidden border border-panel-border bg-gradient-to-br ${mission.gradient} parchment-tint`}
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
            className="w-14 h-14 text-white/85 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
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

      {/* TÍTULO */}
      <h4 className="font-display font-bold text-[0.82rem] tracking-[0.14em] text-text-primary uppercase mt-3">
        {mission.title}
      </h4>

      {/* DESCRIPCIÓN */}
      <p className="mt-1.5 text-[0.7rem] font-mono text-text-muted leading-relaxed flex-1">
        {mission.description}
      </p>

      {/* ESTADO */}
      <div className="mt-3 pt-2 border-t border-dashed border-panel-border flex items-center gap-2">
        <span className={`${statusColor} text-xs`}>{statusMark}</span>
        <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-text-muted">
          Estado:
        </span>
        <span className={`text-[0.62rem] font-mono tracking-[0.2em] uppercase ${statusColor}`}>
          {statusLabel}
        </span>
      </div>
    </motion.article>
  );
}
