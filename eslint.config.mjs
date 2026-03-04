import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser
    }
  },

  js.configs.recommended,
  ...tseslint.configs.recommended
]);