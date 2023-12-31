/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      primaryColor: 'var(--primary-color)',
      dangerText: 'var(--danger-color)',
      subTitle: '#969799',
      spanColor: '#eeeeee',
      borderColor: '#e9e9e9',
      white: '#fff',
    },
    margin: {
      0: '0px',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      30: '30px',
      40: '40px',
      50: '50px',
    },
    padding: {
      0: '0px',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      30: '30px',
      40: '40px',
      50: '50px',
    },
    borderWidth: {
      1: '1rpx',
      2: '2rpx',
    },
    width: {},
    height: {},
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
