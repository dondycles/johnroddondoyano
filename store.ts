import { persist } from "zustand/middleware";
import { create } from "zustand";

type ModalState = {
  neverAgain: boolean;
  setNeverAgain: () => void;
};
export const useModalState = create<ModalState>()(
  persist(
    (set) => ({
      neverAgain: false,
      setNeverAgain: () => set({ neverAgain: true }),
    }),
    { name: "modal-state" }
  )
);
