const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, '../src/main.js')
        ]
    },
    output: {
        path: __dirname + 'devDist',
        publicPath: "/",
        filename: "js/[name].js"
    },
    mode: "development",
    devtool: "#cheap-module-eval-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('develop'),
                API_ENV: JSON.stringify('devalop'),
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],

    devServer: {
        port: config.dev.port,
        hot: true,
        // 编译出错的时候，在浏览器页面上显示错误
        overlay: {
            errors: true,
        },
        proxy: {
            "/api": {
                target: "xxx",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        },

        // 解决history模式下刷新页面， 路由挂了
        historyApiFallback: true,
    }
})
