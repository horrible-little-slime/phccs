// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import libram, { loadData } from "eslint-plugin-libram";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["KoLmafia/scripts", "babel.config.js", "kolmafia-polyfill.js"],
  },
  {
    plugins: {
      libram,
    },
    rules: {
      "libram/verify-constants": [
        "error",
        {
          data: await loadData(),
        },
      ],
    },
  },
);
