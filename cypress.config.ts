import { defineConfig } from "cypress";

const port = process.env.BASE_URL_PORT;

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: `http://localhost:${port}`,
    setupNodeEvents() {},
  },
  video: false,
  fixturesFolder: false,
});
