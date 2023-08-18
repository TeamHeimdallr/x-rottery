import { ReactNode } from 'react';

export enum TABLE_DATA_TYPE {
  TEXT = 'text',
  NUMBER = 'number',
}
export interface TableProps {
  header: { value: string; width?: number }[];
  rowData: { type: string; value: ReactNode | string; width?: number }[];
}
