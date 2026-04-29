"use client";

import type { CornerVariant } from "./SteampunkCorner";

interface EdgeRivetsProps {
  count?: number;
  variant?: CornerVariant;
}

const PALETTE: Record<
  CornerVariant,
  { highlight: string; mid: string; dark: string; ring: string }
> = {
  "tech-priest": {
    highlight: "#a8acaf",
    mid: "#3a3e43",
    dark: "#0a0a0c",
    ring: "#000",
  },
  imperial: {
    highlight: "#f0d39a",
    mid: "#a07b35",
    dark: "#1a0f06",
    ring: "#1a0f06",
  },
  "blood-angels": {
    highlight: "#f0d39a",
    mid: "#a40b0b",
    dark: "#1a0202",
    ring: "#1a0202",
  },
  ultramarines: {
    highlight: "#f0d39a",
    mid: "#1f3a82",
    dark: "#040d2a",
    ring: "#040d2a",
  },
  necron: {
    highlight: "#aaffce",
    mid: "#3a3e3a",
    dark: "#04060a",
    ring: "#04060a",
  },
};

export default function EdgeRivets({
  count = 2,
  variant = "tech-priest",
}: EdgeRivetsProps) {
  const positions = Array.from({ length: count }).map(
    (_, i) => ((i + 1) / (count + 1)) * 100,
  );
  const p = PALETTE[variant];

  return (
    <span aria-hidden className="edge-rivets">
      {positions.map((pos) => (
        <Rivet key={`t-${pos}`} style={{ top: 5, left: `${pos}%` }} palette={p} />
      ))}
      {positions.map((pos) => (
        <Rivet key={`b-${pos}`} style={{ bottom: 5, left: `${pos}%` }} palette={p} />
      ))}
      {positions.map((pos) => (
        <Rivet key={`l-${pos}`} style={{ left: 5, top: `${pos}%` }} palette={p} />
      ))}
      {positions.map((pos) => (
        <Rivet key={`r-${pos}`} style={{ right: 5, top: `${pos}%` }} palette={p} />
      ))}
    </span>
  );
}

function Rivet({
  style,
  palette,
}: {
  style: React.CSSProperties;
  palette: { highlight: string; mid: string; dark: string; ring: string };
}) {
  return (
    <span
      className="absolute w-[5px] h-[5px] rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${palette.highlight} 0%, ${palette.mid} 45%, ${palette.dark} 100%)`,
        boxShadow: `0 0 0 1px ${palette.ring}, inset 0 -1px 1px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.1)`,
        ...style,
      }}
    />
  );
}
