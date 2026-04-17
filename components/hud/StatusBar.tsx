"use client";

import { useEffect, useState } from "react";
import { Radio, Activity, Clock, Wifi } from "lucide-react";

export default function StatusBar() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("es-ES", { hour12: false });
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-mono tracking-[0.2em] uppercase">
      <span className="status-pill status-pill--ok">
        <span className="status-dot" />
        Online
      </span>
      <span className="status-pill">
        <Radio className="w-3 h-3" strokeWidth={1.5} />
        Vox-Net OK
      </span>
      <span className="status-pill">
        <Wifi className="w-3 h-3" strokeWidth={1.5} />
        Noosphere
      </span>
      <span className="status-pill">
        <Activity className="w-3 h-3" strokeWidth={1.5} />
        Spirit: Stable
      </span>
      <span className="status-pill">
        <Clock className="w-3 h-3" strokeWidth={1.5} />
        {time}
      </span>
    </div>
  );
}
