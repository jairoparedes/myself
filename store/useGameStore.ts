import { create } from "zustand";

interface GameState {
  xp: number;
  level: number;
  completedMissions: string[];
  addXP: (amount: number) => void;
  completeMission: (id: string, xp: number) => void;
  resetProgress: () => void;
}

const XP_PER_LEVEL = 1000;

export const useGameStore = create<GameState>((set, get) => ({
  xp: 0,
  level: 1,
  completedMissions: [],
  addXP: (amount) =>
    set((state) => {
      const newXP = state.xp + amount;
      return {
        xp: newXP,
        level: Math.floor(newXP / XP_PER_LEVEL) + 1,
      };
    }),
  completeMission: (id, xp) => {
    const { completedMissions } = get();
    if (completedMissions.includes(id)) return;
    set((state) => {
      const newXP = state.xp + xp;
      return {
        xp: newXP,
        level: Math.floor(newXP / XP_PER_LEVEL) + 1,
        completedMissions: [...state.completedMissions, id],
      };
    });
  },
  resetProgress: () =>
    set({ xp: 0, level: 1, completedMissions: [] }),
}));

export const XP_PER_LEVEL_CONST = XP_PER_LEVEL;
