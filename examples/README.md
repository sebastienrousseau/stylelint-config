# `@sebastienrousseau/stylelint-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/stylelint-config`.

---

## Example Suite Overview

| File                           | Type      | Feature Coverage                       | Command                     |
| :----------------------------- | :-------- | :------------------------------------- | :-------------------------- |
| [`basic.js`](./basic.js)       | CommonJS  | Standard default configuration import  | `node examples/basic.js`    |
| [`advanced.js`](./advanced.js) | CommonJS  | Custom extension and rule overrides    | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs)         | ES Module | Native ESM consumption via `import`    | `node examples/esm.mjs`     |
| [`features.js`](./features.js) | CommonJS  | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Standard Preset Base**: Extends stylelint-config-standard baseline
- [x] **Hex Code Length**: Enforces short 3-character hex color codes (`color-hex-length: short`)
- [x] **Named Color Prohibition**: Prohibits named colors in favor of deterministic hex tokens
- [x] **Indentation Control**: Enforces strict 2-space CSS rule indentation
- [x] **Quote Consistency**: Enforces double quotes throughout stylesheet properties
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
