const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const spacing = [...[...Array(1001).keys()], 0.5];

const convertSpacing = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}px`;
    return res;
  }, {});
const convertSpacingWithoutPx = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}`;
    return res;
  }, {});

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '0px',
      md: '848px',
      lg: '1280px',
    },

    extend: {
      colors: {
        ...defaultTheme.colors,

        black: '#080117',
        white: '#ffffff',

        pink: '#FF36FF',
        purple: '#9744FF',
        mint: '#4EF6D8',
        blue: '#3358FF',
        darkblue: '#2547E0',

        gray5: '#1F1A37',
        gray4: '#313D65',
        gray3: '#787C9C',
        gray2: '#B7B9CE',
        gray15: '#DEE3EE',
        gray1: '#e5e7ec',
        gray0: '#F9FAFD',
      },

      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
        abril: ['Abril Fatface', ...defaultTheme.fontFamily.sans],
        Dela: ['Dela Gothic One', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        ...convertSpacing([...Array(101).keys()]),
      },

      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      spacing: {
        ...defaultTheme.spacing,
        ...convertSpacing(spacing),
      },

      width: theme => ({ ...defaultTheme.width, ...theme('spacing') }),
      height: theme => ({ ...defaultTheme.height, ...theme('spacing') }),

      minWidth: theme => ({ ...defaultTheme.minWidth, ...theme('spacing') }),
      maxWidth: theme => ({ ...defaultTheme.maxWidth, ...theme('spacing') }),

      minHeight: theme => ({ ...defaultTheme.minHeight, ...theme('spacing') }),
      maxHeight: theme => ({ ...defaultTheme.maxHeight, ...theme('spacing') }),

      lineHeight: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),

      borderRadius: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),
      borderWidth: theme => ({
        ...defaultTheme.borderWidth,
        ...convertSpacing([...Array(21).keys()]),
      }),

      animation: theme => ({
        ...defaultTheme.animation,
      }),
      keyframes: theme => ({
        ...defaultTheme.keyframes,
      }),

      boxShadow: theme => ({
        ...defaultTheme.boxShadow,
      }),

      zIndex: theme => ({
        ...defaultTheme.zIndex,
        ...convertSpacingWithoutPx([...Array(101).keys()]),
      }),
    },
  },
  truncate: {
    lines: { 2: '2', 3: '3', 4: '4' },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      borderColor: ['disabled', 'active'],
      textColor: ['disabled', 'active'],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({});
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.absolute-center': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.absolute-center-x': {
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.absolute-center-y': {
          top: '50%',
          transform: 'translateY(-50%)',
        },

        '.clickable': {
          cursor: 'pointer',
        },
        '.non-clickable': {
          cursor: 'not-allowed',
          userSelect: 'none',
        },
        '.transition-color': {
          transitionProperty: 'background-color,border-color,color,fill,stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.main-gradient': {
          background: 'linear-gradient(315deg, #9744FF 0%, #FF36FF 100%)',
        },
        '.bg-none': {
          background: 'none',
        },
        '.box-shadow': {
          boxShadow: '0px 0px 24px 0px #ff36ff',
        },

        '.font-r-12': {
          fontSize: '12px',
          lineHeight: '20px',
          fontWeight: 400,
          fontFamily: 'Pretendard',
        },
        '.font-r-14': {
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: 400,
          fontFamily: 'Pretendard',
        },
        '.font-r-16': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 400,
          fontFamily: 'Pretendard',
        },

        '.font-b-14': {
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: 700,
          fontFamily: 'Pretendard',
        },
        '.font-b-16': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 700,
          fontFamily: 'Pretendard',
        },
        '.font-b-18': {
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: 700,
          fontFamily: 'Pretendard',
        },
        '.font-b-20': {
          fontSize: '20px',
          lineHeight: '28px',
          fontWeight: 700,
          fontFamily: 'Pretendard',
        },

        '.font-dela-b-16': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 400,
          fontFamily: 'Dela Gothic One',
        },
        '.font-dela-b-28': {
          fontSize: '28px',
          lineHeight: '38px',
          fontWeight: 400,
          fontFamily: 'Dela Gothic One',
        },
        '.font-dela-b-40': {
          fontSize: '40px',
          lineHeight: '48px',
          fontWeight: 400,
          fontFamily: 'Dela Gothic One',
        },

        '.font-abril-22': {
          fontSize: '22px',
          lineHeight: '20px',
          fontWeight: 400,
          fontFamily: 'Abril Fatface',
        },

        '.font-abril-88': {
          fontSize: '88px',
          lineHeight: '119px',
          fontWeight: 400,
          fontFamily: 'Abril Fatface',
        },
      });

      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
