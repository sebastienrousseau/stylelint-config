export interface StylelintConfig {
  extends?: string[];
  rules?: Record<string, unknown>;
}

declare const config: StylelintConfig;
export default config;
