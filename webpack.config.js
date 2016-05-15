var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './source/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'static'),
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}