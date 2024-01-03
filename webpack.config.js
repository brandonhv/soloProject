const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(js|jsx)$/,
    //             exclude: /node-modules/,
    //             use:['babel-loader'],
    //         },
    //     ],
    // },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: './index.html',
    //         filename: './index.html',
    //     })
    // ],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, './dist'),
    //     },
    // },
    // devtool: 'eval-source-map',
};