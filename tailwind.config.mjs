/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        sand: '#F1E9DD',
        blush: '#D9BFB2',
        'blush-soft': '#EBDCD3',
        taupe: '#7A6A58',
        charcoal: '#2E2A26',
        gold: '#B08D57',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Karla', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(46, 42, 38, 0.18)',
        lift: '0 20px 50px -16px rgba(46, 42, 38, 0.25)',
      },
      transitionTimingFunction: {
        gentle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
