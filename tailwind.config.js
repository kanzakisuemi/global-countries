/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lilac-grey': '#F5EFFF',
        'sky-lilac': '#E5D9F2',
        'cool-lilac': '#CDC1FF',
        'ice': 'F5F5F5',
        'mint': {
          100: '#F2F9F6',
          200: '#E9EFEC',
          300: '#C4DAD2',
          400: '#6A9C89',
        },
      },
    },
  },
  plugins: [],
}

