const config = require('./config')
const webpackMerge = require('webpack-merge')
const cleanPlugin = require('clean-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = webpackMerge(webpackBaseConfig,{
    plugins:[
        new cleanPlugin(['dist'],{
            root: config.webRoot
        })
    ]
})