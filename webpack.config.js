const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "client", "index.js"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
        })
    ],
    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, './build'),

        },
    },
  
};