"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [text, setText] = useState("");
  const full = ">> INICIANDO DATOS DEL TECNO-ADEPTO...";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="h-12 border-b border-panel-border bg-[#0a0a0b]/80 backdrop-blur-sm px-5 flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-accent-red-glow font-display tracking-[0.2em] text-base">⚙</span>
        <span className="text-[0.72rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow truncate">
          {text}
          <span className="terminal-cursor align-middle" />
        </span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="text-[0.65rem] font-mono tracking-[0.22em] uppercase text-text-muted">
          Estatus:
        </span>
        <span className="text-[0.7rem] font-mono tracking-[0.2em] uppercase text-accent-red-glow text-glow-red">
          Leal al Emperador
        </span>
        <span className="font-display text-accent-red-glow text-base">⚜</span>
      </div>
    </header>
  );
}
