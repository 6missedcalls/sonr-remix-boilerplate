module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: {
        'sonrBlue': {
          DEFAULT: '#0061FF',
          '50': '#B8D3FF',
          '100': '#A3C6FF',
          '200': '#7AADFF',
          '300': '#5294FF',
          '400': '#297AFF',
          '500': '#0061FF',
          '600': '#004CC7',
          '700': '#00368F',
          '800': '#002157',
          '900': '#000C1F'
        },
        'sonrSecondary': {  DEFAULT: '#369FFF',  '50': '#EEF7FF',  '100': '#D9EDFF',  '200': '#B0D9FF',  '300': '#88C6FF',  '400': '#5FB2FF',  '500': '#369FFF',  '600': '#0084FD',  '700': '#0067C5',  '800': '#004A8D',  '900': '#002C55'},
        sonrSecondary: '#369FFF',
        transparent: 'transparent',
        black: '#111118',
        grey: '#5858D',
        mediumGrey: '#B7B7B9',
        lightGrey: '#DBDBDC',
        snowWhite: '#F6F6F6',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ['hover']
    }
  },
  plugins: [
  
  ],
}
