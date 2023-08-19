interface Round {
  round: number;
  number: string;
  winner?: `r${string}`;
  jackpot?: number;
  purchaseDate?: string;
}

// TODO : 메인페이지에서 슬롯 돌려서 나온 숫자로 변경, 날짜 변경
export const testerNewData: Round = {
  round: 2,
  number: '83DD00',
  purchaseDate: '2023-08-21 20:44:12',
};
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
    jackpot: 9999999,
    purchaseDate: '2023-08-10 13:12:57',
  },
  {
    round: 1,
    number: '83DD00',
    purchaseDate: '2023-08-09 20:44:12',
  },
];

export const previousWinningData: Round[] = [
  { round: 1, number: '0A1B2C', winner: `r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV`, jackpot: 9999999 },
];
