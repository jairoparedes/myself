"use client";

import { useId } from "react";

export type CornerVariant =
  | "tech-priest"
  | "imperial"
  | "blood-angels"
  | "ultramarines"
  | "necron";

type Position = "tl" | "tr" | "bl" | "br";

interface SteampunkCornerProps {
  position: Position;
  size?: number;
  variant?: CornerVariant;
}

const ROTATION: Record<Position, number> = {
  tl: 0,
  tr: 90,
  br: 180,
  bl: 270,
};

const POSITION_STYLE: Record<Position, React.CSSProperties> = {
  tl: { top: -3, left: -3 },
  tr: { top: -3, right: -3 },
  bl: { bottom: -3, left: -3 },
  br: { bottom: -3, right: -3 },
};

export default function SteampunkCorner({
  position,
  size = 46,
  variant = "tech-priest",
}: SteampunkCornerProps) {
  const rot = ROTATION[position];
  return (
    <span
      aria-hidden
      className="absolute pointer-events-none z-[3]"
      style={{
        ...POSITION_STYLE[position],
        width: size,
        height: size,
        transform: `rotate(${rot}deg)`,
        transformOrigin: "center",
      }}
    >
      {variant === "tech-priest" && <TechPriestCorner />}
      {variant === "imperial" && <ImperialCorner />}
      {variant === "blood-angels" && <BloodAngelsCorner />}
      {variant === "ultramarines" && <UltramarinesCorner />}
      {variant === "necron" && <NecronCorner />}
    </span>
  );
}

/* ============================================================
   TECH-PRIEST :: tubos mecánicos + LED verde + tornillos
   ============================================================ */
function TechPriestCorner() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-iron`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a5e63" />
          <stop offset="50%" stopColor="#2c2e32" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id={`${id}-pipe`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a6e73" />
          <stop offset="40%" stopColor="#3a3e43" />
          <stop offset="100%" stopColor="#15171a" />
        </linearGradient>
        <radialGradient id={`${id}-led`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#d4ffd0" />
          <stop offset="40%" stopColor="#7eff5f" />
          <stop offset="100%" stopColor="#0a3a08" />
        </radialGradient>
        <radialGradient id={`${id}-bolt`} cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#a8acaf" />
          <stop offset="55%" stopColor="#3a3e43" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0.6" dy="0.6" stdDeviation="0.6" floodColor="#000" floodOpacity="0.85" />
        </filter>
        <filter id={`${id}-glow`}>
          <feGaussianBlur stdDeviation="1.4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* tubería superior horizontal */}
      <rect
        x="0"
        y="2"
        width="22"
        height="6"
        fill={`url(#${id}-pipe)`}
        stroke="#0a0a0c"
        strokeWidth="0.3"
        filter={`url(#${id}-shadow)`}
      />
      {/* línea verde sobre el tubo (LED strip) */}
      <line x1="2" y1="5" x2="20" y2="5" stroke="#7eff5f" strokeWidth="0.6" opacity="0.9" />
      {/* uniones en la tubería */}
      <line x1="8" y1="2" x2="8" y2="8" stroke="#0a0a0c" strokeWidth="0.4" />
      <line x1="14" y1="2" x2="14" y2="8" stroke="#0a0a0c" strokeWidth="0.4" />

      {/* tubería lateral vertical */}
      <rect
        x="2"
        y="0"
        width="6"
        height="22"
        fill={`url(#${id}-pipe)`}
        stroke="#0a0a0c"
        strokeWidth="0.3"
        filter={`url(#${id}-shadow)`}
      />
      <line x1="5" y1="2" x2="5" y2="20" stroke="#7eff5f" strokeWidth="0.6" opacity="0.9" />
      <line x1="2" y1="8" x2="8" y2="8" stroke="#0a0a0c" strokeWidth="0.4" />
      <line x1="2" y1="14" x2="8" y2="14" stroke="#0a0a0c" strokeWidth="0.4" />

      {/* placa esquinera principal con bolts */}
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        fill={`url(#${id}-iron)`}
        stroke="#0a0a0c"
        strokeWidth="0.5"
        filter={`url(#${id}-shadow)`}
      />
      {/* tornillos en las 4 esquinas de la placa */}
      <Bolt cx={4} cy={4} idGrad={id} />
      <Bolt cx={12} cy={4} idGrad={id} />
      <Bolt cx={4} cy={12} idGrad={id} />
      <Bolt cx={12} cy={12} idGrad={id} />

      {/* LED verde central */}
      <g filter={`url(#${id}-glow)`}>
        <circle cx="8" cy="8" r="2.2" fill={`url(#${id}-led)`} />
        <circle cx="7.4" cy="7.4" r="0.8" fill="#eaffe3" opacity="0.85" />
      </g>

      {/* canister/cilindro mecánico abajo derecha */}
      <g transform="translate(20 20)" filter={`url(#${id}-shadow)`}>
        <rect x="-4" y="-1" width="14" height="6" fill={`url(#${id}-pipe)`} stroke="#0a0a0c" strokeWidth="0.3" />
        <rect x="-4" y="-1" width="3" height="6" fill={`url(#${id}-iron)`} stroke="#0a0a0c" strokeWidth="0.3" />
        <rect x="7" y="-1" width="3" height="6" fill={`url(#${id}-iron)`} stroke="#0a0a0c" strokeWidth="0.3" />
        <line x1="-4" y1="2" x2="10" y2="2" stroke="#7eff5f" strokeWidth="0.4" opacity="0.85" />
        <Bolt cx={-2} cy={2} idGrad={id} small />
        <Bolt cx={9} cy={2} idGrad={id} small />
      </g>

      {/* segundo cilindro vertical */}
      <g transform="translate(20 20)" filter={`url(#${id}-shadow)`}>
        <rect x="-1" y="-4" width="6" height="14" fill={`url(#${id}-pipe)`} stroke="#0a0a0c" strokeWidth="0.3" />
        <rect x="-1" y="-4" width="6" height="3" fill={`url(#${id}-iron)`} stroke="#0a0a0c" strokeWidth="0.3" />
        <rect x="-1" y="7" width="6" height="3" fill={`url(#${id}-iron)`} stroke="#0a0a0c" strokeWidth="0.3" />
        <line x1="2" y1="-4" x2="2" y2="10" stroke="#7eff5f" strokeWidth="0.4" opacity="0.85" />
      </g>
    </svg>
  );
}

/* ============================================================
   IMPERIAL :: latón + cráneo alado
   ============================================================ */
function ImperialCorner() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-brass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c182" />
          <stop offset="40%" stopColor="#a07b35" />
          <stop offset="100%" stopColor="#1a0f06" />
        </linearGradient>
        <radialGradient id={`${id}-rivet`} cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#f0d39a" />
          <stop offset="55%" stopColor="#8b6f2c" />
          <stop offset="100%" stopColor="#1a0f06" />
        </radialGradient>
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="0.4" dy="0.4" stdDeviation="0.5" floodColor="#000" floodOpacity="0.9" />
        </filter>
      </defs>

      {/* L-bracket grueso */}
      <path
        d="M 1 22 L 1 1 L 22 1 L 22 6 L 6 6 L 6 22 Z"
        fill={`url(#${id}-brass)`}
        stroke="#1a0f06"
        strokeWidth="0.4"
        filter={`url(#${id}-shadow)`}
      />

      {/* filigrana decorativa interna */}
      <path
        d="M 8 22 Q 8 12 18 12 L 22 12"
        stroke={`url(#${id}-brass)`}
        strokeWidth="0.8"
        fill="none"
      />

      {/* cráneo */}
      <g transform="translate(13 13)" filter={`url(#${id}-shadow)`}>
        <ellipse cx="0" cy="-1" rx="4" ry="3.5" fill={`url(#${id}-brass)`} />
        <rect x="-2.5" y="2" width="5" height="3" fill={`url(#${id}-brass)`} />
        <circle cx="-1.4" cy="-1" r="0.9" fill="#0a0703" />
        <circle cx="1.4" cy="-1" r="0.9" fill="#0a0703" />
        <line x1="-2.5" y1="3.5" x2="2.5" y2="3.5" stroke="#0a0703" strokeWidth="0.4" />
      </g>

      {/* alas estilizadas a los lados */}
      <path
        d="M 13 11 Q 7 9 1 12"
        stroke={`url(#${id}-brass)`}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 16 13 Q 22 12 26 16 L 22 13 Z"
        fill={`url(#${id}-brass)`}
      />

      {/* remaches */}
      <Bolt cx={4} cy={4} idGrad={id} brass />
      <Bolt cx={20} cy={4} idGrad={id} brass />
      <Bolt cx={4} cy={20} idGrad={id} brass />
    </svg>
  );
}

/* ============================================================
   BLOOD ANGELS :: rojo + alas + omega
   ============================================================ */
function BloodAngelsCorner() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-red`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6464" />
          <stop offset="40%" stopColor="#a40b0b" />
          <stop offset="100%" stopColor="#2a0202" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d39a" />
          <stop offset="50%" stopColor="#a07b35" />
          <stop offset="100%" stopColor="#3a2818" />
        </linearGradient>
        <filter id={`${id}-glow`}>
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="0.4" dy="0.4" stdDeviation="0.5" floodColor="#000" floodOpacity="0.9" />
        </filter>
      </defs>

      {/* L-bracket rojo */}
      <path
        d="M 1 22 L 1 1 L 22 1 L 22 5 L 5 5 L 5 22 Z"
        fill={`url(#${id}-red)`}
        stroke="#1a0202"
        strokeWidth="0.4"
        filter={`url(#${id}-shadow)`}
      />

      {/* trim dorado */}
      <path
        d="M 1 1 L 22 1 L 22 3 L 3 3 L 3 22 L 1 22 Z"
        fill={`url(#${id}-gold)`}
      />

      {/* glow rojo */}
      <circle cx="13" cy="13" r="6" fill="#ff2020" opacity="0.5" filter={`url(#${id}-glow)`} />

      {/* gota de sangre / omega */}
      <g transform="translate(13 13)" filter={`url(#${id}-shadow)`}>
        <path
          d="M 0 -5 Q 4 0 4 3 Q 4 7 0 7 Q -4 7 -4 3 Q -4 0 0 -5 Z"
          fill={`url(#${id}-gold)`}
          stroke="#3a2818"
          strokeWidth="0.3"
        />
      </g>

      {/* ala superior */}
      <path
        d="M 22 1 Q 30 4 30 10 L 26 7 L 28 3 Z"
        fill={`url(#${id}-gold)`}
      />

      <Bolt cx={4} cy={4} idGrad={id} brass />
    </svg>
  );
}

/* ============================================================
   ULTRAMARINES :: azul + omega
   ============================================================ */
function UltramarinesCorner() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a8eff" />
          <stop offset="50%" stopColor="#1f3a82" />
          <stop offset="100%" stopColor="#040d2a" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d39a" />
          <stop offset="50%" stopColor="#a07b35" />
          <stop offset="100%" stopColor="#3a2818" />
        </linearGradient>
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="0.4" dy="0.4" stdDeviation="0.5" floodColor="#000" floodOpacity="0.9" />
        </filter>
      </defs>

      <path
        d="M 1 22 L 1 1 L 22 1 L 22 5 L 5 5 L 5 22 Z"
        fill={`url(#${id}-blue)`}
        stroke="#040d2a"
        strokeWidth="0.4"
        filter={`url(#${id}-shadow)`}
      />
      <path
        d="M 1 1 L 22 1 L 22 3 L 3 3 L 3 22 L 1 22 Z"
        fill={`url(#${id}-gold)`}
      />

      {/* omega Ω */}
      <g transform="translate(13 13)" stroke={`url(#${id}-gold)`} strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M -5 5 Q -5 -5 0 -5 Q 5 -5 5 5 M -6 5 L -3 5 M 3 5 L 6 5" />
      </g>

      <Bolt cx={4} cy={4} idGrad={id} brass />
    </svg>
  );
}

/* ============================================================
   NECRON :: gris-verde frío + geometría
   ============================================================ */
function NecronCorner() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-stone`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a6e6c" />
          <stop offset="50%" stopColor="#2c2e2c" />
          <stop offset="100%" stopColor="#0a0c0a" />
        </linearGradient>
        <radialGradient id={`${id}-glyph`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#aaffce" />
          <stop offset="50%" stopColor="#1aff7a" />
          <stop offset="100%" stopColor="#04331a" />
        </radialGradient>
        <filter id={`${id}-shadow`}>
          <feDropShadow dx="0.4" dy="0.4" stdDeviation="0.5" floodColor="#000" floodOpacity="0.9" />
        </filter>
        <filter id={`${id}-glow`}>
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* L bracket angular */}
      <path
        d="M 1 22 L 1 1 L 22 1 L 18 5 L 5 5 L 5 18 Z"
        fill={`url(#${id}-stone)`}
        stroke="#04060a"
        strokeWidth="0.4"
        filter={`url(#${id}-shadow)`}
      />
      {/* líneas angulares */}
      <line x1="3" y1="22" x2="3" y2="3" stroke="#1aff7a" strokeWidth="0.4" opacity="0.7" />
      <line x1="22" y1="3" x2="3" y2="3" stroke="#1aff7a" strokeWidth="0.4" opacity="0.7" />

      {/* glifo verde */}
      <g filter={`url(#${id}-glow)`}>
        <circle cx="13" cy="13" r="3" fill={`url(#${id}-glyph)`} />
      </g>
      <circle cx="13" cy="13" r="1.4" fill="#04331a" />

      <Bolt cx={4} cy={4} idGrad={id} />
      <Bolt cx={18} cy={4} idGrad={id} />
      <Bolt cx={4} cy={18} idGrad={id} />
    </svg>
  );
}

/* ============================================================
   BOLT (tornillo reusable)
   ============================================================ */
function Bolt({
  cx,
  cy,
  idGrad,
  small = false,
  brass = false,
}: {
  cx: number;
  cy: number;
  idGrad: string;
  small?: boolean;
  brass?: boolean;
}) {
  const r = small ? 0.9 : 1.4;
  const fill = brass ? `url(#${idGrad}-rivet)` : `url(#${idGrad}-bolt)`;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#000" strokeWidth="0.25" />
      <line
        x1={cx - r * 0.55}
        y1={cy}
        x2={cx + r * 0.55}
        y2={cy}
        stroke="#000"
        strokeWidth="0.3"
      />
      <line
        x1={cx}
        y1={cy - r * 0.55}
        x2={cx}
        y2={cy + r * 0.55}
        stroke="#000"
        strokeWidth="0.3"
        opacity="0.6"
      />
    </g>
  );
}
