module.exports = function override(config, env) {
  return config;
}

// const path = require('path');

// function resolve(dir) {
//   return path.join(__dirname, '.', dir);
// }

// const {
//   addDecoratorsLegacy,
//   disableEsLint,
//   override,
//   addBabelPlugin,
//   // addWebpackAlias,
//   setWebpackOptimizationSplitChunks,
// } = require('customize-cra');
// const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// const customWebpackConfig = (config) => {
//   if (process.env.NODE_ENV === 'production') {
//     config.devtool = false; //去掉map文件
//     if (config.entry && config.entry instanceof Array) {
//       config.entry = {
//         main: config.entry,
//         vendor: [
//           'react',
//           'react-dom',
//           'react-router-dom',
//           'lodash',
//           'moment',
//           'react-intl',
//           'react-router',
//         ],
//       };
//     } else if (config.entry && typeof config.entry === 'object') {
//       config.entry.vendor = [
//         'react',
//         'react-dom',
//         'react-router-dom',
//         'lodash',
//         'moment',
//         'react-intl',
//         'react-router',
//       ];
//     }
//     config.plugins = [
//       ...config.plugins,
//       new MiniCssExtractPlugin({ ignoreOrder: true }),
//     ];
//     config.optimization = {
//       moduleIds: 'hashed',
//       minimize: true,
//       minimizer: [
//         new TerserPlugin({
//           terserOptions: {
//             compress: {
//               warnings: false,
//               comparisons: false,
//               drop_console: true,
//             },
//             mangle: {
//               safari10: true,
//             },
//             output: {
//               comments: false,
//             },
//           },
//           parallel: 2,
//           cache: true,
//           sourceMap: false,
//         }),
//       ],
//     };
//   }
//   return config;
// };
// module.exports = override(
//   addDecoratorsLegacy(),
//   disableEsLint(),
//   addBabelPlugin('react-hot-loader/babel'),
//   // addWebpackAlias({
//   //   'react-dom':
//   //     process.env.NODE_ENV === 'production'
//   //       ? 'react-dom'
//   //       : '@hot-loader/react-dom',
//   //   '@': resolve('src'),
//   //   // '@components': resolve('src/app/_common/components'),
//   //   // '@app': resolve('src/app'),
//   // }),
//   setWebpackOptimizationSplitChunks({
//     chunks: 'all',
//     cacheGroups: {
//       vendors: {
//         test: /node_modules/,
//         name: 'vendors',
//         priority: -10,
//       },
//       common: {
//         name: 'common',
//         minChunks: 2,
//         minSize: 30000,
//         chunks: 'all',
//       },
//       echarts: {
//         // split echarts libs
//         name: 'chunk-echarts',
//         test: /[\\/]node_modules[\\/]_?echarts(.*)/,
//         priority: 50,
//         chunks: 'async',
//       },
//       zrender: {
//         // split zrender libs
//         name: 'chunk-zrender',
//         test: /[\\/]node_modules[\\/]_?zrender(.*)/,
//         priority: 55,
//         chunks: 'async',
//       },
//       g6: {
//         // split g6 libs
//         name: 'chunk-g6',
//         test: /[\\/]node_modules[\\/]_?@antv(.*)/,
//         priority: 60,
//         chunks: 'async',
//       },
//       highlight: {
//         // split highlight libs
//         name: 'chunk-highlight',
//         test: /[\\/]node_modules[\\/]_?highlight(.*)/,
//         priority: 65,
//         chunks: 'async',
//       },
//       swagger: {
//         // split swagger-ui libs
//         name: 'chunk-swagger-ui',
//         test: /[\\/]node_modules[\\/]_?swagger-ui(.*)/,
//         priority: 65,
//         chunks: 'async',
//       },
//       refractor: {
//         // split refractor libs
//         name: 'chunk-refractor',
//         test: /[\\/]node_modules[\\/]_?refractor(.*)/,
//         priority: 65,
//         chunks: 'async',
//       },
//       mermaid: {
//         // split mermaid libs
//         name: 'chunk-mermaid',
//         test: /[\\/]node_modules[\\/]_?mermaid(.*)/,
//         priority: 65,
//         chunks: 'async',
//       },
//     },
//   }),
//   customWebpackConfig,
// );
