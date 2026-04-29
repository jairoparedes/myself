"use client";

interface EdgeRivetsProps {
  count?: number;
}

export default function EdgeRivets({ count = 2 }: EdgeRivetsProps) {
  const positions = Array.from({ length: count }).map(
    (_, i) => ((i + 1) / (count + 1)) * 100,
  );

  return (
    <span aria-hidden className="edge-rivets">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="rivet-grad" cx="0.35" cy="0.35" r="0.7">
            <stop offset="0%" stopColor="#f0d39a" />
            <stop offset="50%" stopColor="#a07b35" />
            <stop offset="100%" stopColor="#2a1d0a" />
          </radialGradient>
        </defs>
      </svg>

      {/* TOP edge */}
      {positions.map((p) => (
        <Rivet key={`t-${p}`} style={{ top: 5, left: `${p}%` }} />
      ))}
      {/* BOTTOM edge */}
      {positions.map((p) => (
        <Rivet key={`b-${p}`} style={{ bottom: 5, left: `${p}%` }} />
      ))}
      {/* LEFT edge */}
      {positions.map((p) => (
        <Rivet key={`l-${p}`} style={{ left: 5, top: `${p}%` }} />
      ))}
      {/* RIGHT edge */}
      {positions.map((p) => (
        <Rivet key={`r-${p}`} style={{ right: 5, top: `${p}%` }} />
      ))}
    </span>
  );
}

function Rivet({ style }: { style: React.CSSProperties }) {
  return (
    <span
      className="absolute w-[5px] h-[5px] rounded-full -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #f0d39a 0%, #a07b35 45%, #2a1d0a 100%)",
        boxShadow:
          "0 0 0 1px #1a0f06, inset 0 -1px 1px rgba(0,0,0,0.6), 0 1px 1px rgba(255,220,160,0.15)",
        ...style,
      }}
    />
  );
}
