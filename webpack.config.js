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
          test: /\.(js|jsx)$/,      // 拡張子が「js / jsx」のみをバンドル対象
          exclude: /node_modules/,  // フォルダ名が「node_modules」配下は除外
          loader: 'babel-loader'    // バンドルする際に「babel-loader」を呼び出してトランスパイルする
        }
      ]
    }
}