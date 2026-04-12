import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["**/*.stories.*", "**/*.mdx", "**/*.test.*"],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],

  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@lordnik10/cyberkit-ui",
      formats: ["es", "cjs"],
      fileName: (format) => `@lordnik10/cyberkit-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
