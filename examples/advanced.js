// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom Stylelint rule overrides
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  rules: { ...base.rules, "max-empty-lines": 2 },
};
console.log("Custom max-empty-lines:", custom.rules["max-empty-lines"]);
