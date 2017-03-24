
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './index.js',
	output: {
		filename: 'public/index.js'
	},
	devServer: {
		contentBase: './public'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo page',
			template: './index.html'
		})
	]
}