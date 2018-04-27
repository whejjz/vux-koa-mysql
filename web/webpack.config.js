const path = require('path')
const webpack = require('webpack')
const config = require('./config/index.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const openBrowserPlugin = require('open-browser-webpack-plugin')
const progressPlugin = require('progress-bar-webpack-plugin')
const addHtmlPlugin = require('add-asset-html-webpack-plugin')
const maniFest = require('../vendors.manifest.json')

module.exports = {
    mode: 'development',
    entry: {
        'app': path.join(config.webRoot, 'src/app.js')
    },
    output: {
        publicPath: "",
        path: path.join(config.webRoot, 'dist/'),
        filename: "[name].[hash].js",
        chunkFilename: ""
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader']
        }]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context:config.projectRoot,
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
            includeSourcemap: false //不需要.map
        }),
        new openBrowserPlugin({url: `http://${config.host}:${config.port}`}),
        new progressPlugin()
    ],
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.json', '.less']
    },
    devServer: {
        historyApiFallback: true,
        host: config.host,
        port: config.port,
        proxy: config.proxy
    }
}