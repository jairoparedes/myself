"use client";

import SkullHeader from "@/components/ui/SkullHeader";
import StatusBar from "@/components/hud/StatusBar";

export default function TopBar() {
  return (
    <header className="h-auto lg:h-16 border-b border-panel-border bg-[#0a0a0b]/80 backdrop-blur-sm px-4 sm:px-6 py-3 lg:py-0 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
      <SkullHeader
        title="DATASLATE // PERFIL"
        subtitle="Adeptus Mechanicus · Tecno-Adepto"
      />
      <StatusBar />
    </header>
  );
}
