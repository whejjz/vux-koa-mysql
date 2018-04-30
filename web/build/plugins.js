const path = require('path')
const webpack = require('webpack')
const config = require('./config.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const openBrowserPlugin = require('open-browser-webpack-plugin')
const progressPlugin = require('progress-bar-webpack-plugin')
const addHtmlPlugin = require('add-asset-html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const maniFest = require('../vendors.manifest')

module.exports = [
    new webpack.DllReferencePlugin({
        context:config.webRoot,
        manifest: maniFest
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new webpack.NamedModulesPlugin(), //当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    new webpack.NoEmitOnErrorsPlugin(), //
    new webpack.HashedModuleIdsPlugin(), //
    new htmlWebpackPlugin({
        title: '',
        filename: 'index.html',
        template: path.join(config.webRoot, 'index.html'),
        showErrors: true,
        inject: true
    }),
    new addHtmlPlugin({
        filepath: path.join(config.webRoot, 'dll/*.dll.js'),
        outputPath: config.dllPath,
        publicPath: config.dllPath,
        includeSourcemap: false //不需要.map
    }),
    new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    }),
    new openBrowserPlugin({url: `http://${config.host}:${config.port}`}),
    new progressPlugin(),
]