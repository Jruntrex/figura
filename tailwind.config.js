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
          DEFAULT: '#FF0000', // Твій основний червоний
          dim: 'rgba(255, 0, 0, 0.1)', // Для фонів
          glow: 'rgba(255, 0, 0, 0.5)', // Для світіння
        },
        carbon: {
          DEFAULT: '#050505', // Основний чорний
          light: '#1a1a1a',   // Світліший чорний для карток
        }
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}