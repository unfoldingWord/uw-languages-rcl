const { name, version, repository } = require('./package.json')
const { styles, theme } = require('./styleguide.styles')

module.exports = {
  title: `${name} v${version}`,
  ribbon: {
    url: repository,
    text: 'View on GitHub',
  },
  styles,
  theme,
  components: 'src/demos/[A-Z]*.{js,jsx}',
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
	},
}
