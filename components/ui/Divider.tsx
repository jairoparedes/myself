"use client";

import { Skull } from "lucide-react";

interface DividerProps {
  label?: string;
  icon?: boolean;
}

export default function Divider({ label, icon = true }: DividerProps) {
  return (
    <div className="skull-divider my-6">
      {label && (
        <>
          {icon && <Skull className="w-3.5 h-3.5 text-accent-red-glow" strokeWidth={1.5} />}
          <span>{label}</span>
        </>
      )}
    </div>
  );
}
