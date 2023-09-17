import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["src/**/*.js"], // Add any other patterns as needed
  },

  // esbuild: {
  //   loader: "tsx", // OR "jsx"
  //   include: [
  //     // Add this for business-as-usual behaviour for .jsx and .tsx files
  //     "src/**/*.jsx",
  //     "src/**/*.tsx",
  //     "node_modules/**/*.jsx",
  //     "node_modules/**/*.tsx",
  //     "src/**/*.js",
  //     "node_modules/**/*.js",
  //   ]
  // }
});
