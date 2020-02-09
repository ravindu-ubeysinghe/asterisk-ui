const { useBabelRc, override, useEslintRc } = require('customize-cra')
const { injectBabelPlugin } = require('react-app-rewired')

const rootImportConfig = [
    "root-import",
    {
        "paths": [
            {
              "rootPathSuffix": "./src/components",
              "rootPathPrefix": "components/"
            },
            {
              "rootPathSuffix": "./src/utils",
              "rootPathPrefix": "utils/"
            },
        ]
    }
];

module.exports = override(
  useBabelRc(),
  useEslintRc()
);

module.exports = config => injectBabelPlugin(rootImportConfig, config);