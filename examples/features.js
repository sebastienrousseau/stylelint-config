// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Feature showcase for @sebastienrousseau/stylelint-config.
 *
 * The `indentation` and `string-quotes` rules this example used to assert were
 * removed in Stylelint 16, which this package requires. Configuring them made
 * every consumer see an "Unknown rule" error on every file, so they were
 * dropped in 0.0.7; formatting belongs to Prettier.
 */

"use strict";

const assert = require("node:assert/strict");
const config = require("../index.cjs");

console.log("=== Feature showcase: @sebastienrousseau/stylelint-config ===");

assert.ok(
  Array.isArray(config.extends),
  "extends is a list of shareable configs",
);
assert.ok(config.extends.includes("stylelint-config-standard"));
assert.ok(
  config.rules && typeof config.rules === "object",
  "rules are present",
);

assert.equal(config.rules["color-hex-length"], "short");
assert.equal(config.rules["color-named"], "never");
assert.equal(config.rules["declaration-block-no-duplicate-properties"], true);
assert.equal(config.rules["no-empty-source"], true);

// Rules Stylelint removed must stay absent, or consumers get errors on every file.
for (const removed of ["indentation", "string-quotes", "max-empty-lines"]) {
  assert.equal(
    config.rules[removed],
    undefined,
    removed + " was removed in Stylelint 16 and must not be configured",
  );
}

console.log("  ✓ Extends:", config.extends[0]);
console.log("  ✓ Hex length rule:", config.rules["color-hex-length"]);
console.log("  ✓ Active rules:", Object.keys(config.rules).length);
console.log("  ✓ No rules removed by Stylelint 16 are configured");
console.log("✅ stylelint-config validated.");
