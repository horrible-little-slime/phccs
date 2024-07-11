/* eslint-env node */

/**
 * @returns {import("@babel/core").TransformOptions}
 */
module.exports = function (api) {
  api.cache(true);

  /** @type {import("@babel/preset-env").Options} */
  const presetEnvConfig = {
    targets: { rhino: "1.7.14" },
  };

  return {
    exclude: [],
    presets: ["@babel/preset-typescript", ["@babel/preset-env", presetEnvConfig]],
  };
};
