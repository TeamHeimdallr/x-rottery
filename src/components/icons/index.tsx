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

export const IconDown = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <g id="Icon/Down">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.188 17.9823C11.8737 18.0421 11.5362 17.9504 11.2929 17.7071C11.2906 17.7049 11.2884 17.7027 11.2862 17.7004L4.22185 10.636C3.83132 10.2455 3.83132 9.61234 4.22185 9.22182C4.61237 8.83129 5.24554 8.83129 5.63606 9.22182L12 15.5858L18.3639 9.22183C18.7545 8.8313 19.3876 8.8313 19.7781 9.22183C20.1687 9.61235 20.1687 10.2455 19.7781 10.636L12.7126 17.7016C12.7108 17.7034 12.709 17.7053 12.7071 17.7071C12.5599 17.8543 12.3782 17.946 12.188 17.9823Z"
        fill={color ?? '#080117'}
      />
    </g>
  </svg>
);

export const IconArrowDown = ({ color, ...rest }: IconProps) => (
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
      d="M19.2931 12.2929C19.6837 11.9024 20.3168 11.9024 20.7074 12.2929C21.0979 12.6834 21.0979 13.3166 20.7073 13.7071L12.7071 21.7071C12.7071 21.7071 12.7071 21.7071 12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071C11.2929 21.7071 11.2929 21.7071 11.2929 21.7071L11.2929 21.7071L3.29266 13.7071C2.90213 13.3166 2.90212 12.6834 3.29264 12.2929C3.68316 11.9024 4.31632 11.9024 4.70685 12.2929L10.9998 18.5856L10.9998 2.99998C10.9998 2.44769 11.4475 1.99998 11.9998 1.99998C12.552 1.99999 12.9998 2.44771 12.9998 2.99999L12.9998 18.5861L19.2931 12.2929Z"
      fill={color ?? '#080117'}
    />
  </svg>
);

export const IconNext = ({ color, ...rest }: IconProps) => (
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
      d="M12.2929 4.70685C11.9024 4.31632 11.9024 3.68316 12.2929 3.29264C12.6834 2.90212 13.3166 2.90213 13.7071 3.29266L21.7071 11.2929C21.7071 11.2929 21.7071 11.2929 21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071C21.7071 12.7071 21.7071 12.7071 21.7071 12.7071L21.7071 12.7071L13.7071 20.7073C13.3166 21.0979 12.6835 21.0979 12.2929 20.7074C11.9024 20.3168 11.9024 19.6837 12.2929 19.2931L18.5856 13.0002L2.99999 13.0002C2.44771 13.0002 2 12.5525 2 12.0002C2 11.448 2.44772 11.0002 3.00001 11.0002L18.5861 11.0002L12.2929 4.70685Z"
      fill={color ?? '#080117'}
    />
  </svg>
);

export const IconTotal = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <g id="Icon/Total">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44771 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44771 11.4477 6 12 6Z"
        fill={color ?? '#080117'}
      />
    </g>
  </svg>
);

export const IconPercentage = ({ color, ...rest }: IconProps) => (
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
      d="M6.65657 12.3636C5.88215 12.3636 5.22222 12.1886 4.67677 11.8384C4.13131 11.4815 3.71717 10.9933 3.43434 10.3737C3.15152 9.74747 3.00673 9.02357 3 8.20202C3.00673 7.37374 3.15488 6.6431 3.44444 6.0101C3.73401 5.3771 4.15152 4.88552 4.69697 4.53535C5.24916 4.17845 5.90236 4 6.65657 4C7.43771 4 8.10438 4.17845 8.65657 4.53535C9.21549 4.88552 9.633 5.3771 9.90909 6.0101C10.1852 6.63636 10.3232 7.367 10.3232 8.20202C10.3232 9.0303 10.1818 9.75758 9.89899 10.3838C9.61616 11.0101 9.19529 11.4983 8.63636 11.8485C8.08418 12.1919 7.42424 12.3636 6.65657 12.3636ZM6.65657 10.1717C6.91919 10.1717 7.14141 10.0909 7.32323 9.92929C7.50505 9.76768 7.63973 9.54209 7.72727 9.25253C7.82155 8.95623 7.87205 8.60606 7.87879 8.20202C7.87205 7.78451 7.82492 7.42761 7.73737 7.13131C7.65657 6.82828 7.52189 6.59596 7.33333 6.43434C7.15152 6.26599 6.92593 6.18182 6.65657 6.18182C6.40067 6.18182 6.18519 6.26936 6.0101 6.44444C5.84175 6.61279 5.70707 6.84848 5.60606 7.15152C5.51178 7.45455 5.46465 7.80471 5.46465 8.20202C5.46465 8.59933 5.51178 8.94613 5.60606 9.24242C5.70707 9.53872 5.84512 9.76768 6.0202 9.92929C6.19529 10.0909 6.40741 10.1717 6.65657 10.1717ZM17.1717 20C16.404 20 15.7475 19.8215 15.202 19.4646C14.6633 19.1145 14.2492 18.6296 13.9596 18.0101C13.6768 17.3838 13.5354 16.6599 13.5354 15.8384C13.5354 15.0101 13.6801 14.2795 13.9697 13.6465C14.266 13.0135 14.6835 12.5219 15.2222 12.1717C15.7677 11.8148 16.4175 11.6364 17.1717 11.6364C17.9529 11.6364 18.6195 11.8148 19.1717 12.1717C19.7239 12.5219 20.1414 13.0135 20.4242 13.6465C20.7071 14.2727 20.8519 15.0034 20.8586 15.8384C20.8519 16.6667 20.7071 17.3939 20.4242 18.0202C20.1414 18.6465 19.7205 19.1313 19.1616 19.4747C18.6094 19.8249 17.9461 20 17.1717 20ZM17.1717 17.8182C17.4343 17.8182 17.6599 17.7374 17.8485 17.5758C18.037 17.4074 18.1751 17.1785 18.2626 16.8889C18.3502 16.5993 18.3939 16.2492 18.3939 15.8384C18.3939 15.4343 18.3502 15.0808 18.2626 14.7778C18.1751 14.468 18.037 14.2323 17.8485 14.0707C17.6667 13.9091 17.4411 13.8283 17.1717 13.8283C16.9158 13.8283 16.7003 13.9125 16.5253 14.0808C16.3502 14.2492 16.2155 14.4882 16.1212 14.798C16.0337 15.101 15.9865 15.4478 15.9798 15.8384C15.9798 16.2424 16.0303 16.5926 16.1313 16.8889C16.2323 17.1785 16.3704 17.4074 16.5455 17.5758C16.7205 17.7374 16.9293 17.8182 17.1717 17.8182ZM15.5859 4.69697H18.2727L8.21212 19.3232H5.52525L15.5859 4.69697Z"
      fill={color ?? '#080117'}
    />
  </svg>
);

export const IconPrice = ({ color, ...rest }: IconProps) => (
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
      d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H18.6465L12.6429 11.226L10.1484 8.6392C9.95994 8.44374 9.70009 8.33333 9.42857 8.33333C9.15705 8.33333 8.8972 8.44374 8.70873 8.6392L2.28016 15.3059C1.8968 15.7034 1.90831 16.3365 2.30587 16.7198C2.70342 17.1032 3.33648 17.0917 3.71985 16.6941L9.42857 10.774L11.923 13.3608C12.1115 13.5563 12.3713 13.6667 12.6429 13.6667C12.9144 13.6667 13.1742 13.5563 13.3627 13.3608L20 6.47768V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V4C22 3.44772 21.5523 3 21 3H16ZM3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z"
      fill={color ?? '#080117'}
    />
  </svg>
);

export const IconActive = ({ color, ...rest }: IconProps) => (
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
      d="M5 12C5 8.13401 8.13401 5 12 5C13.3476 5 14.6034 5.37979 15.6697 6.03769C16.1397 6.32769 16.7558 6.18175 17.0458 5.71172C17.3358 5.2417 17.1899 4.62558 16.7198 4.33559C15.3469 3.48854 13.729 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.782 21 20.6923 17.271 20.9827 12.5616C21.0167 12.0103 20.5974 11.5359 20.0462 11.5019C19.4949 11.4679 19.0205 11.8872 18.9865 12.4384C18.7607 16.0997 15.7187 19 12 19C8.13401 19 5 15.866 5 12ZM20.793 7.41421C21.1835 7.02369 21.1835 6.39052 20.793 6C20.4024 5.60948 19.7693 5.60948 19.3788 6L11.7928 13.5858L8.70711 10.5C8.31658 10.1095 7.68342 10.1095 7.29289 10.5C6.90237 10.8905 6.90237 11.5237 7.29289 11.9142L11.0857 15.7071C11.4763 16.0976 12.1094 16.0976 12.4999 15.7071L20.793 7.41421Z"
      fill={color ?? '#080117'}
    />
  </svg>
);

export const IconLocked = ({ color, ...rest }: IconProps) => (
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
      d="M15 7V9H9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM7 9V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9H18.2222C19.2041 9 20 9.83147 20 10.8571V20.1429C20 21.1685 19.2041 22 18.2222 22H5.77778C4.79594 22 4 21.1685 4 20.1429V10.8571C4 9.83147 4.79594 9 5.77778 9H7ZM17 11H7H6V20H18V11H17ZM13 15.6181C13.3069 15.3434 13.5 14.9443 13.5 14.5C13.5 13.6716 12.8284 13 12 13C11.1716 13 10.5 13.6716 10.5 14.5C10.5 14.9443 10.6931 15.3434 11 15.6181V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.6181Z"
      fill={color ?? '#080117'}
    />
  </svg>
);

export const IconCancle = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g id="Icon/Cancel">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63618 16.9497C5.24566 17.3403 5.24566 17.9734 5.63618 18.364C6.02671 18.7545 6.65987 18.7545 7.0504 18.364L12.0001 13.4142L16.9499 18.364C17.3404 18.7545 17.9736 18.7545 18.3641 18.364C18.7546 17.9734 18.7546 17.3403 18.3641 16.9498L13.4143 12L18.3641 7.05025C18.7546 6.65972 18.7546 6.02656 18.3641 5.63603C17.9736 5.24551 17.3404 5.24551 16.9499 5.63603L12.0001 10.5858L7.05037 5.63605C6.65984 5.24553 6.02668 5.24553 5.63615 5.63605C5.24563 6.02657 5.24563 6.65974 5.63615 7.05026L10.5859 12L5.63618 16.9497Z"
        fill={color ?? '#080117'}
      />
    </g>
  </svg>
);

export const IconXrottery = ({ color, ...rest }: IconProps) => (
  <svg
    width="262"
    height="48"
    viewBox="0 0 262 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <path
      d="M27.9378 17.1963L42.1253 35.267H28.0836L21.087 25.7459L14.0418 35.267H0L14.1875 17.1963L0.485875 0H14.5277L21.087 8.74389L27.5977 0H41.6395L27.9378 17.1963Z"
      fill={color ?? 'white'}
    />
    <path
      d="M83.7105 11.7557C83.7105 14.5731 83.0141 16.9534 81.6213 18.8965C80.2608 20.8396 77.9124 22.2483 74.5761 23.1227C74.9648 23.6409 75.2401 24.0457 75.4021 24.3372L83.2732 35.267H70.0574C68.6322 32.6115 66.381 28.8548 63.3038 23.9971H56.1614V35.267H44.6948C44.9539 28.9844 45.0835 23.1065 45.0835 17.6335C45.0835 12.1605 44.9539 6.28265 44.6948 0H56.1614V0.0485756H66.1219C72.665 0.0485756 77.2322 1.10108 79.8235 3.20609C82.4149 5.3111 83.7105 8.16096 83.7105 11.7557ZM56.1614 9.37539V14.9132H62.7207C65.474 14.9132 67.5471 14.8322 68.9399 14.6703C70.3652 14.476 71.3531 14.1845 71.9038 13.7959C72.4544 13.4073 72.7298 12.8406 72.7298 12.0957C72.7298 11.3833 72.4706 10.8327 71.9524 10.4441C71.4341 10.0555 70.4623 9.7802 69.0371 9.61828C67.6119 9.45635 65.5064 9.37539 62.7207 9.37539H56.1614Z"
      fill={color ?? 'white'}
    />
    <path
      d="M100.814 35.7528C95.2747 35.7528 91.1934 34.4898 88.5697 31.9638C85.9783 29.4054 84.6827 26.0536 84.6827 21.9083C84.6827 17.8602 85.9783 14.5732 88.5697 12.0471C91.1934 9.52112 95.2747 8.25811 100.814 8.25811C104.539 8.25811 107.648 8.87343 110.143 10.1041C112.669 11.3023 114.532 12.9377 115.73 15.0103C116.929 17.0506 117.528 19.3499 117.528 21.9083C117.528 26.0859 116.135 29.4378 113.349 31.9638C110.596 34.4898 106.417 35.7528 100.814 35.7528ZM101.008 27.4947C103.114 27.4947 104.685 26.9927 105.721 25.9888C106.758 24.9849 107.276 23.6409 107.276 21.9569C107.276 20.37 106.758 19.0746 105.721 18.0707C104.685 17.0344 103.114 16.5162 101.008 16.5162C98.9026 16.5162 97.364 17.0182 96.3922 18.0221C95.4205 19.0261 94.9346 20.3376 94.9346 21.9569C94.9346 23.6409 95.4205 24.9849 96.3922 25.9888C97.364 26.9927 98.9026 27.4947 101.008 27.4947Z"
      fill={color ?? 'white'}
    />
    <path
      d="M142.955 17.4392C139.975 17.2449 137.254 17.0992 134.792 17.002L134.744 22.1512C134.744 23.9 135.116 25.2763 135.861 26.2802C136.639 27.2518 137.999 27.7376 139.943 27.7376C140.688 27.7376 141.4 27.6728 142.08 27.5433C141.951 28.7415 141.886 29.9559 141.886 31.1865C141.886 31.7695 141.918 33.0972 141.983 35.1699C140.558 35.429 139.36 35.5909 138.388 35.6556C137.416 35.7204 136.153 35.7528 134.598 35.7528C130.808 35.7528 128.12 34.846 126.532 33.0325C124.978 31.1865 124.2 28.6281 124.2 25.3573L124.249 17.1477C122.726 17.2125 121.139 17.3097 119.487 17.4392V8.84104C121.172 8.84104 122.597 8.30669 123.763 7.238C124.929 6.1693 125.625 4.8901 125.852 3.4004H139.068C137.416 5.66734 135.586 7.48088 133.578 8.84104H142.955V17.4392Z"
      fill={color ?? 'white'}
    />
    <path
      d="M167.866 17.4392C164.886 17.2449 162.165 17.0992 159.703 17.002L159.654 22.1512C159.654 23.9 160.027 25.2763 160.772 26.2802C161.549 27.2518 162.91 27.7376 164.853 27.7376C165.598 27.7376 166.311 27.6728 166.991 27.5433C166.861 28.7415 166.797 29.9559 166.797 31.1865C166.797 31.7695 166.829 33.0972 166.894 35.1699C165.469 35.429 164.27 35.5909 163.298 35.6556C162.327 35.7204 161.063 35.7528 159.509 35.7528C155.719 35.7528 153.03 34.846 151.443 33.0325C149.888 31.1865 149.111 28.6281 149.111 25.3573L149.159 17.1477C147.637 17.2125 146.05 17.3097 144.398 17.4392V8.84104C146.082 8.84104 147.507 8.30669 148.673 7.238C149.84 6.1693 150.536 4.8901 150.763 3.4004H163.979C162.327 5.66734 160.496 7.48088 158.488 8.84104H167.866V17.4392Z"
      fill={color ?? 'white'}
    />
    <path
      d="M196.469 23.1227H180.629C180.888 24.5477 181.52 25.7135 182.524 26.6203C183.561 27.4947 185.018 27.9319 186.897 27.9319C188.257 27.9319 189.537 27.6728 190.735 27.1546C191.934 26.6041 192.889 25.8431 193.602 24.8715C195.772 25.9402 198.655 27.0899 202.251 28.3205C201.247 30.5874 199.416 32.401 196.76 33.7611C194.137 35.0889 190.703 35.7528 186.46 35.7528C180.953 35.7528 176.872 34.4898 174.216 31.9638C171.592 29.4054 170.28 26.0536 170.28 21.9083C170.28 17.8602 171.592 14.5732 174.216 12.0471C176.839 9.52112 180.921 8.25811 186.46 8.25811C189.764 8.25811 192.63 8.80866 195.06 9.90974C197.489 11.0108 199.352 12.5491 200.647 14.5246C201.943 16.4677 202.591 18.7022 202.591 21.2282C202.591 22.0702 202.558 22.7017 202.494 23.1227H196.469ZM187.14 15.5933C185.52 15.5933 184.192 15.9009 183.156 16.5162C182.119 17.1315 181.39 17.9736 180.969 19.0422H192.436C192.047 18.0059 191.416 17.1801 190.541 16.5648C189.667 15.9171 188.533 15.5933 187.14 15.5933Z"
      fill={color ?? 'white'}
    />
    <path
      d="M217.245 15.9333C218.606 11.0432 221.991 8.59816 227.4 8.59816C228.339 8.59816 229.246 8.66293 230.121 8.79247L228.566 19.6738C226.234 18.7994 224.323 18.3622 222.833 18.3622C220.986 18.3622 219.626 18.9127 218.751 20.0138C217.877 21.1149 217.44 22.5884 217.44 24.4343V24.3857L217.391 27.5918C217.391 29.8912 217.456 32.4496 217.585 35.267H205.973C206.232 30.6036 206.362 26.1993 206.362 22.054C206.362 17.9088 206.232 13.4721 205.973 8.74389C208.111 8.84104 209.747 8.88962 210.88 8.88962C212.079 8.88962 213.715 8.84104 215.788 8.74389L217.245 15.9333Z"
      fill={color ?? 'white'}
    />
    <path
      d="M262 8.74389L260.882 11.5614C257.805 19.7547 254.582 27.6566 251.214 35.267C249.464 39.1532 246.938 42.2621 243.634 44.5938C240.33 46.9579 236.184 48.0914 231.196 47.9942C230.58 45.3063 230.062 43.2013 229.641 41.6792C229.252 40.1895 228.734 38.6836 228.086 37.1615C229.867 37.5825 231.536 37.793 233.09 37.793C235.617 37.793 237.625 37.2587 239.115 36.19C237.949 32.7248 236.573 29.0006 234.985 25.0172C233.398 21.0339 231.098 15.6095 228.086 8.74389H239.601C239.99 10.3631 240.524 12.2414 241.205 14.3788C241.885 16.5162 242.565 18.5727 243.245 20.5481C243.44 21.1635 243.747 22.1026 244.168 23.3656C244.622 24.5962 244.978 25.6326 245.237 26.4746L246.501 22.637C248.93 15.6095 250.371 10.9784 250.825 8.74389H262Z"
      fill={color ?? 'white'}
    />
  </svg>
);
