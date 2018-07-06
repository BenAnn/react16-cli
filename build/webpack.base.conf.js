const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('../config');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        // font: "./src/static/fonts/iconfont.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "@component": path.resolve(__dirname, "../src/components"),
            "@page": path.resolve(__dirname, "../src/pages"),
            "@style": path.resolve(__dirname, "../src/static/css"),
            "@image": path.resolve(__dirname, "../src/static/images"),
            "@font": path.resolve(__dirname, "../src/static/fonts"),
            "@utils": path.resolve(__dirname, "../src/utils"),
            "@plugins": path.resolve(__dirname, "../src/plugins"),
            '@action': path.resolve(__dirname, "../src/actions"),
            '@reducer': path.resolve(__dirname, "../src/reducers")
        }
    },
    module: {
        rules: [
            {
				test: /\.js$/,
				loader: "babel-loader",
				exclude: [
		          path.resolve(__dirname, '../src/static/font/iconfont.js'),
		          path.resolve(__dirname, '../node_modules'),
		        ],
      		},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', "stage-0"]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader',"css-loader"]
			},
			{
				test: /\.scss/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					limit: 10000,
					name: 'img/[hash:12].[ext]'
				}
      		},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					limit: 10000,
					name: 'media/[hash:12].[ext]'
				}
      		},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					limit: 10000,
					name: 'fonts/[hash:12].[ext]'
				}
	        }
        ]
    },
}
