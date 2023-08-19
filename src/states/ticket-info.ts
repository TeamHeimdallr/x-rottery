import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';
import { Round } from '~/types';

interface TicketState {
  ticket: Round | undefined;
  setTicket: (ticket: Round) => void;
}

export const useTicketStore = create<TicketState>()(
  immer(
    logger(set => ({
      name: 'ticket-info-store',
      ticket: undefined,
      setTicket: (ticket: Round) =>
        set(state => {
          return { ...state, ticket };
        }),
    }))
  )
);
