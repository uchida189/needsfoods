import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'base': '#fff6de',
        'main-1': '#fd6161',
        'main-2': '#88c54b',
        'main-3': '#eea643',
        'sub': '#603813',
        'text-dark': '#2A2424',
        'text-light': '#fff6de',
      },
      fontSize: {
        'headline-1': '2rem', // 32px
        'headline-2': '1.5rem', // 24px
        'body-1': '1rem', // 16px
        'body-2': '0.875rem', // 14px
        'label-1': '0.75rem', // 12px
        'label-2': '0.6875rem', // 11px
      },
    },
  },
  plugins: [],
};
export default config;
