const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
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
    plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                title: 'restaurant page',
                filename: 'index.html',
                favicon: 'src/assets/icons8-restaurant-building-16.png',
                template: 'src/template.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
              }),
        ],
        runtimeChunk: 'single',
    },
    performance: {
        hints: false,
    },
});