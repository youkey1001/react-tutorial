const path = require('path')

module.exports = {
    entry: './src/index.js',    // entryを起点にバンドルしていく
    output: {                   // 出力設定
        filename: 'bundle.js',  // 出力ファイル名
        path: `${__dirname}/`   //  出力ディレクトリ階層
        // パスは絶対パスで指定、__dirnameでディレクトリ階層を取得
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
}