"use client";

import { motion } from "framer-motion";
import {
  Archive,
  Crosshair,
  Database,
  FlaskConical,
  Mail,
  Microscope,
  User,
} from "lucide-react";
import { profile } from "@/data/profile";
import { totalXP, maxXP } from "@/data/skills";

const NAV = [
  { icon: User, label: "Perfil", active: true },
  { icon: Crosshair, label: "Misiones" },
  { icon: Database, label: "Arsenal" },
  { icon: Archive, label: "Datos Sagrados" },
  { icon: FlaskConical, label: "Laboratorio" },
  { icon: Microscope, label: "Archivos" },
  { icon: Mail, label: "Contacto" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 border-r border-panel-border bg-[#0a0a0b]/80 backdrop-blur-sm">
      {/* HEADER NOMBRE */}
      <div className="px-5 pt-5 pb-4 border-b border-panel-border">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display font-black text-3xl tracking-[0.18em] text-text-primary">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-1 text-[0.62rem] font-mono tracking-[0.2em] uppercase text-text-muted">
            {profile.rank}
          </p>
          <p className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-accent-red-glow">
            Tecno-Adepto
          </p>
        </motion.div>
      </div>

      {/* NAV MENU */}
      <nav className="px-3 py-3 flex flex-col gap-1 border-b border-panel-border">
        {NAV.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i }}
              className={`relative flex items-center gap-3 px-3 py-2 rounded-sm border text-left transition-all ${
                item.active
                  ? "border-accent-red/60 bg-accent-red/15 text-accent-red-glow shadow-glow-red"
                  : "border-transparent text-text-muted hover:text-text-primary hover:border-panel-border hover:bg-[#121214]"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[0.7rem] font-mono tracking-[0.22em] uppercase flex-1">
                &gt; {item.label}
              </span>
              {item.active && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-accent-red-glow" />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* ESTADO DEL ADEPTO */}
      <div className="px-4 py-3 border-b border-panel-border">
        <h3 className="text-[0.62rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow mb-3">
          Estado del Adepto
        </h3>
        <StatusRow label="Salud" value="100%" pct={100} variant="green" />
        <StatusRow label="Energía" value="88%" pct={88} variant="green" />
        <StatusRow
          label="Experiencia"
          value={`${totalXP} / ${maxXP}`}
          pct={(totalXP / maxXP) * 100}
          variant="red"
        />
        <StatusRow label="Nivel de Herejía" value="0.3%" pct={0.3} variant="red" />
      </div>

      {/* CREDO */}
      <div className="px-4 py-3 border-b border-panel-border">
        <h3 className="text-[0.62rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow mb-2">
          Credo del Tecno-Adepto
        </h3>
        <p className="text-[0.7rem] font-mono italic text-text-primary/90 leading-relaxed">
          &ldquo;No buscamos la verdad por fe, sino por datos.
          <br />
          No tememos a la máquina, la comprendemos.&rdquo;
        </p>
      </div>

      {/* UBICACIÓN */}
      <div className="px-4 py-3 mt-auto">
        <h3 className="text-[0.62rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow mb-2">
          Ubicación Actual
        </h3>
        <p className="text-[0.72rem] font-mono text-text-primary leading-snug">
          {profile.location.sector}
        </p>
        <p className="text-[0.72rem] font-mono text-text-primary leading-snug">
          {profile.location.place}
        </p>
        <p className="mt-1 text-[0.6rem] font-mono text-text-muted leading-snug">
          Coordenadas: {profile.location.coords}
        </p>
      </div>
    </aside>
  );
}

function StatusRow({
  label,
  value,
  pct,
  variant,
}: {
  label: string;
  value: string;
  pct: number;
  variant: "red" | "green";
}) {
  return (
    <div className="mb-2.5 last:mb-0">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[0.65rem] font-mono tracking-[0.12em] uppercase text-text-muted">
          {label}
        </span>
        <span
          className={`text-[0.65rem] font-mono ${
            variant === "green" ? "text-accent-green" : "text-accent-red-glow"
          }`}
        >
          {value}
        </span>
      </div>
      <div className={`segmented-bar ${variant === "green" ? "segmented-bar--green" : ""}`}>
        <motion.div
          className="segmented-bar__fill"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(pct, 100)}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
