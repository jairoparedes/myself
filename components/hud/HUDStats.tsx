"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu } from "lucide-react";
import { useGameStore, XP_PER_LEVEL_CONST } from "@/store/useGameStore";

export default function HUDStats() {
  const { xp, level } = useGameStore();
  const xpInLevel = xp % XP_PER_LEVEL_CONST;
  const progress = (xpInLevel / XP_PER_LEVEL_CONST) * 100;

  return (
    <div className="grid grid-cols-3 gap-3">
      <StatCell
        icon={<Shield className="w-4 h-4" strokeWidth={1.5} />}
        label="NIVEL"
        value={level.toString().padStart(2, "0")}
        accent="red"
      />
      <StatCell
        icon={<Zap className="w-4 h-4" strokeWidth={1.5} />}
        label="XP TOTAL"
        value={xp.toLocaleString()}
        accent="green"
      />
      <StatCell
        icon={<Cpu className="w-4 h-4" strokeWidth={1.5} />}
        label="PROGRESO"
        value={`${progress.toFixed(0)}%`}
        accent="red"
      />

      <div className="col-span-3">
        <div className="flex justify-between items-baseline mb-1">
          <span className="text-[0.65rem] font-mono text-text-muted tracking-[0.2em] uppercase">
            Avance al Nivel {level + 1}
          </span>
          <span className="text-[0.7rem] font-mono text-accent-green">
            {xpInLevel} / {XP_PER_LEVEL_CONST}
          </span>
        </div>
        <div className="hud-bar hud-bar--green">
          <motion.div
            className="hud-bar__fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

function StatCell({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "red" | "green";
}) {
  const color = accent === "red" ? "text-glow-red" : "text-glow-green";
  return (
    <div className="border border-panel-border bg-[#0a0a0b] p-2.5 relative">
      <div className="flex items-center gap-1.5 text-text-muted mb-1">
        {icon}
        <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase">{label}</span>
      </div>
      <div className={`font-display font-bold text-lg ${color}`}>{value}</div>
    </div>
  );
}
