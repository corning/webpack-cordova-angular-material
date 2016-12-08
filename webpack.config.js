/**
 * Created by Corning on 2016/5/4.
 */
var webpack=require('webpack');
var path=require('path');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    entry:{
        app:'./src/app/app.js'
    },
    output:{
        path:path.join(__dirname,'/assets/www'),
        filename:'js/[name].js',
        publicPath:'../',
        pathInfo:false
    },
    plugins:[
        new ExtractTextPlugin('styles/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            },
            mangle:false
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/assets',
            to:__dirname+'/assets'
        }])
    ],
    module:{
        loaders:[
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')},
            {test:/\.css$/,loader:ExtractTextPlugin.extract('style-loader','css-loader')},
            {test:/\.(png|jpg)$/,loader:'url-loader?limit=8192&name=images/[hash].[ext]'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000&name=fonts/[name].[ext]" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"},
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query:{
                    presets: ["react","es2015","stage-0"]
                }
            },
            {test:/\.(html|htm)/,loader:'raw'}
        ]
    }
};