"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import SteampunkCorner from "./SteampunkCorner";
import EdgeRivets from "./EdgeRivets";

interface TechPanelProps {
  children: ReactNode;
  title?: string;
  badge?: string;
  className?: string;
  delay?: number;
  withBrackets?: boolean;
  centerTitle?: boolean;
  bodyClassName?: string;
  cornerSize?: number;
  cornerVariant?: "ornate" | "simple";
}

export default function TechPanel({
  children,
  title,
  badge,
  className = "",
  delay = 0,
  withBrackets = true,
  centerTitle = false,
  bodyClassName = "",
  cornerSize = 42,
  cornerVariant = "ornate",
}: TechPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={`tech-panel steampunk-frame ${className}`}
    >
      {withBrackets && (
        <>
          <EdgeRivets count={2} />
          <SteampunkCorner position="tl" size={cornerSize} variant={cornerVariant} />
          <SteampunkCorner position="tr" size={cornerSize} variant={cornerVariant} />
          <SteampunkCorner position="bl" size={cornerSize} variant={cornerVariant} />
          <SteampunkCorner position="br" size={cornerSize} variant={cornerVariant} />
        </>
      )}

      {(title || badge) && (
        <div
          className={`tech-panel__header ${
            centerTitle ? "!justify-center" : ""
          }`}
        >
          {centerTitle && <Ornament side="left" />}
          {title && (
            <span
              className={`${centerTitle ? "text-center tracking-[0.22em] px-2" : ""}`}
            >
              {title}
            </span>
          )}
          {centerTitle && <Ornament side="right" />}
          {!centerTitle && badge && (
            <span className="tech-panel__badge">{badge}</span>
          )}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </motion.section>
  );
}

function Ornament({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 64 14"
      className={`h-3 w-16 text-accent-red-glow flex-shrink-0 ${
        side === "right" ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      <defs>
        <linearGradient id={`grad-${side}`} x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <line x1="0" y1="7" x2="44" y2="7" stroke={`url(#grad-${side})`} strokeWidth="1" />
      <line x1="6" y1="10" x2="44" y2="10" stroke={`url(#grad-${side})`} strokeWidth="0.6" />
      {/* cráneo estilizado */}
      <g fill="currentColor" filter="drop-shadow(0 0 2px currentColor)">
        <ellipse cx="54" cy="7" rx="4.5" ry="4" />
        <rect x="51" y="9" width="6" height="3" />
      </g>
      <circle cx="52.5" cy="7" r="0.9" fill="#0a0a0b" />
      <circle cx="55.5" cy="7" r="0.9" fill="#0a0a0b" />
      <line x1="51" y1="11" x2="57" y2="11" stroke="#0a0a0b" strokeWidth="0.5" />
      <line x1="53" y1="9.5" x2="53" y2="12" stroke="#0a0a0b" strokeWidth="0.4" />
      <line x1="55" y1="9.5" x2="55" y2="12" stroke="#0a0a0b" strokeWidth="0.4" />
      <circle cx="62" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}
