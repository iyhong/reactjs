var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    //bundle.js 파일을 만들어줌
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: 'localhost',
        port: 4000,
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: ['react-hot-loader','babel-loader?' + JSON.stringify({
                      cacheDirectory: true,
                      presets: ['es2015', 'react']
                    })],
                    exclude: /node_modules/,

                }
            ]
        },

        //hot loader 플러그인
        plugins: [
          new webpack.HotModuleReplacementPlugin()
        ]
};
