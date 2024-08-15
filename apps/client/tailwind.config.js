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
    extend: {
      fontFamily: {
        sans: ["'Roboto', sans-serif"],
      },
      textColor: {
        primary: {
          100: "#dddddd",
          300: "#999999",
          700: "#646777",
          900: "#555555",
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
          800: "#2a2a31",
          900: "#232329",
        },
        accent: {
          300: "#87c3f7",
          400: "#57abf4",
          500: "#70bbfd",
          600: "#40a4fc",
        },
      },
      boxShadow: {
        inset: "inset 0 0 0 1px",
        "inset-2": "inset 0 0 0 2px",
      },
      width: {
        "btn-w-cover": "255%",
        400: "400px",
        sidebar: "256px",
      },
      height: {
        inherit: "inherit",
        header: "64px",
        "btn-h-cover": "500%",
      },
      spacing: {
        header: "64px",
        sidebar: "256px",
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
