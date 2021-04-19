const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base')

const libraryName = 'react-sdk';
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    mode: 'production',
    devtool: false,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: libraryName + '.umd.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    externals: [
        // {
        // react: {
        //     root: 'React',
        //     commonjs2: './react',
        //     commonjs: ['./react'],
        //     amd: 'react',
        // },
        // },
        // {
        // 'react-dom': {
        //     root: 'ReactDOM',
        //     commonjs2: './react-dom',
        //     commonjs: ['./react-dom'],
        //     amd: 'react-dom',
        // },
        // }
    ],
    plugins: []
};

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }))
}

module.exports = merge(baseWebpackConfig, config);