# `@sebastienrousseau/stylelint-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/stylelint-config`.

---

## Description

Shareable Stylelint configuration enforcing strict CSS and stylesheet code quality.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/stylelint-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Standard Preset Base

- **Description**: Extends stylelint-config-standard baseline
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Hex Code Length

- **Description**: Enforces short 3-character hex color codes (`color-hex-length: short`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Named Color Prohibition

- **Description**: Prohibits named colors in favor of deterministic hex tokens
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Indentation Control

- **Description**: Enforces strict 2-space CSS rule indentation
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Quote Consistency

- **Description**: Enforces double quotes throughout stylesheet properties
- **Scope**: Production & Development
- **Status**: Stable & Active

