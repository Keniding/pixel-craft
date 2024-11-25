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
      backgroundSize: {
        'gradient-size': '400% 400%',
      },
      backgroundImage: {
        'gradient-pastel-moving': 'linear-gradient(-45deg, #FFD1DC, #A8D8EA, #CCFFD8, #E0BBE4)',
      },
      animation: {
        'gradient-move': 'gradientMove 3s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
