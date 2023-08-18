import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface SlotNumberAutoGeneratorState {
  isLoading: boolean;
  value: string;
  setValue: (data: string) => void;
  setIsLoading: (data: boolean) => void;
  reset: () => void;
}

export const useSlotNumberAutoGeneratorStore = create<SlotNumberAutoGeneratorState>()(
  immer(set => ({
    name: 'slot-number-auto-generator-store',
    value: '',
    isLoading: false,
    setIsLoading: data => set({ isLoading: data }),
    setValue: data => set({ value: data }),
    reset: () => set({ value: '' }),
  }))
);
