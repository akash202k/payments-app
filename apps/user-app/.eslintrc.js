/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  tsconfigRootDir: __dirname, // was reason for error 
  parserOptions: {
    project: true,
  },
};
