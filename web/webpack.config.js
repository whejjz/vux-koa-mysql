const webpackDevConfig = require('./build/webpack.dev.config')
const webpackProdConfig = require('./build/webpack.prod.config')

module.exports = (env, argv) => {
    return (argv.mode == 'development') ? webpackDevConfig : webpackProdConfig;
}