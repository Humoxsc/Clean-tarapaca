/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
      },
      colors: {
        navy: {
          50:  '#eef4fb',
          100: '#d4e3f5',
          500: '#1d4e89',
          600: '#163d6e',
          700: '#102e54',
          800: '#0B2545',
          900: '#071a33',
        },
        brand: {
          green: '#16a34a',
          greenDark: '#15803d',
          greenLight: '#22c55e',
        },
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
