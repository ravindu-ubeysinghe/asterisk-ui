const { useBabelRc, override, useEslintRc, addWebpackAlias } = require('customize-cra')
// const { injectBabelPlugin } = require('react-app-rewired')
const path = require("path");

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
    useEslintRc(),
    addWebpackAlias({
      "components/*": path.resolve(__dirname, "src/components/")
    }),
);

// module.exports = config => injectBabelPlugin(rootImportConfig, config);