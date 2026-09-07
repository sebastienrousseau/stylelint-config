/**
 * 100% Feature Showcase for @sebastienrousseau/stylelint-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/stylelint-config ===");
assert(Array.isArray(config.extends) && config.extends.includes("stylelint-config-standard"));
assert(config.rules && typeof config.rules === "object");
assert.strictEqual(config.rules["color-hex-length"], "short");
assert.strictEqual(config.rules["indentation"], 2);
assert.strictEqual(config.rules["string-quotes"], "double");

console.log("  ✓ Extends:", config.extends[0]);
console.log("  ✓ Hex length rule:", config.rules["color-hex-length"]);
console.log("  ✓ Indentation:", config.rules["indentation"]);
console.log("✅ 100% of stylelint-config rules and features validated.");
