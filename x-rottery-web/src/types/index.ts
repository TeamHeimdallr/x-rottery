import { ReactNode } from 'react';

export enum TABLE_DATA_TYPE {
  TEXT = 'text',
  NUMBER = 'number',
}
export interface TableProps {
  header: { value: string; width?: number }[];
  rowData: { type: string; value: ReactNode | string; width?: number }[];
}
export interface Wallet {
  classicAddress: string;
  privateKey: string;
  publicKey: string;
  seed?: string;
}
export interface Round {
  round: number;
  number: string;
  winner?: `r${string}`;
  jackpot?: number;
  purchaseDate?: string;
}
