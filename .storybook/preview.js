// Global imports for Storybook, won't work on preview-head while build-storybook
import "@/styles/index.css";
import "@/ui-main.js";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
