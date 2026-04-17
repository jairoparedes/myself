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
}

export default function TechPanel({
  children,
  title,
  badge,
  className = "",
  delay = 0,
  withBrackets = false,
}: TechPanelProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={`tech-panel ${withBrackets ? "corner-brackets" : ""} ${className}`}
    >
      {(title || badge) && (
        <div className="tech-panel__header">
          <div className="tech-panel__title">
            {title && <span>{title}</span>}
          </div>
          {badge && <span className="tech-panel__badge">{badge}</span>}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
