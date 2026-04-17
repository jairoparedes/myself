"use client";

import { motion } from "framer-motion";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

import TechPanel from "@/components/ui/TechPanel";
import Divider from "@/components/ui/Divider";

import HUDStats from "@/components/hud/HUDStats";
import SkillBar from "@/components/hud/SkillBar";

import ProfileCard from "@/components/modules/ProfileCard";
import MissionCard from "@/components/modules/MissionCard";
import TerminalLog from "@/components/modules/TerminalLog";
import ArsenalGrid from "@/components/modules/ArsenalGrid";

import { skills } from "@/data/skills";
import { missions } from "@/data/missions";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <main className="flex-1 p-4 sm:p-6 max-w-[1600px] mx-auto w-full">
          {/* TOP ROW :: Profile + HUD */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 xl:grid-cols-3 gap-4"
          >
            <div className="xl:col-span-2">
              <ProfileCard />
            </div>

            <div className="flex flex-col gap-4">
              <TechPanel title="HUD // Vitae" badge="LIVE" delay={0.15}>
                <HUDStats />
              </TechPanel>

              <TechPanel title="Arsenal" badge="EQUIPAMIENTO" delay={0.25}>
                <ArsenalGrid />
              </TechPanel>
            </div>
          </motion.div>

          <Divider label="Habilidades · Sacra Doctrina" />

          {/* SKILLS */}
          <TechPanel title="Cogitator Skills" badge="BIO-CERTIFIED" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              {skills.map((s, i) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  category={s.category}
                  delay={0.2 + i * 0.08}
                />
              ))}
            </div>
          </TechPanel>

          <Divider label="Misiones · Archivo de Operaciones" />

          {/* MISSIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {missions.map((m, i) => (
              <MissionCard key={m.id} mission={m} index={i} />
            ))}
          </div>

          <Divider label="Vox-Cast · Log del Dataslate" />

          {/* TERMINAL */}
          <TechPanel title="Terminal" badge="STREAM" delay={0.1}>
            <TerminalLog />
          </TechPanel>

          <footer className="mt-10 pb-6 text-center">
            <p className="text-[0.68rem] font-mono tracking-[0.3em] uppercase text-text-muted">
              The Omnissiah Protects // {new Date().getFullYear()}
            </p>
            <p className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-accent-red/60 mt-1">
              &lt; ave deus mechanicus &gt;
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
