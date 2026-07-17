/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0A09',
          50: '#F5F1EA',
          100: '#E7E1D6',
          200: '#C7BFAF',
          300: '#8F877A',
          400: '#5C564C',
          500: '#302C27',
          600: '#211E1B',
          700: '#17140F',
          800: '#110F0C',
          900: '#0B0A09',
        },
        pink: {
          DEFAULT: '#FF4FC3',
          light: '#FF8AD8',
          dark: '#C2308E',
        },
        violet: {
          DEFAULT: '#9D5CFF',
          light: '#B98CFF',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        body: ['"Jost"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      boxShadow: {
        pink: '0 0 40px -8px rgba(255, 79, 195, 0.4)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
