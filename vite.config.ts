import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.riv"],
  // TODO: is this necessary / helpful?
  optimizeDeps: {
    include: ["@rive-app/canvas"],
  },
});
