const path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		'Landing Page': './src/Landing Page.js',
		'Violence In Brazil': './src/Violence In Brazil.js',
		'Income Inequality': './src/Income Inequality.js',
		Racism: './src/Racism.js',
		'Political Corruption': './src/Political Corruption.js',
		'Human Trafficking': './src/Human Trafficking.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist/JS'),
		filename: '[name].js',
	},
};
