import create from "zustand";

export const useStore = create((set) => ({
  background: "gold",
  cube: "red",
  cubeCount: 1,
  changeBackground: (color) => set({ background: color }),
  changeCube: (color) => set({ cube: color }),
  changeCubeCount: (count) => set({ cubeCount: count }),
}));
