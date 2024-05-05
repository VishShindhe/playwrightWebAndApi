import { config } from "dotenv";
import { defineConfig, devices } from "@playwright/test";

//staging ==> .env.staging
//to run with specific environment from cmd line
// ENVIRONMENT=staging npx playwright test --headed
if (process.env.ENVIRONMENT) {
  console.log("ENIRONMENT: ", process.env.ENVIRONMENT);
  config({
    path: `.env.${process.env.ENVIRONMENT}`,
    override: true,
  });
} else {
  config();
}

export default defineConfig({
  testDir: "./e2e/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
