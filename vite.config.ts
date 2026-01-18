import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    coverage: {
      provider: "v8",

      // ✅ ONLY collect coverage from TS / TSX files
      include: ["src/**/*.{ts,tsx}"],

      exclude: [
        "src/main.tsx",
      ],

      reporter: ["text", "html"],
    },
  },
});
