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
  { icon: User, label: "PERFIL", slug: "Perfil", active: true },
  { icon: Crosshair, label: "MISIONES", slug: "Misiones" },
  { icon: Database, label: "ARSENAL", slug: "Arsenal" },
  { icon: Archive, label: "DATOS SAGRADOS", slug: "Datos Sagrados" },
  { icon: FlaskConical, label: "LABORATORIO", slug: "Laboratorio" },
  { icon: Microscope, label: "ARCHIVOS", slug: "Archivos" },
  { icon: Mail, label: "CONTACTO", slug: "Contacto" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-[278px] shrink-0 border-r border-panel-border bg-[#0a0a0b]/88 backdrop-blur-sm">
      {/* HEADER NOMBRE */}
      <div className="px-6 pt-6 pb-5 border-b border-panel-border">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display font-black text-[1.65rem] sm:text-3xl tracking-[0.2em] text-text-primary">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-1 text-[0.62rem] font-mono tracking-[0.2em] uppercase text-text-muted">
            {profile.rank.toUpperCase()}
          </p>
          <p className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-accent-red-glow">
            TECNO-ADEPTO
          </p>
        </motion.div>
      </div>

      {/* NAV MENU */}
      <nav className="px-4 py-4 flex flex-col gap-1.5 border-b border-panel-border">
        {NAV.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.slug}
              type="button"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i }}
              title={item.slug}
              className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-sm border text-left transition-all ${
                item.active
                  ? "border-accent-red/60 bg-accent-red/15 text-accent-red-glow shadow-glow-red"
                  : "border-transparent text-text-muted hover:text-text-primary hover:border-panel-border hover:bg-[#121214]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
              <span className="text-[0.65rem] font-mono tracking-[0.18em] uppercase flex-1 leading-tight">
                &gt; {item.label}
              </span>
              {item.active && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-accent-red-glow rounded-full" />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* ESTADO DEL ADEPTO */}
      <div className="px-5 py-4 border-b border-panel-border">
        <h3 className="text-[0.6rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow mb-3.5">
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
      <div className="px-5 py-4 border-b border-panel-border">
        <h3 className="text-[0.6rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow mb-2.5">
          Credo del Tecno-Adepto
        </h3>
        <p className="text-[0.68rem] font-mono italic text-text-primary/90 leading-relaxed pl-0.5">
          &ldquo;No buscamos la verdad por fe, sino por datos.
          <br />
          No tememos a la máquina, la comprendemos.&rdquo;
        </p>
      </div>

      {/* UBICACIÓN + mapa Tierra */}
      <div className="px-5 py-5 mt-auto pb-6">
        <h3 className="text-[0.6rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow mb-2.5">
          Ubicación Actual
        </h3>
        <p className="text-[0.7rem] font-mono text-text-primary leading-snug">
          {profile.location.sector}
        </p>
        <p className="text-[0.7rem] font-mono text-text-primary leading-snug">
          {profile.location.place}
        </p>
        <p className="mt-1 text-[0.58rem] font-mono text-text-muted leading-snug">
          Coordenadas: {profile.location.coords}
        </p>
        <div className="mt-4 flex justify-center">
          <EarthGlobe />
        </div>
      </div>
    </aside>
  );
}

function EarthGlobe() {
  return (
    <div
      className="relative w-[108px] h-[108px] rounded-full border-2 border-[#5a3d20] bg-[#080a0c] shadow-[inset_0_0_20px_rgba(0,0,0,0.9),0_0_12px_rgba(201,26,26,0.15)] overflow-hidden"
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-92">
        <defs>
          <radialGradient id="eglobe" cx="0.38" cy="0.32" r="0.65">
            <stop offset="0%" stopColor="#1a2838" />
            <stop offset="45%" stopColor="#0d1520" />
            <stop offset="100%" stopColor="#020406" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#eglobe)" stroke="#3a2818" strokeWidth="0.8" />
        {[22, 34, 50, 66, 78].map((x) => (
          <ellipse
            key={x}
            cx="50"
            cy="50"
            rx={Math.abs(50 - x) * 0.92 + 8}
            ry="46"
            fill="none"
            stroke="rgba(0,255,159,0.14)"
            strokeWidth="0.4"
          />
        ))}
        <line x1="50" y1="4" x2="50" y2="96" stroke="rgba(0,255,159,0.16)" strokeWidth="0.5" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(0,255,159,0.12)" strokeWidth="0.45" />
        <path
          d="M28 38 Q40 32 52 38 T72 42 Q78 50 70 58 Q58 68 48 62 Q38 55 32 48 Z"
          fill="rgba(90,120,80,0.38)"
          stroke="rgba(0,255,159,0.22)"
          strokeWidth="0.45"
        />
        <circle cx="32" cy="48" r="2.2" fill="#c91a1a">
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
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
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[0.62rem] font-mono tracking-[0.1em] uppercase text-text-muted">
          {label}
        </span>
        <span
          className={`text-[0.62rem] font-mono ${
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
