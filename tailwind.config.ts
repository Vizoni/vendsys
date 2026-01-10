import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ========== FONT FAMILY ========== */
      fontFamily: {
        'sans-primary': [
          'Hurme Geometric Sans 3',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },

      /* ========== FONT SIZE (Titles) ========== */
      fontSize: {
        /* Titles - Scale 1.25 based */
        'title-xl': ['94px', { lineHeight: '1.25', letterSpacing: '0.1em' }],
        'title-lg': ['75px', { lineHeight: '1.25', letterSpacing: '0.1em' }],
        'title-md': ['60px', { lineHeight: '1.25', letterSpacing: '0.1em' }],
        'title-sm': ['48px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'title-xs': ['40px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'title-2xs': ['32px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'title-3xs': ['24px', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'title-4xs': ['20px', { lineHeight: '1.5', letterSpacing: '0.1em' }],

        /* Body Text */
        'body-lg': ['20px', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-md': ['18px', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-sm': ['16px', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-xs': ['14px', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-2xs': ['12px', { lineHeight: '1.75', letterSpacing: '0' }],
      },

      /* ========== LINE HEIGHT (Leading) ========== */
      lineHeight: {
        'title': '1.25',
        'title-tight': '1.4',
        'body': '1.75',
      },

      /* ========== LETTER SPACING (Tracking) ========== */
      letterSpacing: {
        'title': '0.1em',
        'body': '0',
      },

      /* ========== FONT WEIGHT ========== */
      fontWeight: {
        light: '300',
        regular: '400',
        semibold: '600',
        bold: '700',
      },

      /* ========== SPACING SYSTEM (8pt Grid) ========== */
      spacing: {
        'space-section': '40px',
        'space-block': '32px',
        'space-inline': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
