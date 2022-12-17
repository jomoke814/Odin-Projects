const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            use: ['html-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          }
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};