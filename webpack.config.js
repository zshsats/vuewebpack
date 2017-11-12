const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : {
        main:"./src/main.js"
    },
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules: [
            {
                test: /\.html$/,
                loaders: ['raw-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./src/main.html",
            filename:"main.html"
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    watchOptions:{
        ignored: /node_modules/,
    },
    watch:true

}