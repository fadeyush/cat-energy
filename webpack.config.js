// const path = require('path');
// const miniCss = require('mini-css-extract-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'production',
//     entry: {
//         main: path.resolve(__dirname, 'src/index.js'),
//     },
//     output: {
// 		path: path.resolve(__dirname, './dist'),
// 		filename: 'bundle.js'
//     },
//     plugins: [
//         new HtmlWebpackPlugin({template: "./public/index.html"}),
//         new CleanWebpackPlugin(),
// 		require('autoprefixer')
// 	],
//     module: {
// 		rules: [{
// 			test:/\.(s*)css$/,
// 			use: [
// 				// miniCss.loader,
// 				'css-loader',
// 				'sass-loader',
// 				"postcss-loader",
// 			]
// 		}]
// 	},
// }