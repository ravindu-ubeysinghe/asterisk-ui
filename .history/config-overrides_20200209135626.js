const { useBabelRc, override, useEslintRc } = require('customize-cra')
const { injectBabelPlugin } = require('react-app-rewired')

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: "components",
        rootPathSuffix: "./src/components"
    }
];

module.exports = override(
  useBabelRc(),
  useEslintRc()
);

module.exports = config => injectBabelPlugin(rootImportConfig, config);