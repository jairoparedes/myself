"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SteampunkCorner from "@/components/ui/SteampunkCorner";

export default function ProfileCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 h-full">
      {/* IMAGEN PERSONAJE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full sm:w-[180px] aspect-[3/4] sm:aspect-auto sm:h-auto shrink-0 steampunk-frame"
      >
        <SteampunkCorner position="tl" size={28} />
        <SteampunkCorner position="tr" size={28} />
        <SteampunkCorner position="bl" size={28} />
        <SteampunkCorner position="br" size={28} />
        <div className="absolute inset-0 border border-panel-border rounded-sm overflow-hidden parchment-tint">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-800 via-stone-900 to-black" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(201,26,26,0.25), transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(0,0,0,0.9), transparent 70%)",
          }}
        />
        {/* SILUETA TECNO-ADEPTO */}
        <svg
          viewBox="0 0 120 160"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="hoodGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5b3a2a" />
              <stop offset="60%" stopColor="#2a1c14" />
              <stop offset="100%" stopColor="#0a0a0b" />
            </linearGradient>
            <radialGradient id="faceGrad" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#000" />
            </radialGradient>
          </defs>
          {/* hood */}
          <path
            d="M60 22 C28 22 18 60 22 100 C24 130 36 150 60 158 C84 150 96 130 98 100 C102 60 92 22 60 22 Z"
            fill="url(#hoodGrad)"
          />
          {/* face shadow */}
          <ellipse cx="60" cy="62" rx="22" ry="26" fill="url(#faceGrad)" />
          {/* red eye glows */}
          <circle cx="52" cy="62" r="2.4" fill="#ff3030" opacity="0.95">
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="68" cy="62" r="2.4" fill="#ff3030" opacity="0.95">
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
          {/* mouth grill */}
          <rect x="50" y="72" width="20" height="6" fill="#0a0a0b" stroke="#3a2a20" />
          <line x1="54" y1="72" x2="54" y2="78" stroke="#1a1a1a" />
          <line x1="58" y1="72" x2="58" y2="78" stroke="#1a1a1a" />
          <line x1="62" y1="72" x2="62" y2="78" stroke="#1a1a1a" />
          <line x1="66" y1="72" x2="66" y2="78" stroke="#1a1a1a" />
          {/* shoulders */}
          <path
            d="M14 130 C30 110 90 110 106 130 L106 160 L14 160 Z"
            fill="#2a1c14"
            stroke="#3a2a20"
          />
        </svg>
        {/* scanlines */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)",
          }}
        />
        </div>
      </motion.div>

      {/* DATOS */}
      <div className="flex-1 min-w-0 flex flex-col">
        <dl className="text-[0.78rem] font-mono space-y-2.5">
          <Field label="Nombre" value={profile.name} />
          <Field label="Rango" value={`${profile.rank}\n${profile.rankSub}`} />
          <Field label="Especialidad" value={profile.specialization} />
          <Field
            label="Lealtad"
            value={profile.loyalty}
            suffix={
              <span className="text-accent-red-glow text-base ml-1">⚙</span>
            }
          />
          <Field label="Motivación" value={profile.motivation} />
        </dl>

        {/* COMANDO DEL DIA */}
        <div className="mt-auto pt-4">
          <div className="border border-panel-border rounded-sm bg-[#0a0a0b]/70 p-3 relative">
            <div className="absolute -top-2 left-3 px-2 bg-[#0a0a0b] text-[0.6rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow">
              &gt; Comando del Día
            </div>
            <div className="text-[0.74rem] font-mono italic text-text-primary leading-relaxed space-y-0.5 mt-1">
              {profile.commandOfTheDay.map((line, i) => (
                <p key={i}>&ldquo;{line}&rdquo;</p>
              ))}
            </div>
            <div className="text-right mt-1.5 text-accent-red-glow text-sm">⚜</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <dt className="w-24 shrink-0 text-text-muted tracking-[0.16em] uppercase text-[0.62rem] pt-0.5">
        {label}:
      </dt>
      <dd className="text-text-primary whitespace-pre-line leading-snug flex-1">
        {value}
        {suffix}
      </dd>
    </div>
  );
}
