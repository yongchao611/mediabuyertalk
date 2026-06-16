/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f66619',
          600: '#e84c0e',
          700: '#c2410c',
        },
      },
      fontFamily: {
        sans: ['"Microsoft YaHei"', '"微软雅黑"', 'system-ui', '-apple-system', 'sans-serif'],
        nav: ['"Noto Sans SC"', '"Source Han Sans SC"', '"思源黑体"', '"Microsoft YaHei"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
