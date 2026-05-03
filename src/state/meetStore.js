import { create } from "zustand";

export const useMeetStore = create((set) => ({
  meet: {
    name: "Track Meet",
    events: []
  },

  race: {
    running: false,
    startTime: null,
    results: {}
  },

  setMeet: (meet) => set({ meet }),
  setRace: (race) => set({ race })
}));