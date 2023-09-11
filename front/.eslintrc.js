module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ["node_modules", "dist", "build"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "import", "@typescript-eslint"],
  root: true,
  rules: {
    indent: ["warn", 2],
    "linebreak-style": [0, "unix"],
    quotes: ["off"],
    "comma-dangle": "off",
    semi: ["off"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": [2, { caseSensitive: false }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "import/order": [
      0,
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
}