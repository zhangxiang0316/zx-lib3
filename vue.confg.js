/**
 * create by zhangxiang on 2021-01-29 15:15
 * 类注释：
 * 备注：
 */

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: 'zx-lib.ts',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    }
}
