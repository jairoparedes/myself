"use client";

import { Cog, Settings } from "lucide-react";

export default function FooterBar() {
  return (
    <footer className="min-h-11 border-t border-panel-border bg-[#0a0a0b]/85 backdrop-blur-sm px-4 py-2 flex items-center justify-between gap-3 text-[0.58rem] font-mono tracking-[0.18em] uppercase">
      <div className="flex items-center gap-2 shrink-0">
        <Cog className="w-4 h-4 text-[#a67c00] opacity-80 animate-[spin_12s_linear_infinite]" strokeWidth={1.2} />
        <div className="flex flex-col leading-tight">
          <span className="text-accent-green flex items-center gap-2">
            <span className="status-dot" />
            Canal de Voz: Abierto
          </span>
          <span className="text-text-muted">Omnissiah Escucha</span>
        </div>
      </div>

      <p className="hidden md:block text-text-muted italic text-center max-w-md leading-snug normal-case tracking-normal">
        &ldquo;La tecnología es la oración. El código es el credo.&rdquo;
      </p>

      <div className="flex items-center gap-2 shrink-0">
        <div className="flex flex-col leading-tight text-right">
          <span className="text-text-muted">
            Versión del Dataslate: <span className="text-accent-red-glow">1.0.41K</span>
          </span>
          <span className="text-text-muted">Última Sincronización: 04.MAY.2026 00:00:00</span>
        </div>
        <Cog
          className="w-4 h-4 text-[#a67c00] opacity-80 animate-[spin_14s_linear_infinite_reverse]"
          strokeWidth={1.2}
          aria-hidden
        />
        <button
          type="button"
          className="w-7 h-7 flex items-center justify-center border border-panel-border rounded-sm text-text-muted hover:text-accent-red-glow hover:border-accent-red/50 transition shrink-0"
          aria-label="Configuración"
        >
          <Settings className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </footer>
  );
}
