/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        265: '1060px',
      },
      height: {
        265: '1060px',
      },
      colors: {
        tintWhite: '#F5F6FB',
        tintBlack: '#292929',
        gradientPurple: '#A800FF',
        gradientBlue: '#2B62FF',
        darkPurple: '#1C0E4C',
        lightBlue: '#D1E5FF',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
