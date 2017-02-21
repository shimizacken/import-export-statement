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
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ]
}