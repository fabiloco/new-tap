const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    resolve: {
        extensions: ['.js'],
    },

    module: {
        rules: [
            // Rules for babel-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            // Rules for css
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, './src/styles'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: 'index.html',
            },
        ),

        new Dotenv(),
    ],
};