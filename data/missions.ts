export type MissionStatus = "completed" | "in-progress" | "locked";

export interface Mission {
  id: string;
  title: string;
  status: MissionStatus;
  description: string;
  xp: number;
  icon: string;
  gradient: string;
}

export const missions: Mission[] = [
  {
    id: "m-001",
    title: "Sistema IoT Ambiental",
    status: "completed",
    description:
      "Monitoreo de variables ambientales en tiempo real con alertas inteligentes.",
    xp: 500,
    icon: "cpu",
    gradient: "from-slate-700 via-slate-800 to-black",
  },
  {
    id: "m-002",
    title: "Plataforma de Gestión",
    status: "completed",
    description:
      "Sistema web para gestión de procesos y automatización empresarial.",
    xp: 650,
    icon: "monitor",
    gradient: "from-emerald-900 via-slate-900 to-black",
  },
  {
    id: "m-003",
    title: "Infraestructura en la Nube",
    status: "completed",
    description:
      "Arquitectura escalable en GCP con CI/CD y monitoreo completo.",
    xp: 800,
    icon: "cloud",
    gradient: "from-indigo-900 via-slate-900 to-black",
  },
  {
    id: "m-004",
    title: "Análisis EEG",
    status: "in-progress",
    description:
      "Análisis de señales cerebrales con Python y Machine Learning para neurofeedback.",
    xp: 1200,
    icon: "brain",
    gradient: "from-purple-900 via-fuchsia-950 to-black",
  },
  {
    id: "m-005",
    title: "Automatización Industrial",
    status: "in-progress",
    description:
      "Diseño de sistemas automatizados para procesos industriales.",
    xp: 900,
    icon: "factory",
    gradient: "from-amber-900 via-stone-900 to-black",
  },
];
