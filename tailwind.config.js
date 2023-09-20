/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{ts,vue}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
}
