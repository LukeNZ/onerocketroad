var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'vendor': './angular/vendor.ts',
        'onerocketroad': './angular/main.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        publicPath: '/public/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['onerocketroad', 'vendor']
        })
    ]
};