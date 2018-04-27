const path = require('path')
const webpack = require('webpack')
const config = require('./index')
const library = '[name]'
const dllName = "[name].dll.js"

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
            path: '[name].manifest.json',
            // This must match the output.library option above
            name: library,
            context: config.webRoot,
        })
    ]
}