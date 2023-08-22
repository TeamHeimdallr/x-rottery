import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface SlotNumberAutoGeneratorState {
  value: string;
  setValue: (data: string) => void;
  reset: () => void;
}

export const useSlotNumberAutoGeneratorStore = create<SlotNumberAutoGeneratorState>()(
  immer(set => ({
    name: 'slot-number-auto-generator-store',
    value: '',
    setValue: data => set({ value: data }),
    reset: () => set({ value: '' }),
  }))
);
