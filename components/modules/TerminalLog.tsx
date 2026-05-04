"use client";

import { useEffect, useState } from "react";

const LINES: { ts: string; text: string }[] = [
  { ts: "00:00:01", text: "Conexión al Dataslate establecida... [OK]" },
  { ts: "00:00:02", text: "Cargando protocolos de usuario... [OK]" },
  { ts: "00:00:03", text: "Verificando lealtad al Omnissiah... [OK]" },
  { ts: "00:00:04", text: "Sin corrupción detectada." },
  { ts: "00:00:05", text: "Accediendo a archivos del Adepto Jairo... [OK]" },
];

export default function TerminalLog() {
  const [shown, setShown] = useState<number>(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(i);
      if (i >= LINES.length) clearInterval(id);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="terminal text-[0.72rem] leading-relaxed min-h-[192px] font-mono">
      {LINES.slice(0, shown).map((l, i) => (
        <div key={i} className="whitespace-pre-wrap break-words">
          <span className="text-text-muted">[{l.ts}]</span>{" "}
          <span className="text-accent-green">{l.text}</span>
        </div>
      ))}

      {shown >= LINES.length && (
        <div className="mt-3 italic text-accent-red-glow">
          &ldquo;El Omnissiah provee. El código obedece.&rdquo;
        </div>
      )}

      {shown < LINES.length && <span className="terminal-cursor" />}
    </div>
  );
}
