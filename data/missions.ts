export type MissionStatus = "completed" | "in-progress" | "locked";

export interface Mission {
  id: string;
  title: string;
  status: MissionStatus;
  description: string;
  xp: number;
  codex?: string;
  tags?: string[];
}

export const missions: Mission[] = [
  {
    id: "m-001",
    title: "Sistema IoT Ambiental",
    status: "completed",
    description: "Monitoreo en tiempo real con sensores ESP32 y protocolo MQTT.",
    xp: 500,
    codex: "SECTOR-ALPHA",
    tags: ["ESP32", "MQTT", "Sensors"],
  },
  {
    id: "m-002",
    title: "Infraestructura en la Nube",
    status: "completed",
    description: "Arquitectura escalable en GCP con Cloud Run, Pub/Sub y Firestore.",
    xp: 800,
    codex: "NOOSPHERE-01",
    tags: ["GCP", "Cloud Run", "Firestore"],
  },
  {
    id: "m-003",
    title: "EEG con IA",
    status: "in-progress",
    description: "Procesamiento de señales cerebrales y clasificación neural.",
    xp: 1200,
    codex: "CRANIUM-LABS",
    tags: ["EEG", "Python", "TensorFlow"],
  },
  {
    id: "m-004",
    title: "Pipeline de Datos Industriales",
    status: "completed",
    description: "ETL automatizado desde PLCs hasta cuadros de mando.",
    xp: 650,
    codex: "MECHANICUS-ETL",
    tags: ["ETL", "Docker", "Grafana"],
  },
  {
    id: "m-005",
    title: "Integración Vox-Net",
    status: "locked",
    description: "Acceso restringido. Requiere autorización del Magos Dominus.",
    xp: 1500,
    codex: "CLASSIFIED",
    tags: ["???"],
  },
];
