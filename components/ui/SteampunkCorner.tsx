"use client";

type Position = "tl" | "tr" | "bl" | "br";

interface SteampunkCornerProps {
  position: Position;
  size?: number;
  variant?: "ornate" | "simple";
}

const ROTATION: Record<Position, number> = {
  tl: 0,
  tr: 90,
  br: 180,
  bl: 270,
};

const POSITION_STYLE: Record<Position, React.CSSProperties> = {
  tl: { top: -2, left: -2 },
  tr: { top: -2, right: -2 },
  bl: { bottom: -2, left: -2 },
  br: { bottom: -2, right: -2 },
};

export default function SteampunkCorner({
  position,
  size = 42,
  variant = "ornate",
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
      {variant === "ornate" ? <OrnateCorner /> : <SimpleCorner />}
    </span>
  );
}

function OrnateCorner() {
  const id = `brass-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4a96a" />
          <stop offset="35%" stopColor="#a07b35" />
          <stop offset="70%" stopColor="#5c4520" />
          <stop offset="100%" stopColor="#1a0f06" />
        </linearGradient>
        <radialGradient id={`${id}-gear`} cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#e8c182" />
          <stop offset="55%" stopColor="#8b6f2c" />
          <stop offset="100%" stopColor="#2a1d0a" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.5" floodColor="#000" floodOpacity="0.85" />
        </filter>
      </defs>

      {/* L-bracket externo */}
      <path
        d="M 1 22 L 1 1 L 22 1"
        stroke={`url(#${id})`}
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="square"
        filter={`url(#${id}-shadow)`}
      />

      {/* L-bracket interno */}
      <path
        d="M 5 22 L 5 5 L 22 5"
        stroke={`url(#${id})`}
        strokeWidth="0.6"
        fill="none"
        opacity="0.85"
      />

      {/* Filigrana / curl decorativo */}
      <path
        d="M 22 1 Q 30 1 30 9 Q 30 14 24 14 Q 20 14 20 10"
        stroke={`url(#${id})`}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 1 22 Q 1 30 9 30 Q 14 30 14 24 Q 14 20 10 20"
        stroke={`url(#${id})`}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Engranaje principal */}
      <g transform="translate(13 13)" filter={`url(#${id}-shadow)`}>
        {/* dientes del engranaje */}
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={-1}
            y={-7}
            width={2}
            height={2.5}
            fill={`url(#${id}-gear)`}
            transform={`rotate(${i * 45})`}
          />
        ))}
        {/* cuerpo del engranaje */}
        <circle r="5" fill={`url(#${id}-gear)`} stroke="#1a0f06" strokeWidth="0.4" />
        <circle r="3.2" fill="none" stroke="#3a2818" strokeWidth="0.3" />
        {/* centro */}
        <circle r="1.5" fill="#0a0703" stroke={`url(#${id})`} strokeWidth="0.4" />
        {/* radios cruzados */}
        <line x1="-3" y1="0" x2="3" y2="0" stroke="#3a2818" strokeWidth="0.3" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#3a2818" strokeWidth="0.3" />
      </g>

      {/* Remaches secundarios */}
      <Rivet cx={26} cy={5} idGrad={id} />
      <Rivet cx={5} cy={26} idGrad={id} />
      <Rivet cx={22} cy={22} idGrad={id} small />
    </svg>
  );
}

function Rivet({
  cx,
  cy,
  idGrad,
  small = false,
}: {
  cx: number;
  cy: number;
  idGrad: string;
  small?: boolean;
}) {
  const r = small ? 1.1 : 1.6;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={`url(#${idGrad}-gear)`}
        stroke="#1a0f06"
        strokeWidth="0.3"
      />
      <circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.35} fill="#f0d39a" opacity="0.6" />
    </g>
  );
}

function SimpleCorner() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path
        d="M 1 12 L 1 1 L 12 1"
        stroke="#a07b35"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="6" cy="6" r="1.5" fill="#c19a4f" stroke="#3a2818" strokeWidth="0.3" />
    </svg>
  );
}
