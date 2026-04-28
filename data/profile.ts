export interface Profile {
  name: string;
  rank: string;
  rankSub: string;
  specialization: string;
  loyalty: string;
  motivation: string;
  motto: string;
  commandOfTheDay: string[];
  location: {
    sector: string;
    place: string;
    coords: string;
  };
}

export const profile: Profile = {
  name: "Jairo",
  rank: "Ingeniero en Sistemas",
  rankSub: "(Explorator Novus)",
  specialization: "IoT, Automatización,\nBackend, Cloud, Integración de Sistemas",
  loyalty: "Adeptus Mechanicus",
  motivation:
    "Entender, crear y mejorar\nla tecnología para servir a la humanidad.",
  motto: "El código es mi credo. Ave Omnissiah.",
  commandOfTheDay: [
    "La innovación sin control es herejía.",
    "El conocimiento sin aplicación es desperdicio.",
    "El código sin propósito es ruina.",
  ],
  location: {
    sector: "Segmentum Solar",
    place: "México, Tierra",
    coords: "19.4326° N, -99.1332° W",
  },
};
