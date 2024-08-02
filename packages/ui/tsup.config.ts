import { exec } from "child_process";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  clean: true,
  format: ["esm"],
  external: ["react", "react-dom"],
  async onSuccess() {
    exec("yarn tsc --emitDeclarationOnly");
  },
});
