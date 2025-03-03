import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
      tailwindcss,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "object-curly-spacing": ["warn", "always"],
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none",
        },
      ],
      "max-len": [
        "warn",
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      "prettier/prettier": [
        "warn",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "none",
          endOfLine: "auto",
        },
      ],
      "comma-dangle": "off",
      "react/jsx-key": "error",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/jsx-boolean-value": "warn",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "warn",
      "react/destructuring-assignment": "off",
      "no-empty-pattern": "off",
      "no-case-declarations": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
