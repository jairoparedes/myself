"use client";

import { motion } from "framer-motion";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import FooterBar from "@/components/layout/FooterBar";

import TechPanel from "@/components/ui/TechPanel";

import SkillBar from "@/components/hud/SkillBar";

import ProfileCard from "@/components/modules/ProfileCard";
import MissionCard from "@/components/modules/MissionCard";
import TerminalLog from "@/components/modules/TerminalLog";
import ArsenalGrid from "@/components/modules/ArsenalGrid";
import AchievementsPanel from "@/components/modules/AchievementsPanel";

import { skills, totalXP, maxXP } from "@/data/skills";
import { missions } from "@/data/missions";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <main className="flex-1 p-4 lg:p-5 overflow-x-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="flex flex-col gap-4 max-w-[1500px] mx-auto"
          >
            {/* TOP ROW :: PERFIL + HABILIDADES */}
            <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr] gap-4">
              <TechPanel
                title="Perfil del Tecno-Adepto"
                centerTitle
                variant="imperial"
                delay={0.05}
              >
                <ProfileCard />
              </TechPanel>

              <TechPanel
                title="Habilidades del Adepto"
                centerTitle
                variant="tech-priest"
                delay={0.12}
              >
                <div className="flex flex-col">
                  {skills.map((s, i) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      tech={s.tech}
                      level={s.level}
                      delay={0.15 + i * 0.06}
                    />
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-panel-border">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[0.68rem] font-mono tracking-[0.22em] uppercase text-accent-red-glow">
                      Puntos de Experiencia:
                    </span>
                    <span className="font-mono text-accent-red-glow text-glow-red text-sm font-bold">
                      {totalXP} / {maxXP}
                    </span>
                  </div>
                </div>
              </TechPanel>
            </div>

            {/* MIDDLE ROW :: MISIONES */}
            <TechPanel
              title="Misiones Principales"
              centerTitle
              variant="tech-priest"
              delay={0.18}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {missions.map((m, i) => (
                  <MissionCard key={m.id} mission={m} index={i} />
                ))}
              </div>
            </TechPanel>

            {/* BOTTOM ROW :: TERMINAL + ARSENAL + LOGROS */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1.2fr] gap-4">
              <TechPanel
                title="Registro del Tecno-Adepto"
                centerTitle
                variant="necron"
                delay={0.25}
              >
                <TerminalLog />
              </TechPanel>

              <TechPanel
                title="Arsenal Tecnológico"
                centerTitle
                variant="ultramarines"
                delay={0.3}
              >
                <ArsenalGrid />
              </TechPanel>

              <TechPanel
                title="Logros del Adepto"
                centerTitle
                variant="blood-angels"
                delay={0.35}
              >
                <AchievementsPanel />
              </TechPanel>
            </div>
          </motion.div>
        </main>

        <FooterBar />
      </div>
    </div>
  );
}
