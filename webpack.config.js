const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

var path      = require('path');
var SRC       = path.resolve(__dirname, './')
var OUTPUT = path.resolve(__dirname, 'output');

module.exports = {
    entry: [`${SRC}/main.js`],
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: OUTPUT,
      filename: 'index.js',
      library: 'Bork',
      libraryTarget: 'umd'
    },
    resolve: {
      modules: [SRC, 'node_modules'],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      ]
    },
    optimization: {
      // minimize: false,
      // concatenateModules: false,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        reportFilename: `report.html`,
        analyzerMode: 'static',
      })
    ]
};
