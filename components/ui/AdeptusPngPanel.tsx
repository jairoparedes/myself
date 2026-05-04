"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AdeptusPngPanelProps {
  children: ReactNode;
  title?: string;
  className?: string;
  bodyClassName?: string;
  delay?: number;
  centerTitle?: boolean;
  /** Marco más estrecho (cards secundarias) */
  compact?: boolean;
}

/**
 * Panel con marco 9-slice PNG (carpeta public/assets/adeptus_mechanicus).
 * Estilos: styles/adeptus-png-frame.css
 */
export default function AdeptusPngPanel({
  children,
  title,
  className = "",
  bodyClassName = "",
  delay = 0,
  centerTitle = false,
  compact = false,
}: AdeptusPngPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={`frame adeptus-png-panel ${compact ? "adeptus-png-panel--compact" : ""} ${className}`}
    >
      <div className="frame__layer frame__layer--border" aria-hidden="true" />
      <div className="frame__layer frame__layer--overlay" aria-hidden="true" />
      <div className="frame__content">
        {title &&
          (centerTitle ? (
            <div className="tech-panel__header adeptus-png-panel__header--centered">
              <HeaderFlourish side="left" />
              <span>{title}</span>
              <HeaderFlourish side="right" />
            </div>
          ) : (
            <div className="tech-panel__header">{title}</div>
          ))}
        <div className={bodyClassName}>{children}</div>
      </div>
    </motion.section>
  );
}

function HeaderFlourish({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 56 16"
      className={`h-3.5 w-[4rem] shrink-0 text-[#a67c00] opacity-90 ${
        side === "right" ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`hfl-${side}`} x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="8"
        x2="40"
        y2="8"
        stroke={`url(#hfl-${side})`}
        strokeWidth="1.2"
      />
      <path
        d="M 44 3 L 52 8 L 44 13 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="52" cy="8" r="2.2" fill="#2a0f0f" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}
