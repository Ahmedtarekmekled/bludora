import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["gsap", "three", "motion/react", "framer-motion"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animations: ["gsap", "motion/react", "framer-motion"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          ui: ["lucide-react"],
        },
      },
    },
    target: "es2015",
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 4173,
  },
  base: "/",
});
