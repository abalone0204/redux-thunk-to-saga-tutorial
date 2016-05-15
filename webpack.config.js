var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
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
        },{
            test: /\.[s]?css$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss'
            ]
        }]
    },
    postcss: [
        require('postcss-nested'),
        require('postcss-cssnext'),
        require('postcss-simple-vars')
    ],
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}