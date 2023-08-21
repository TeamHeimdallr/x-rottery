import { Round } from '~/types';

// TODO : 당첨자 나온 숫자로 변경, 날짜 변경, winner 지갑으로 변경
export const winerNewData: Round = {
  round: 2,
  number: '83DD00',
  jackpot: 2000,
  winner: 'ra2ev63Q2sKKUNZB95NgFW165QUKGiXCqr' as `r${string}`,
  purchaseDate: '2023-08-21 20:44:12',
};

export const previousData: Round[] = [
  {
    round: 1,
    number: '0A1B2C',
    jackpot: 100000,
    purchaseDate: '2023-08-14 20:44:12',
  },
  {
    round: 1,
    number: '83DD00',
    purchaseDate: '2023-08-14 13:12:57',
  },
];

export const previousWinningData: Round[] = [
  { round: 1, number: '0A1B2C', winner: `ra2ev63Q2sKKUNZB95NgFW165QUKGiXCqr`, jackpot: 100000 },
];
