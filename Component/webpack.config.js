var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js(x)*$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
        	test: /\.vue$/, 
        	options: {
        		babel: {
			      presets: ['es2015', 'stage-0']
			    }
         	}
       	}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./dist/manifest.json')
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'), //development & production
				'PUBLIC_PATH': JSON.stringify('http://127.0.0.1')
			}
		})
	]
}