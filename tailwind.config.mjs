// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          50:  "#fdf9f5",
          100: "#f8f1e9",
          200: "#f1e4d4",
          300: "#e9d6be",
          400: "#e3c9aa",
          500: "#ddbc96",
          600: "#d3ab7e",
          700: "#c19567",
          800: "#a97f52",
          900: "#8c6742",
          950: "#634931",
          DEFAULT: "#E3D1BB", // neutral claro
        },
        "base-dark": {
          50:  "#c9c0b8",
          100: "#a99f96",
          200: "#887f77",
          300: "#6f665e",
          400: "#5d564d",
          500: "#4f4740",
          600: "#443d36",
          700: "#3b342f",
          800: "#332c28",
          900: "#2a231f",
          950: "#1b1512",
          DEFAULT: "#393027", // neutral oscuro
        },
        primary: {
          50:  "#e7f2f2",
          100: "#c8e0e1",
          200: "#a6cdcf",
          300: "#7db3b6",
          400: "#559a9d",
          500: "#317d81",
          600: "#186164",
          700: "#104f51",
          800: "#0f4a4e", // color original
          900: "#0c3a3d",
          950: "#072225",
          DEFAULT: "#0F4A4E", // principal
        },
        accent: {
          50:  "#fef8ec",
          100: "#fbeccd",
          200: "#f7dcaa",
          300: "#f2c77d",
          400: "#edb453",
          500: "#dca03f",
          600: "#bd8230",
          700: "#a16b27",
          800: "#87571e",
          900: "#6b4214",
          950: "#3d2609",
          DEFAULT: "#D59531", // acento
        },
        secondary: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          DEFAULT: "#1eadff",
          500: "#1eadff",
          600: "#068fff",
          700: "#007bff",
          800: "#085ec5",
          900: "#0d519b",
          950: "#0e315d",
        },
        cta: {
          50: "#ffffe7",
          100: "#feffc1",
          200: "#fffd86",
          300: "#fff441",
          400: "#ffe60d",
          DEFAULT: "#ffd700",
          500: "#ffd700",
          600: "#d19e00",
          700: "#a67102",
          800: "#89580a",
          900: "#74480f",
          950: "#442604",
        },
      },
      screens: {
        midmd: "880px",
      },
      boxShadow: {
        aesthetic: "0 3px 10px rgb(0,0,0,0.2)",
        dark: "inset 0 1px 0 0 #ffffff0d",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
