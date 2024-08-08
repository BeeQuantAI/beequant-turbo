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
        primary: { 300: "#70bbfd", 400: "#82b9f7", 500: "#3ea3fc" ,600:"#2A2A31",800:"#232329"},
        "gary-layout-primary": "rgb(96, 95, 123)",
      },
      width: {
        "btn-w-cover": "255%",
        "400": "400px",
      },
      height: {
        "btn-h-cover": "500%",
      },
      animation: {
        "growing-bubble-tl-primary":
          "before:transition-width before:transition-height before:bg-primary-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:before:-z-50",
        "growing-bubble-tl-secondary":
          "before:transition-width before:transition-height before:bg-primary-500 hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500 before:ease-in-out hover:text-white hover:before:-z-50",
      },
    },
  },
  darkMode: "class",
};
export default config;
