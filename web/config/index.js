const path = require('path')

const config = {
    // 启动端口
    port: 3001,
    host: 'localhost',
    apiHost: 'localhost',
    apiPort: '3000',
    projectRoot: path.resolve(__dirname, '../../'),
    webRoot: path.resolve(__dirname, '../'),
    dllDir: path.resolve(__dirname, '../dist/dll'),
    dev:{
        index: path.resolve(__dirname, '../index.html'),
        assetsRoot: '',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/'
    },
    build:{

    },
    proxy: {}
}

module.exports = config