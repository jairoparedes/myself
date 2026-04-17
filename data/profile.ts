export interface Profile {
  name: string;
  role: string;
  specialization: string[];
  loyalty: string;
  motto: string;
  codename?: string;
  origin?: string;
  clearance?: string;
}

export const profile: Profile = {
  name: "Jairo",
  role: "Tecno-Adepto",
  specialization: ["IoT", "Cloud", "Automatización"],
  loyalty: "Omnissiah",
  motto: "El código es mi credo",
  codename: "MAGOS-077",
  origin: "Forge World",
  clearance: "VERMILION",
};
