/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores pastel existentes
        'pastel-pink': '#FFD1DC',
        'pastel-blue': '#A8D8EA',
        'pastel-green': '#CCFFD8',
        'pastel-yellow': '#FFFFD1',
        'pastel-purple': '#E0BBE4',

        // Colores primarios
        'primary': {
          50: '#F0F7FB',
          100: '#E1EFF7',
          200: '#C3DFF0',
          300: '#A8D8EA',
          400: '#8BCCE3',
          500: '#6EBFDC',
          600: '#509AB8',
          700: '#3D7A94',
          800: '#2B5970',
          900: '#1A3B4C',
        },
        // Color secundario (morado)
        'secondary': {
          50: '#F6F0FB',
          100: '#EDE0F7',
          200: '#E0BBE4',
          300: '#D3A6DD',
          400: '#C690D6',
          500: '#B97ACF',
          600: '#A364B8',
          700: '#824E92',
          800: '#61396C',
          900: '#402546',
        },
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
