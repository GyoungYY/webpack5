/*
 * @Author: your name
 * @Date: 2021-02-01 19:45:47
 * @LastEditTime: 2021-02-02 15:15:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\webpack.config.js
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 5555,
        hot: true,
        open: true,
        contentBase: '../dist'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|bmp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]'
                                }
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true
                            },
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|ogg|mp3|wav)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]'
                            }
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'Vue3 + TS -> Web App',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin()
        ]
    }
}