const path=require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
    entry: {
        entry: './index.js',
    },
    output: {
        filename:'[name].js',
        alias: {
            vue$: 'vue/dist/vue.js'
        },
        extensions: [".js",".json",".vue"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};