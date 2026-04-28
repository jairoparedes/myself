"use client";

import { Settings } from "lucide-react";

export default function FooterBar() {
  return (
    <footer className="h-11 border-t border-panel-border bg-[#0a0a0b]/85 backdrop-blur-sm px-4 flex items-center justify-between text-[0.6rem] font-mono tracking-[0.22em] uppercase">
      <div className="flex flex-col leading-tight">
        <span className="text-accent-green flex items-center gap-2">
          <span className="status-dot" />
          Canal de Voz: Abierto
        </span>
        <span className="text-text-muted">Omnissiah Escucha</span>
      </div>

      <p className="hidden md:block text-text-muted italic">
        &ldquo;La tecnología es la oración. El código es el credo.&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="flex flex-col leading-tight text-right">
          <span className="text-text-muted">
            Versión del Dataslate: <span className="text-accent-red-glow">1.0.41K</span>
          </span>
          <span className="text-text-muted">Última Sincronización: 24.MAY.2024 00:00:00</span>
        </div>
        <button
          className="w-7 h-7 flex items-center justify-center border border-panel-border rounded-sm text-text-muted hover:text-accent-red-glow hover:border-accent-red/50 transition"
          aria-label="Configuración"
        >
          <Settings className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </footer>
  );
}
