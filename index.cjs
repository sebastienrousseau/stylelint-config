// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

"use strict";

/**
 * Shareable Stylelint configuration.
 *
 * Stylistic concerns — indentation, quote style, blank-line runs — are
 * deliberately absent. Stylelint deprecated those rules in 15 and removed them
 * in 16, and this package requires >=16, so configuring them made every file
 * report an "Unknown rule" error. Formatting belongs to Prettier; pair this
 * with @sebastienrousseau/prettier-config.
 *
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "color-hex-length": "short",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "no-empty-source": true,
  },
};
