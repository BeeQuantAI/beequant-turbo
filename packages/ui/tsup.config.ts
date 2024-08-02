import { defineConfig } from "tsup";
import { exec } from "child_process";
export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: false,
  clean: true,
  format: ["esm"],
  external: ["react", "react-dom"],
  async onSuccess() {
    exec("yarn tsc --emitDeclarationOnly");
  },
});
