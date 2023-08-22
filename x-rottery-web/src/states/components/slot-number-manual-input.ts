import { produce } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface SlotNumberManualInputState {
  value: string[];
  setValue: (data: string, i: number) => void;
  reset: () => void;
}

export const useSlotNumberManualInputStore = create<SlotNumberManualInputState>()(
  immer(set => ({
    name: 'slot-number-manual-input-store',
    value: [],
    setValue: (data: string, i: number) =>
      set(
        produce<SlotNumberManualInputState>(state => {
          state.value[i] = data;
        })
      ),
    reset: () => set({ value: [] }),
  }))
);
