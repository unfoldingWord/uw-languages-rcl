module.exports = function (api) {
	api.cache(true);

	const presets = [ 
    "@babel/preset-env",
		"@babel/preset-react" 
	];
	const plugins = [ 
		["@babel/plugin-transform-runtime",
    {
      "regenerator": true,
      "corejs": 3,
    }]
	];

	return {
		presets,
		plugins
	};
};
