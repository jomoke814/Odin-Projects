const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'image/[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'restaurant page',
          filename: 'index.html',
          favicon: 'src/assets/icons8-restaurant-building-16.png',
          template: 'src/template.html'
        }),
    ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', "css-loader"],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
});