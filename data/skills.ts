export interface Skill {
  name: string;
  tech: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "Lenguaje Binario", tech: "Laravel", level: 98 },
  { name: "Máquinas de Datos", tech: "MySQL", level: 92 },
  { name: "Códigos de Nube", tech: "GCP", level: 90 },
  { name: "Protocolos IoT", tech: "ESP32", level: 95 },
  { name: "Automatización", tech: "Workflows", level: 93 },
  { name: "Interfaces", tech: "Vue / JS", level: 85 },
  { name: "Control de Servidores", tech: "Linux", level: 88 },
  { name: "Innovación y Creatividad", tech: "", level: 97 },
];

export const totalXP = 2540;
export const maxXP = 4500;
