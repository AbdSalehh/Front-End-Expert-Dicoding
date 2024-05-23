const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                type: 'javascript/auto',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
            runtimeCaching: [
                {
                    urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'therestaurantdb-api',
                    },
                },
                {
                    urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/')
                    || url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/')
                    || url.href.startsWith('https://restaurant-api.dicoding.dev/images/large/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'therestaurantdb-image-api',
                    },
                },
                {
                    urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/detail/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'therestaurantdb-detail-api',
                    },
                },
            ],
        }),
    ],
};
