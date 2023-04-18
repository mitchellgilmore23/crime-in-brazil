const path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		'Landing Page': './src/Landing Page.js',
		'Violence In Brazil': './src/Violence In Brazil.js',
		'Income Inequality': './src/Income Inequality.js',
		Racism: './src/Racism.js',
		'Operation Car Wash': './src/Operation Car Wash.js',
		'Human Trafficking': './src/Human Trafficking.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist/JS'),
		filename: '[name].js',
	},
};
