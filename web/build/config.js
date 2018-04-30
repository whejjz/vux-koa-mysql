const path = require('path')

const config = {
    // 启动端口
    port: 3001,
    host: 'localhost',
    apiHost: 'localhost',
    apiPort: '3000',
    projectRoot: path.resolve(__dirname, '../../'),
    webRoot: path.resolve(__dirname, '../'),
    dllRoot: path.resolve(__dirname, '../dist/dll'),
    dllPath: 'assets/js',
    assetsRoot: 'assets/',
    proxy: {

    }
}

module.exports = config