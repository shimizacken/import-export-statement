var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        //contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}