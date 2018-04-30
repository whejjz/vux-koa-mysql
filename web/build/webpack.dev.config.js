const webpackMerge = require('webpack-merge')
const config = require('./config')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = webpackMerge(webpackBaseConfig,{
    devServer: {
        noInfo: true,
        historyApiFallback: true,
        host: config.host,
        port: config.port,
        proxy: config.proxy
    }
})