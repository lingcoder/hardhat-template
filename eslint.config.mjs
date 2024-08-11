// eslint-disable-next-line strict
import mocha from "eslint-plugin-mocha";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:prettier/recommended', 'prettier'),
  {
  files: ["**/*.ts", "**/*.tsx"],
  ignores: [
    "**/node_modules",
    "**/.eslintrc*",
    "**/artifacts",
    "**/cache",
    "**/constants",
    "**/coverage",
    "lib/murky",
    "lib/openzeppelin-contracts",
    "typechain-types/*",
  ],
}, {
  plugins: {
    mocha, prettier
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.mocha,
      ...globals.jest,
      artifacts: false,
      contract: false,
      assert: false,
      web3: false,
      usePlugin: false,
      extendEnvironment: false,
    },

    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: "commonjs",
  },

  rules: {
    strict: ["error", "global"],
    "array-bracket-spacing": ["off"],

    camelcase: ["error", {
      properties: "always",
    }],

    "comma-dangle": ["error", "always-multiline"],

    "comma-spacing": ["error", {
      before: false,
      after: true,
    }],

    "dot-notation": ["error", {
      allowKeywords: true,
      allowPattern: "",
    }],

    "eol-last": ["error", "always"],
    eqeqeq: ["error", "smart"],
    "generator-star-spacing": ["error", "before"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", 120, 2],
    "no-debugger": "off",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

    "no-redeclare": ["error", {
      builtinGlobals: true,
    }],

    "no-trailing-spaces": ["error", {
      skipBlankLines: false,
    }],

    "no-undef": "error",
    "no-use-before-define": "off",
    "no-var": "error",
    "object-curly-spacing": "off",
    "prefer-const": "error",
    quotes: "off",
    semi: ["error", "always"],
    "space-before-function-paren": "off",
    "mocha/no-exclusive-tests": ["error"],
    "promise/always-return": "off",
    "promise/avoid-new": "off",
  },
}];
