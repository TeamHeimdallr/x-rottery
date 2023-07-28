import { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string;
}
export const IconLogout = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6C6 5.79289 6.06296 5.60049 6.17078 5.44089C6.23181 5.35056 6.30721 5.27074 6.39369 5.2047C6.56189 5.07628 6.77204 5 7 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H8L8 17H13C13.5523 17 14 17.4477 14 18C14 18.5523 13.5523 19 13 19H7C6.44772 19 6 18.5523 6 18V6ZM10 12C10 11.4477 10.4477 11 11 11H16.6668L14.8339 9.16711C14.4434 8.77658 14.4434 8.14342 14.8339 7.75289C15.2245 7.36237 15.8576 7.36237 16.2482 7.75289L19.7846 11.2894C20.1752 11.6799 20.1752 12.313 19.7846 12.7036C19.7788 12.7094 19.7729 12.7152 19.7669 12.7209L16.2471 16.2406C15.8566 16.6312 15.2235 16.6312 14.8329 16.2406C14.4424 15.8501 14.4424 15.2169 14.8329 14.8264L16.6593 13H11C10.4477 13 10 12.5523 10 12Z"
      fill={color ?? '#080117'}
    />
  </svg>
);
export const IconCheck = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <path
      id="Vector 2 (Stroke)"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L10 15.5858L18.2929 7.29289C18.6834 6.90237 19.3166 6.90237 19.7071 7.29289Z"
      fill={color ?? '#080117'}
    />
  </svg>
);
