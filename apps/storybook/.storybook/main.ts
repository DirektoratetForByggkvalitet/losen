import { createRequire } from "module";
import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

// Resolve absolute paths so Storybook finds packages that npm workspaces
// leave nested in apps/storybook/node_modules instead of hoisting
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;
