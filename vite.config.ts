import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Port für die lokale Entwicklung
  },
  build: {
    outDir: "dist", // Produktions-Build-Ordner
  },
  resolve: {
    alias: {
      "@": "/src", // Alias für einfacheren Import
    },
  },
});
