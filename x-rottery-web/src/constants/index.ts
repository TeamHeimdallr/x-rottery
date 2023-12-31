export const IS_MOCK = import.meta.env.VITE_ENABLE_MOCK === 'true';

export const IS_LOCAL = import.meta.env.VITE_START_ENV === 'local';
export const IS_DEV = import.meta.env.VITE_START_ENV === 'dev';
export const IS_STAGING = import.meta.env.VITE_START_ENV === 'staging';
export const IS_PROD = import.meta.env.VITE_START_ENV === 'prod';

export const IS_MAINNET = import.meta.env.VITE_BLOCKCHAIN_ENV === 'mainnet';

// 개발계 환경
export const DEV_ENV = IS_MOCK || IS_LOCAL || IS_DEV;
// 운영계 환경
export const PROD_ENV = IS_PROD || IS_STAGING;

// API ENDPOINT
export const API_URL = IS_PROD ? '' : IS_STAGING ? '' : IS_DEV ? '' : 'http://localhost:8080';

// FE ENDPOINT
export const BASE_URL = IS_PROD ? '' : IS_STAGING ? '' : IS_DEV ? '' : 'http://localhost:3000';

// ASSET ENDPOINT
export const ASSET_URL = '';

export const BREAKPOINT = {
  SM: 0,
  MD: 848,
  LG: 1280,

  MEDIA_SM: '(min-width: 0px)',
  MEDIA_MD: '(min-width: 848px)',
  MEDIA_LG: '(min-width: 1280px)',
};

// CHAIN ID
type Chain = 'ETH' | 'GOERLI';
export const CHAIN_ID: Record<Chain, number> = {
  ETH: 1,
  GOERLI: 5,
};
export const DEFAULT_CHAIN_ID = IS_MAINNET ? CHAIN_ID.ETH : CHAIN_ID.GOERLI;

type Contract = 'CONTRACT_NAME';
export const CONTRACT_ADDRESS: Record<Contract, `0x${string}`> = {
  CONTRACT_NAME: IS_MAINNET ? '0x' : '0x',
};

export const SEED = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

// TODO : 당첨 전후로 변경하기
export const RAFFLED = false;

export const POPUP_ID = {
  SUCCESS: 'success',
  CONNECT: 'connect',
  CLAIM: 'claim',
};
export const NET = 'wss://s.altnet.rippletest.net:51233';
