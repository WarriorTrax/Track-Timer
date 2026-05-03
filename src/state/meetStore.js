import { create } from "zustand";

export const useMeetStore = create((set) => ({
  race: {
    running: false,
    startTime: null,
    results: {},
    splits: {}
  },

  setRace: (race) => set({ race })
}));