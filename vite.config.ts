import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/test-assignment-zeely/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
