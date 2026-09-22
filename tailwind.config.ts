import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#122A1E',
        bgAlt: '#1B3A28',
        surface: '#1F4530',
        ink: '#F2EFE8',
        muted: '#9FB3A4',
        border: 'rgba(255,255,255,0.1)',
        accent: '#c98a3b',
        rose: '#b5675b',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
