const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        'ypay-sdk': './src/sdk/ypay.js',
        'ypay-ui': './src/ypay_ui/js/main.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        library: 'YPay',
        libraryTarget: 'umd',
        globalObject: 'this',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'ypay-ui.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/ypay_ui/templates/payment_form.html',
            filename: 'demo.html',
            chunks: ['ypay-ui'],
        }),
    ],

    resolve: {
        extensions: ['.js', '.json'],
    },

    optimization: {
        minimize: true,
    },
};