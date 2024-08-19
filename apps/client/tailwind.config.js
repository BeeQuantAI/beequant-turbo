/** @type {import('tailwindcss').Config} */
import color from "tailwindcss/colors";

const primary = {
  50: "#F4F4F4",
  100: "#CACACC",
  200: "#A0A0A3",
  300: "#77777A",
  400: "#4D4D52",
  500: "#2a2a31",
  600: "#232329",
  700: "#161619",
  800: "#0F0F12",
  900: "#09090A",
  950: "#020202",
};

const accent = {
  50: "#F5FAFF",
  100: "#D0E9FF",
  200: "#ABD8FF",
  300: "#86C6FE",
  400: "#70bbfd",
  500: "#3EA3FC",
  600: "#3484CB",
  700: "#29659A",
  800: "#1D466A",
  900: "#11273B",
  950: "#04080C",
};

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: ["11px", "15px"],
      sm: ["12px", "16px"],
      base: ["13px", "1.6"],
      md: ["14px", "1.5"],
      lg: ["20px", "32px"],
      xl: ["24px", "32px"],
      "2xl": ["28px", "normal"],
      "3xl": ["30px", "24px"],
    },
    extend: {
      screens: { sm: "480px" },
      fontFamily: {
        sans: ["'Roboto', sans-serif"],
      },
      textColor: {
        primary: {
          100: "#dddddd",
          200: "#bbbbc2", // hsl(240, 5%, 70%)
          300: "#999999", //hsl(240, 5%, 60%)
          400: "#b1c3c8", // hsl(200, 10%, 70%) ??????
          600: "#787985", // hsl(240, 5%, 47%)
          700: "#646777", // hsl(240, 5%, 40%)
          900: "#555555", //hsl(240, 5%, 34%)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          ...color.zinc,
          50: "#FFFFFF",
          100: "#F2F4F7",
          200: "#Eff1f5",
          600: "#333246", // hsl(240, 5%, 14%)
          700: "#38373f", // hsl(240, 5%, 15%)
          800: "#2a2a31", // hsl(240, 5%, 10%)
          900: "#232329", // hsl(240, 5%, 7%)
        },
        accent: {
          50: "#fafbfe", // hsl(225,67%,99%)
          100: "#D0E9FF", // hsl(208,100%,91%)
          200: "#ABD8FF", // hsl(208,100%,84%)
          300: "#87c3f7", // hsl(208,88%,75%)
          400: "#70bbfd", // hsl(208,97%,72%)
          500: "#57abf4", // hsl(208,88%,65%)
          600: "#40a4fc", // hsl(208,97%,62%)
        },
        error: color.red,
      },
      boxShadow: {
        inset: "inset 0 0 0 1px",
        "inset-2": "inset 0 0 0 2px",
        header: "0 2px 15px 0 rgba(0, 0, 0, 0.05)",
        sidebar: "0 1px 30px 1px rgba(0, 0, 0, 0.11)",
        settingPage: "0 10px 30px 1px rgba(0,0,0,0.06)",
      },
      width: {
        "btn-w-cover": "255%",
        400: "400px",
        "sidebar-collapsed": "var(--sidebar-width-collapsed)",
        "sidebar-expanded": "var(--sidebar-width-expanded)",
      },
      height: {
        inherit: "inherit",
        "btn-h-cover": "500%",
      },
      spacing: {
        header: "var(--header-height)",
        "sidebar-collapsed": "var(--sidebar-width-collapsed)",
        "sidebar-expanded": "var(--sidebar-width-expanded)",
      },
      animation: {
        "growing-bubble-tl-primary":
          "before:transition-width before:transition-height before:bg-primary-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        "growing-bubble-tl-secondary":
          "before:transition-width before:transition-height before:bg-primary-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
        dropdown: "dropdown 0.3s ease-in-out infinite",
      },
      keyframes: {
        dropdown: {
          from: { "grid-template-rows": "0fr" },
          to: { "grid-template-rows": "1fr" },
        },
      },
    },
  },
  darkMode: "class",
};
