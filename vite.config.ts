/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
  plugins: [react({ babel: { babelrc: true } }), svgrPlugin(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/utils/tests/setup.ts",
  },
});

/// <reference types="vite-plugin-svgr/client" />
