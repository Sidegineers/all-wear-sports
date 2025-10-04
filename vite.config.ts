import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/all-wear-sports/", // Must match your repository name
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  }
});