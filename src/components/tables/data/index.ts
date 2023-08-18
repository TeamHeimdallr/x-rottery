interface Round {
  round: number;
  number: string;
  jackpot: number;
  isJackpot: boolean;
  purchaseDate: string;
}

// TODO : 메인페이지에서 슬롯 돌려서 나온 숫자로 변경, 날짜 변경
export const newData: Round = {
  round: 2,
  number: '83DD00',
  jackpot: 9999999,
  isJackpot: false,
  purchaseDate: '2023-08-09 20:44:12',
};

export const previousData: Round[] = [
  {
    round: 1,
    number: '0A1B2C',
    jackpot: 9999999,
    isJackpot: true,
    purchaseDate: '2023-08-10 13:12:57',
  },
  {
    round: 1,
    number: '83DD00',
    jackpot: 9999999,
    isJackpot: false,
    purchaseDate: '2023-08-09 20:44:12',
  },
];
