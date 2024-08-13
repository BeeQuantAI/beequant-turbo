import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto', sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#A5A4A9",
          100: "#858389",
          150: "#646369",
          200: "#434349",
          250: "#2a2a31",
          300: "#232329",
          350: "#1F1F24",
          400: "#1A1A1F",
          450: "#16161A",
          500: "#121214",
          550: "#101012",
          600: "#0E0E0F",
          650: "#0B0B0C",
          700: "#09090A",
          750: "#080809",
          800: "#070708",
          850: "#060606",
          900: "#050505",
          950: "#040404",
        },
        accent: {
          50: "#A8C0FF",
          100: "#92BAFF",
          150: "#81B9FF",
          200: "#76BAFF",
          250: "#70BBFD",
          300: "#55A0FF",
          350: "#46A2FF",
          400: "#3EA3FC",
          450: "#398FDA",
          500: "#337AB9",
          550: "#2C6698",
          600: "#255178",
          650: "#224768",
          700: "#1E3D58",
          750: "#1A3349",
          800: "#15283A",
          850: "#132332",
          900: "#111E2B",
          950: "#0E1923",
        },
        // Note that our main bg color is primary-250:#2a2a31, form color is primary-300:#232329
        // button light color: accent-250:"#70bbfd", darker: accent-400:"#3ea3fc"
      },
      width: {
        "btn-w-cover": "255%",
        "400": "400px",
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
export default config;
