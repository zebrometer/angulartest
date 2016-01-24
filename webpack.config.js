
var webpack = require('webpack');
var path    = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var APP = __dirname + '/app';

module.exports = {
	context: APP,

	entry: {
		// app: './index.js' 
		app: ['./core/bootstrap.js']
	},

	output: {
		path: APP,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
				// loader: 'style!css!less'
			},

			{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve('babel-loader'),
        query: {
          presets: [            
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-1')
          ]
        }
      }
		]
	},

	plugins: [
		new ExtractTextPlugin('./[name].css', { allChunks: true })
	]
};