"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Lock, Zap } from "lucide-react";
import { Mission } from "@/data/missions";
import { useGameStore } from "@/store/useGameStore";

interface MissionCardProps {
  mission: Mission;
  index?: number;
}

export default function MissionCard({ mission, index = 0 }: MissionCardProps) {
  const { completedMissions, completeMission } = useGameStore();
  const isClaimed = completedMissions.includes(mission.id);
  const isLocked = mission.status === "locked";

  const statusMeta =
    mission.status === "completed"
      ? {
          label: "COMPLETADA",
          className: "status-pill--ok",
          icon: <CheckCircle2 className="w-3 h-3" strokeWidth={1.5} />,
        }
      : mission.status === "in-progress"
      ? {
          label: "EN PROGRESO",
          className: "status-pill--wip",
          icon: <Loader2 className="w-3 h-3 animate-spin" strokeWidth={1.5} />,
        }
      : {
          label: "BLOQUEADA",
          className: "status-pill--lock",
          icon: <Lock className="w-3 h-3" strokeWidth={1.5} />,
        };

  const canClaim = mission.status === "completed" && !isClaimed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`tech-panel corner-brackets h-full flex flex-col ${
        isLocked ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-display font-bold text-base tracking-wider text-text-primary leading-snug">
          {mission.title}
        </h4>
        <span className={`status-pill ${statusMeta.className} shrink-0`}>
          {statusMeta.icon}
          {statusMeta.label}
        </span>
      </div>

      {mission.codex && (
        <div className="text-[0.6rem] font-mono text-text-muted tracking-[0.22em] uppercase mb-3">
          CODEX :: {mission.codex}
        </div>
      )}

      <p className="text-[0.82rem] font-mono text-text-primary/90 leading-relaxed flex-1">
        {mission.description}
      </p>

      {mission.tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {mission.tags.map((t) => (
            <span
              key={t}
              className="text-[0.62rem] font-mono text-text-muted border border-panel-border px-1.5 py-0.5 rounded-sm"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-panel-border/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-accent-green">
          <Zap className="w-3.5 h-3.5" strokeWidth={1.8} />
          <span className="font-mono text-sm font-bold">+{mission.xp} XP</span>
        </div>

        {canClaim && (
          <button
            onClick={() => completeMission(mission.id, mission.xp)}
            className="group text-[0.65rem] font-mono tracking-[0.2em] uppercase text-accent-red-glow border border-accent-red/50 hover:border-accent-red hover:bg-accent-red/10 px-2.5 py-1 rounded-sm transition-all hover:shadow-glow-red"
          >
            RECLAMAR
          </button>
        )}

        {isClaimed && (
          <span className="text-[0.65rem] font-mono tracking-[0.2em] uppercase text-accent-green">
            XP RECLAMADO
          </span>
        )}

        {isLocked && (
          <span className="text-[0.65rem] font-mono tracking-[0.2em] uppercase text-accent-red">
            ACCESO DENEGADO
          </span>
        )}
      </div>
    </motion.article>
  );
}
