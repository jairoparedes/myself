export interface Skill {
  name: string;
  level: number;
  category?: string;
}

export const skills: Skill[] = [
  { name: "Backend (Laravel)", level: 90, category: "Cogitator" },
  { name: "Cloud (GCP)", level: 85, category: "Noosphere" },
  { name: "IoT (ESP32)", level: 88, category: "Machine Spirit" },
  { name: "Bases de Datos", level: 87, category: "Archivum" },
  { name: "Automatización", level: 92, category: "Ritus Mechanicus" },
];
