// webpack.config.js
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/entry.js',
    output: {
        filename: 'app.js',
        path: 'dist',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractText.extract(
                    'style-loader',
                    'css-loader?sourceMap!sass-loader?sourceMap'
                ),
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new ExtractText('app.css'),
        new webpack.NoErrorsPlugin()
    ],
    watch: true
}
