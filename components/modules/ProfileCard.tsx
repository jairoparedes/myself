"use client";

import { motion } from "framer-motion";
import { Fingerprint, ShieldCheck, Scroll, Star } from "lucide-react";
import TechPanel from "@/components/ui/TechPanel";
import { profile } from "@/data/profile";

export default function ProfileCard() {
  return (
    <TechPanel
      title="Dataslate Personal"
      badge={profile.clearance ? `CLR // ${profile.clearance}` : undefined}
      withBrackets
      delay={0.1}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-24 h-24 shrink-0 border border-panel-border bg-[#0a0a0b] flex items-center justify-center overflow-hidden rounded-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 via-transparent to-accent-green/10 animate-flicker" />
          <Fingerprint
            className="w-12 h-12 text-accent-red-glow relative z-10"
            strokeWidth={1.2}
          />
          <div className="absolute inset-0 pointer-events-none border border-accent-red/40 m-1" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-display font-bold text-2xl tracking-wider text-text-primary">
              {profile.name}
            </h2>
            {profile.codename && (
              <span className="text-[0.65rem] font-mono tracking-[0.22em] text-text-muted uppercase border border-panel-border px-1.5 py-0.5 rounded-sm">
                {profile.codename}
              </span>
            )}
          </div>

          <div className="mt-1 flex items-center gap-2 text-accent-red-glow">
            <Star className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="font-display text-sm tracking-[0.2em] uppercase">
              {profile.role}
            </span>
          </div>

          <div className="mt-3 space-y-1.5 text-[0.78rem] font-mono">
            <Row
              icon={<ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />}
              label="LEALTAD"
              value={profile.loyalty}
            />
            <Row
              icon={<Scroll className="w-3.5 h-3.5" strokeWidth={1.5} />}
              label="ORIGEN"
              value={profile.origin ?? "Desconocido"}
            />
          </div>

          <div className="mt-3">
            <div className="text-[0.6rem] font-mono text-text-muted tracking-[0.22em] uppercase mb-1.5">
              Especializaciones
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.specialization.map((spec) => (
                <span
                  key={spec}
                  className="text-[0.68rem] font-mono tracking-wider text-accent-green border border-accent-green/30 bg-accent-green/5 px-2 py-0.5 rounded-sm"
                >
                  &gt; {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-panel-border/80">
            <div className="text-[0.6rem] font-mono text-text-muted tracking-[0.22em] uppercase mb-1">
              Credo
            </div>
            <p className="text-sm italic text-text-primary font-mono">
              &ldquo;{profile.motto}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </TechPanel>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-text-muted">{icon}</span>
      <span className="text-text-muted tracking-[0.18em] uppercase text-[0.6rem]">{label}</span>
      <span className="text-accent-red-glow">::</span>
      <span className="text-text-primary">{value}</span>
    </div>
  );
}
