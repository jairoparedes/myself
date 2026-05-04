"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";

export default function ProfileCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 h-full items-stretch">
      {/* RETRATO — marco ornamental con cráneo superior (mockup) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
        className="shrink-0 w-full sm:w-[240px] flex justify-center sm:justify-start"
      >
        <div className="profile-portrait-shell">
          <div className="profile-portrait-shell__skull" aria-hidden>
            <SkullOrnament />
          </div>
          <div className="profile-portrait-shell__frame">
            <Image
              src={profile.portraitSrc}
              alt={profile.portraitAlt}
              fill
              sizes="(max-width: 640px) 100vw, 240px"
              className="object-cover object-top"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-35"
              aria-hidden
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* DATOS */}
      <div className="flex-1 min-w-0 flex flex-col">
        <dl className="text-[0.78rem] font-mono space-y-3 text-[var(--text-color,#ead9cc)]">
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

        {/* COMANDO DEL DÍA — borde verde terminal (mockup) */}
        <div className="mt-auto pt-5 sm:pt-6">
          <div className="command-of-day-box">
            <div className="command-of-day-box__label">&gt; Comando del Día</div>
            <div className="command-of-day-box__body">
              {profile.commandOfTheDay.map((line, i) => (
                <p key={i}>&ldquo;{line}&rdquo;</p>
              ))}
            </div>
            <div className="command-of-day-box__footer">⚜</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkullOrnament() {
  return (
    <svg viewBox="0 0 40 22" className="w-[52px] h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
      <defs>
        <linearGradient id="skg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a96a" />
          <stop offset="55%" stopColor="#8b5a2b" />
          <stop offset="100%" stopColor="#3a2818" />
        </linearGradient>
      </defs>
      <ellipse cx="20" cy="11" rx="11" ry="9" fill="url(#skg)" stroke="#1a0f06" strokeWidth="0.5" />
      <rect x="14" y="14" width="12" height="5" fill="url(#skg)" stroke="#1a0f06" strokeWidth="0.4" />
      <circle cx="16" cy="10" r="1.4" fill="#0a0703" />
      <circle cx="24" cy="10" r="1.4" fill="#0a0703" />
      <line x1="14" y1="17" x2="26" y2="17" stroke="#0a0703" strokeWidth="0.6" />
      <line x1="17" y1="15" x2="17" y2="19" stroke="#0a0703" strokeWidth="0.35" />
      <line x1="20" y1="15" x2="20" y2="19" stroke="#0a0703" strokeWidth="0.35" />
      <line x1="23" y1="15" x2="23" y2="19" stroke="#0a0703" strokeWidth="0.35" />
      <circle cx="20" cy="3" r="1.8" fill="#6a1010" opacity="0.9" />
    </svg>
  );
}

function Field({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <dt className="w-[5.5rem] shrink-0 text-text-muted tracking-[0.16em] uppercase text-[0.62rem] pt-0.5">
        {label}:
      </dt>
      <dd className="whitespace-pre-line leading-snug flex-1 opacity-95">
        {value}
        {suffix}
      </dd>
    </div>
  );
}
