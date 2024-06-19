/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class"],
  content: [
    "./index.html",
    "./public/index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      /**
        Bootstrap 中的断点定义：
        xs (extra small): <576px
        sm (small): ≥576px
        md (medium): ≥768px
        lg (large): ≥992px
        xl (extra large): ≥1200px
        xxl (extra extra large): ≥1400px

        Tailwind CSS 中，默认的断点配置如下：
        sm: ≥640px
        md: ≥768px
        lg: ≥1024px
        xl: ≥1280px
        2xl: ≥1536px

      //  */
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "l-primary": "var(--primary-color)",
        "l-surface": "var(--surface-ground)",
        "l-text": "var(--text-color)",
      },
    },
  },
  plugins: [
    // {
    //   "postcss-import": {},
    //   tailwindcss: {},
    //   autoprefixer: {},
    // },
  ],
};
