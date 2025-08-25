import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs["recommended-latest"],
  ...pluginRouter.configs["flat/recommended"],
  {
    settings: {
      react: {
        version: "19.0.0",
      },
    },
  },
  {
    rules: {
      "no-console": ["warn", { allow: ["error"] }],
      "react/react-in-jsx-scope": "off",
    },
  },
  globalIgnores([
    ".nitro",
    ".tanstack",
    ".output",
    ".vinxi",
    "node_modules",
    "src/routeTree.gen.ts",
    ".vercel",
  ]),
]);
