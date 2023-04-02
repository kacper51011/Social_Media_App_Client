import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgrPlugin from "vite-plugin-svgr";
import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { babelrc: true } }), svgrPlugin(), eslint()],
});
/// <reference types="vite-plugin-svgr/client" />
