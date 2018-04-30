const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const library = '[name]'
const dllName = "[name].[hash].dll.js"
const cleanPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        vendors: ['vue', 'vue-router', 'vuex']
    },
    output: {
        filename: dllName,
        path: path.join(config.webRoot, 'dll/'),
        library
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(config.webRoot, '[name].manifest.json'),
            // This must match the output.library option above
            name: library,
            context: config.webRoot,
        }),
        new cleanPlugin(['dll'],{
            root: config.webRoot
        })
    ]
}