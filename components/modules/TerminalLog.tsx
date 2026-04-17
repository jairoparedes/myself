"use client";

import { useEffect, useState } from "react";

const BOOT_LINES: { text: string; level: "OK" | "WARN" | "ERR" | "INFO" }[] = [
  { text: "Conectando al dataslate...", level: "OK" },
  { text: "Verificando protocolos sagrados del Omnissiah...", level: "OK" },
  { text: "Autenticando huella binárica...", level: "OK" },
  { text: "Machine Spirit: STABLE", level: "INFO" },
  { text: "Cargando arsenal tecno-adepto...", level: "OK" },
  { text: "Sincronizando noosphere link...", level: "WARN" },
  { text: "Purificando cache heretica...", level: "OK" },
  { text: "Acceso concedido. Ave Omnissiah.", level: "OK" },
];

const LEVEL_COLORS: Record<string, string> = {
  OK: "text-accent-green",
  INFO: "text-sky-300",
  WARN: "text-yellow-300",
  ERR: "text-red-400",
};

export default function TerminalLog() {
  const [shown, setShown] = useState<{ text: string; level: string; typed: string }[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (let i = 0; i < BOOT_LINES.length; i++) {
        if (cancelled) return;
        const line = BOOT_LINES[i];
        setShown((p) => [...p, { ...line, typed: "" }]);
        const txt = line.text;
        for (let c = 1; c <= txt.length; c++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, 14));
          setShown((p) => {
            const copy = [...p];
            copy[i] = { ...copy[i], typed: txt.slice(0, c) };
            return copy;
          });
        }
        await new Promise((r) => setTimeout(r, 180));
      }
      if (!cancelled) setDone(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="terminal text-[0.78rem] leading-relaxed min-h-[220px]">
      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-600/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[0.62rem] tracking-[0.25em] uppercase text-text-muted">
          vox-cast :: terminal-01
        </span>
      </div>

      {shown.map((l, i) => (
        <div key={i} className="font-mono whitespace-pre-wrap break-words">
          <span className={LEVEL_COLORS[l.level]}>[{l.level.padEnd(4, " ")}]</span>{" "}
          <span className="text-accent-green">{l.typed}</span>
          {i === shown.length - 1 && !done && <span className="terminal-cursor" />}
        </div>
      ))}

      {done && (
        <div className="font-mono mt-1">
          <span className="text-accent-green">root@omnissiah</span>
          <span className="text-text-muted">:</span>
          <span className="text-sky-400">~</span>
          <span className="text-text-muted">$ </span>
          <span className="terminal-cursor" />
        </div>
      )}
    </div>
  );
}
