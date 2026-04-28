"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechPanelProps {
  children: ReactNode;
  title?: string;
  badge?: string;
  className?: string;
  delay?: number;
  withBrackets?: boolean;
  centerTitle?: boolean;
  bodyClassName?: string;
}

export default function TechPanel({
  children,
  title,
  badge,
  className = "",
  delay = 0,
  withBrackets = false,
  centerTitle = false,
  bodyClassName = "",
}: TechPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={`tech-panel ${withBrackets ? "corner-brackets" : ""} ${className}`}
    >
      {(title || badge) && (
        <div
          className={`tech-panel__header ${
            centerTitle ? "!justify-center !border-b-0 !pb-1 !mb-2" : ""
          }`}
        >
          {centerTitle && (
            <span className="text-accent-red-glow text-base">⚙</span>
          )}
          {title && (
            <span
              className={`${centerTitle ? "text-center tracking-[0.22em]" : ""}`}
            >
              {title}
            </span>
          )}
          {centerTitle && (
            <span className="text-accent-red-glow text-base">⚙</span>
          )}
          {!centerTitle && badge && (
            <span className="tech-panel__badge">{badge}</span>
          )}
        </div>
      )}
      <div className={`relative z-10 ${bodyClassName}`}>{children}</div>
    </motion.section>
  );
}
