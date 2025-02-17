import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-react-swc";
import inject from "@rollup/plugin-inject";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    inject({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  define: {
    "process.env": {},
  },
});
