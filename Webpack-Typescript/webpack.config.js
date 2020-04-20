const path = require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                loader:'awesome-typescript-loader',
                exclude:/node_modules/,
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'index.html',
        })
    ],
    devServer:{
        port:3000,
        stats:'minimal'
    }
};