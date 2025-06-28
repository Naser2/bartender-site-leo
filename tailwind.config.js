import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        // MBOA-NYC Brand Palette
        mboa: {
          gold: '#E9B96E',
          'gold-light': '#F2C98A',
          'gold-dark': '#D4A355',
          green: '#91D18B',
          'green-light': '#A8E0A3',
          'green-dark': '#7AC373',
          violet: '#8E44AD',
          'violet-light': '#A569BD',
          'violet-dark': '#7D3C98',
          dark: '#0F0F0F',
          'dark-light': '#1A1A1A',
          'dark-soft': '#2A2A2A',
        },
        // Harmonized Neutrals
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      gradients: {
        'mboa-primary': 'linear-gradient(135deg, #E9B96E 0%, #D4A355 100%)',
        'mboa-secondary': 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
        'mboa-accent': 'linear-gradient(135deg, #91D18B 0%, #7AC373 100%)',
      },
      boxShadow: {
        'mboa-glow': '0 0 20px rgba(233, 185, 110, 0.3)',
        'mboa-soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;