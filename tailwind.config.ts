import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ebony: '#0B0B0B',
        graphite: '#111111',
        gold: '#C9A227',
        pearl: '#F5F5F5'
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        luxe: '0 20px 80px rgba(201, 162, 39, 0.16)'
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(201,162,39,0.2), transparent 58%)'
      }
    }
  },
  plugins: []
} satisfies Config;
