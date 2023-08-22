import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';
import { Wallet } from '~/types';

interface WalletState {
  wallet: Wallet | undefined;
  setWallet: (wallet: Wallet) => void;
  balance: string;
  setBalance: (balance: string) => void;
  reset: () => void;
}

export const useWalletStore = create<WalletState>()(
  immer(
    logger(set => ({
      name: 'wallet-info-store',
      wallet: undefined,
      setWallet: (wallet: Wallet) =>
        set(state => {
          return { ...state, wallet };
        }),
      balance: '0',
      setBalance: (balance: string) =>
        set(state => {
          return { ...state, balance };
        }),
      reset: () => set({ wallet: undefined, balance: '0' }),
    }))
  )
);
