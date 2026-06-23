/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        scribe: {
          teal: '#e02d2d',
          'teal-light': '#f05656',
          dark: '#080808',
          navy: '#0d0d0d',
          'navy-2': '#141414',
          'navy-3': '#111111',
          text: '#e0e0e0',
          muted: '#9a9a9a',
        },
      },
    },
  },
  plugins: [],
}
