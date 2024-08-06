import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: { 300: "#70bbfd", 400: "#82b9f7", 500: "#3ea3fc" },
        "gary-layout-primary": "rgb(96, 95, 123)",
      },
      width: {
        "btn-w-cover": "255%",
        "400": "400px",
      },
      height: {
        "btn-h-cover": "500%",
      },
    },
  },
  darkMode: "class",
};
export default config;
