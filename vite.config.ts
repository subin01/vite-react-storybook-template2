import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    polyfillModulePreload: false,
    target: "esnext",
    sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        main2: resolve(__dirname, "app2.html"),
        all: resolve(__dirname, "all.html"),
        ui: resolve(__dirname, "ui.html"),
        // ui: resolve(__dirname, "/src/ui-main.js"),
      },
      output: {
        assetFileNames: "assets/[name][extname]", // default: "assets/[name]-[hash][extname]"
        chunkFileNames: "[name].js", // Default: "[name]-[hash].js"
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    /** alias: not working with tsconfig, required for $vite dev */
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
