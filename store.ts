import { persist } from "zustand/middleware";
import { create } from "zustand";

type ModalState = {
  neverAgain: boolean;
  setNeverAgain: (state: boolean) => void;
};
export const useModalState = create<ModalState>()(
  persist(
    (set) => ({
      neverAgain: false,
      setNeverAgain: (state) => set({ neverAgain: state }),
    }),
    { name: "modal-state" }
  )
);
