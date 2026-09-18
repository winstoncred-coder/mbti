import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0c0e',
        bgAlt: '#131418',
        surface: '#1a1b1f',
        ink: '#f2efe8',
        muted: '#a09b8f',
        border: 'rgba(255,255,255,0.09)',
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
