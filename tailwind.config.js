/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFD1DC',
        'pastel-blue': '#A8D8EA',
        'pastel-green': '#CCFFD8',
        'pastel-yellow': '#FFFFD1',
        'pastel-purple': '#E0BBE4',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(to right, #FFD1DC, #A8D8EA, #CCFFD8)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
