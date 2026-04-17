"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Archive,
  Crosshair,
  Database,
  Home,
  Radio,
  Settings,
  Skull,
  Users,
} from "lucide-react";

const NAV = [
  { icon: Home, label: "Inicio", active: true },
  { icon: Crosshair, label: "Misiones" },
  { icon: Database, label: "Arsenal" },
  { icon: Activity, label: "Diagnóstico" },
  { icon: Archive, label: "Archivum" },
  { icon: Radio, label: "Vox-Net" },
  { icon: Users, label: "Cofradía" },
  { icon: Settings, label: "Ritos" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-20 shrink-0 border-r border-panel-border bg-[#0a0a0b]/80 backdrop-blur-sm">
      <div className="h-16 flex items-center justify-center border-b border-panel-border">
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-lg bg-accent-red/40 rounded-full" />
          <Skull
            className="w-7 h-7 text-accent-red-glow relative animate-flicker"
            strokeWidth={1.5}
          />
        </motion.div>
      </div>

      <nav className="flex-1 py-4 flex flex-col items-center gap-1">
        {NAV.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
              className={`relative group w-14 h-14 flex flex-col items-center justify-center rounded-sm border transition-all ${
                item.active
                  ? "border-accent-red/60 bg-accent-red/10 text-accent-red-glow shadow-glow-red"
                  : "border-transparent text-text-muted hover:text-accent-red-glow hover:border-panel-border hover:bg-[#121214]"
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5 mb-0.5" strokeWidth={1.5} />
              <span className="text-[0.55rem] font-mono tracking-[0.15em] uppercase">
                {item.label}
              </span>
              {item.active && (
                <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-accent-red-glow" />
              )}
            </motion.button>
          );
        })}
      </nav>

      <div className="p-2 border-t border-panel-border">
        <div className="w-full border border-panel-border bg-[#121214] p-2 text-center">
          <div className="text-[0.55rem] font-mono text-text-muted tracking-[0.2em]">
            v1.40K
          </div>
          <div className="text-[0.55rem] font-mono text-accent-red tracking-[0.2em] mt-0.5">
            M41.999
          </div>
        </div>
      </div>
    </aside>
  );
}
