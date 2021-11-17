webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // The entry point
    entry: {
        front: './assets/front.js',
    },
    // The exit point
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: "js/[name].js",
        publicPath: "/"
    },
    module: {
        // Rules files css
        rules: [
            {
                // Here all the css code is in the head of my console with style-loader ==> bad practice
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                    {
                        // Now the css code is no longer found in the head (but it returns the correct path in the console) ===> good practice
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
                        }
                    }
                ],
            },
            // Rules files pictures
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            // name pictures and extension
                            name: "[name].[ext]",
                            // Attention the path must be relative to the output specified in the js configuration above otherwise
                            outputPath: 'pictures/',
                            publicPath: 'build/pictures/',
                        }
                    },
                ],
            },
            // Config for old browsers which uses the old version of javascript (ES5)
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    // Preset-env allows to translate the ES6 js code into ES5
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    // Import the css into a css file with the same name by default
    plugins: [].concat([
        new MiniCssExtractPlugin({filename: "css/[name].css",}),
        new CopyPlugin({
            patterns: [
                {from: 'assets/css/pictures', to: 'pictures/',}
            ]
        })
    ]),
}
