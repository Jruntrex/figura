/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defense: {
          DEFAULT: '#FF0000', // Твій фірмовий червоний
          dim: 'rgba(255, 0, 0, 0.1)',
          glow: 'rgba(255, 0, 0, 0.5)',
        },
        carbon: {
          DEFAULT: '#050505', // Глибокий чорний
          light: '#1a1a1a',
        }
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Rajdhani', 'sans-serif'], // Можна зробити дефолтним
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
