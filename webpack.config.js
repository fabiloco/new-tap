const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
                loader: 'babel-loader',
                
            },
            // Rules for css
            {
                test: /\.css$/i,
                //include: path.resolve(__dirname, './src/styles'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: "../fonts",
                }
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

        new MiniCssExtractPlugin({
            filename: "style.css",
          }),

        new Dotenv(),
    ],
};