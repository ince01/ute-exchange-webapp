const path = require('path');
const fs = require('fs');
const { override, babelInclude, fixBabelImports, addBabelPlugins } = require('customize-cra');

module.exports = (config, env) => {
  const overrideCustomizeCra = override(
    /* Make sure Babel compiles the stuff in the common folder */
    babelInclude([
      path.resolve('src'), // don't forget this
      fs.realpathSync('../../node_modules/@ute-exchange/assets'),
      fs.realpathSync('../../node_modules/@ute-exchange/components'),
      fs.realpathSync('../../node_modules/@ute-exchange/utils'),
      fs.realpathSync('../../node_modules/@ute-exchange/hooks'),
    ]),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    ...addBabelPlugins([
      [
        'react-intl',
        {
          idInterpolationPattern: '[sha512:contenthash:base64:6]',
          extractFromFormatMessageCall: true,
          ast: true,
        },
      ],
    ]),
  )(config, env);
  return Object.assign(config, {
    ...overrideCustomizeCra,
  });
};
