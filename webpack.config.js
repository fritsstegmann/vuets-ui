// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
    },
    performance: {
        hints: "warning"
    },
    mode: "production",
    externals: {
        vue: 'Vue',
       'vue-property-decorator': 'commonjs2 vue-property-decorator',
    },
    output: {
        library: 'storna',
        libraryTarget: 'commonjs-module',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};