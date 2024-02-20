"use client";

import { create } from "zustand";

export interface NavbarStore {
  isOpen: boolean;
  toggle: (state?: boolean) => void;
  open: () => void;
  close: () => void;
}

const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false,
  toggle: (navState) => {
    set((state) => ({
      isOpen: navState !== undefined ? navState : !state.isOpen,
    }));
  },
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));

export default useNavbarStore;
