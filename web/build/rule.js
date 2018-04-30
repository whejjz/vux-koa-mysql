const path = require('path')
const config = require('./config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
},{
    test: /\.vue$/,
    loaders: 'vue-loader',
    options: {
        loaders: {
            less: ExtractTextPlugin.extract({
                use: ['css-loader?minimize',  'less-loader'],
                fallback: 'vue-style-loader'
            }),
            css: ExtractTextPlugin.extract({
                use: ['css-loader',  'less-loader'],
                fallback: 'vue-style-loader'
            })
        }
    }
},{
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ]
},{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loaders: 'url-loader',
    options: {
        limit: 10000,
        name: path.posix.join(config.assetsRoot, 'img/[name].[hash:7].[ext]')
    }
}, {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loaders: 'url-loader',
    options: {
        limit: 10000,
        name: path.posix.join(config.assetsRoot, 'fonts/[name].[hash:7].[ext]'),
    }
}]