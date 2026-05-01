/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activer le mode sombre basé sur la classe `dark`
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'no-scroll': { raw: '(overflow-x: hidden)' },
        '3xl': '1990px', // Ajoute le breakpoint 3xl ici
      },
      fontFamily: {
        Tropical: ['"Tropical"', 'cursive'], // Ajoute ta police ici
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
