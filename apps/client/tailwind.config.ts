import sharedConfig from "@beequant/tailwind-config/tailwind.config";
import { Config } from "tailwindcss";

const config: Config = {
  presets: [sharedConfig],
  content: ["./src/**/*.tsx"],
};

export default config;
