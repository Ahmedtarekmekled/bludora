import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
    target: "es2018",
    sourcemap: false,
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
