const path = require('path')
const config = require('./config')
const rules = require('./rule')
const plugins = require('./plugins')

module.exports = {
    devtool: false,
    entry: {
        'app': path.join(config.webRoot, 'src/Main.js')
    },
    output: {
        publicPath: '',
        path: path.join(config.webRoot, 'dist/'),
        filename: config.assetsRoot + 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js'
    },
    module: {
        rules: rules
    },
    plugins: plugins,
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.json', '.less', '.vue'],
        alias: {
            'components': path.resolve(config.webRoot, 'src/Components'),
            'page': path.resolve(config.webRoot, 'src/Page'),
            'image': path.resolve(config.webRoot, 'src/Image'),
        }
    }
}