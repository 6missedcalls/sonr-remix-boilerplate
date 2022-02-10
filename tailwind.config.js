module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#111118',
      grey: '#5858D',
      mediumGrey: '#B7B7B9',
      lightGrey: '#DBDBDC',
      snowWhite: '#F6F6F6',
      sonrBlue: '#0061FF',
      sonrSecondary: '#369FFF',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ['hover']
    }
  },
  plugins: [],
}
