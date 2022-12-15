const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
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
          template: 'src/template.html'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};