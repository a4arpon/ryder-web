import path from "node:path"
import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "#assets": path.resolve(__dirname, "./src/assets"),
      "#components": path.resolve(__dirname, "./src/components"),
      "#hooks": path.resolve(__dirname, "./src/hooks"),
      "#lib": path.resolve(__dirname, "./src/lib"),
      "#pages": path.resolve(__dirname, "./src/pages"),
      "#providers": path.resolve(__dirname, "./src/providers"),
      "#services": path.resolve(__dirname, "./src/services"),
      "#utils": path.resolve(__dirname, "./src/utils"),
    },
  },
})
