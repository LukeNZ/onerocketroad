var webpack = require('webpack');

module.exports = {
    entry: {
        'vendor': './angular/vendor.ts',
        'onerocketroad': './angular/main.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        filename: './public/angular/[name].bundle.js'
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