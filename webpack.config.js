const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: "eval-source-map",
	entry: "./src/main.js",
	output: {
		path: path.join(__dirname, '/dist'),
    publicPath: path.join(__dirname, '/dist'),
    filename: "bundle.js"
	},
	module:{
		rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        enforce: 'pre',
        options: {
          plugins: function () {
            return [autoprefixer('last 2 versions', 'ie 10')]
          }
        }
      },
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'jshint-loader',
        enforce: 'pre',
				options: {
        	curly: true,
					eqeqeq: true,
					forin: true,
					freeze: true,
					emitErrors: false,
					failOnHint: false,
					esversion: 6,
				}
      },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				},
				'remove-comments-loader'
				]
			},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
        	loader: 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=dist/',
      	}
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		compress: true,
    // это комменты не удаляло, пришлось ставить отдельный лоадер
    comments: false,
		output: {
			comments: false,
		}
	})],
	devServer: {
		hot: true,
		port: 8081
	}
};