/**
 * Advanced custom Stylelint rule overrides
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  rules: { ...base.rules, "max-empty-lines": 2 }
};
console.log("Custom max-empty-lines:", custom.rules["max-empty-lines"]);
