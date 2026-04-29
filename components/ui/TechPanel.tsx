"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import SteampunkCorner, { type CornerVariant } from "./SteampunkCorner";
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
  variant?: CornerVariant;
  rivetCount?: number;
}

const FRAME_CLASS: Record<CornerVariant, string> = {
  "tech-priest": "frame-tech-priest",
  imperial: "frame-imperial",
  "blood-angels": "frame-blood-angels",
  ultramarines: "frame-ultramarines",
  necron: "frame-necron",
};

export default function TechPanel({
  children,
  title,
  badge,
  className = "",
  delay = 0,
  withBrackets = true,
  centerTitle = false,
  bodyClassName = "",
  cornerSize = 46,
  variant = "tech-priest",
  rivetCount = 2,
}: TechPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={`tech-panel steampunk-frame ${FRAME_CLASS[variant]} ${className}`}
    >
      {withBrackets && (
        <>
          <EdgeRivets count={rivetCount} variant={variant} />
          <SteampunkCorner position="tl" size={cornerSize} variant={variant} />
          <SteampunkCorner position="tr" size={cornerSize} variant={variant} />
          <SteampunkCorner position="bl" size={cornerSize} variant={variant} />
          <SteampunkCorner position="br" size={cornerSize} variant={variant} />
        </>
      )}

      {(title || badge) && (
        <div
          className={`tech-panel__header ${
            centerTitle ? "!justify-center" : ""
          }`}
        >
          {centerTitle && <Ornament side="left" variant={variant} />}
          {title && (
            <span
              className={`${centerTitle ? "text-center tracking-[0.22em] px-2" : ""}`}
            >
              {title}
            </span>
          )}
          {centerTitle && <Ornament side="right" variant={variant} />}
          {!centerTitle && badge && (
            <span className="tech-panel__badge">{badge}</span>
          )}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </motion.section>
  );
}

const ORNAMENT_COLOR: Record<CornerVariant, string> = {
  "tech-priest": "#7eff5f",
  imperial: "#d4a96a",
  "blood-angels": "#ff5e5e",
  ultramarines: "#5a8eff",
  necron: "#1aff7a",
};

function Ornament({
  side,
  variant,
}: {
  side: "left" | "right";
  variant: CornerVariant;
}) {
  const color = ORNAMENT_COLOR[variant];
  return (
    <svg
      viewBox="0 0 64 14"
      className={`h-3 w-16 flex-shrink-0 ${side === "right" ? "rotate-180" : ""}`}
      style={{ color }}
      aria-hidden
    >
      <defs>
        <linearGradient id={`orn-${side}-${variant}`} x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="7"
        x2="44"
        y2="7"
        stroke={`url(#orn-${side}-${variant})`}
        strokeWidth="1"
      />
      <line
        x1="6"
        y1="10"
        x2="44"
        y2="10"
        stroke={`url(#orn-${side}-${variant})`}
        strokeWidth="0.6"
      />
      {variant === "tech-priest" ? (
        <>
          {/* engranaje */}
          <g
            fill="currentColor"
            transform="translate(54 7)"
            filter="drop-shadow(0 0 2px currentColor)"
          >
            <circle r="3.4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <rect
                key={a}
                x="-0.7"
                y="-4.6"
                width="1.4"
                height="1.6"
                transform={`rotate(${a})`}
              />
            ))}
            <circle r="1.2" fill="#0a0a0b" />
          </g>
          <circle cx="62" cy="7" r="1" fill="currentColor" />
        </>
      ) : (
        <>
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
        </>
      )}
    </svg>
  );
}
