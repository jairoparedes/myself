"use client";

import { motion } from "framer-motion";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import FooterBar from "@/components/layout/FooterBar";

import AdeptusPngPanel from "@/components/ui/AdeptusPngPanel";

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
            className="flex flex-col gap-4 max-w-[1600px] mx-auto w-full"
          >
            {/* TOP ROW :: PERFIL + HABILIDADES */}
            <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-4 xl:gap-5">
              <AdeptusPngPanel
                title="Perfil del Tecno-Adepto"
                centerTitle
                delay={0.05}
              >
                <ProfileCard />
              </AdeptusPngPanel>

              <AdeptusPngPanel
                title="Habilidades del Adepto"
                centerTitle
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
              </AdeptusPngPanel>
            </div>

            {/* MIDDLE ROW :: MISIONES */}
            <AdeptusPngPanel
              title="Misiones Principales"
              centerTitle
              delay={0.18}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {missions.map((m, i) => (
                  <AdeptusPngPanel
                    key={m.id}
                    compact
                    delay={0.19 + i * 0.04}
                    bodyClassName="h-full flex flex-col"
                  >
                    <MissionCard mission={m} index={i} />
                  </AdeptusPngPanel>
                ))}
              </div>
            </AdeptusPngPanel>

            {/* BOTTOM ROW :: TERMINAL + ARSENAL + LOGROS */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr_1.15fr] gap-4 xl:gap-5">
              <AdeptusPngPanel
                title="Registro del Tecno-Adepto"
                centerTitle
                delay={0.25}
              >
                <TerminalLog />
              </AdeptusPngPanel>

              <AdeptusPngPanel
                title="Arsenal Tecnológico"
                centerTitle
                delay={0.3}
              >
                <ArsenalGrid />
              </AdeptusPngPanel>

              <AdeptusPngPanel
                title="Logros del Adepto"
                centerTitle
                delay={0.35}
              >
                <AchievementsPanel />
              </AdeptusPngPanel>
            </div>
          </motion.div>
        </main>

        <FooterBar />
      </div>
    </div>
  );
}
