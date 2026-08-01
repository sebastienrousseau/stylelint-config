/**
 * Modern Stylelint CommonJS Configuration
 */
module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "color-hex-length": "short",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "indentation": 2,
    "max-empty-lines": 1,
    "no-empty-source": true,
    "string-quotes": "double"
  }
};
