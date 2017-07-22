var path = require('path')
var webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const assetsPath = _path => {
  return path.posix.join('assets', _path)
}

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.css', '.json'],
		alias: {
			package: path.resolve(__dirname, './package.json'),
			src: path.resolve(__dirname, './src'),
			assets: path.resolve(__dirname, './src/assets'),
		}
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: 'vue-style-loader!css-loader',
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: assetsPath('img/[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [
		new webpack.ExternalsPlugin('commonjs', [
			'electron'
		]),
		new webpack.LoaderOptionsPlugin({
			options: {
				babel: {
					"presets": ["es2015"],
					"plugins": ["transform-runtime"]
				},
			}
		}),
		new FriendlyErrorsPlugin()
	]
}