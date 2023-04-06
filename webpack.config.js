const path = require('path');
const file = 'Violence In Brazil.js';
module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		'Violence In Brazil': './src/Violence In Brazil.js',
		'Income Inequality': './src/Income Inequality.js',
		Racism: './src/Racism.js',
		'Political Corruption': './src/Political Corruption.js',
		'Human Trafficking': './src/Human Trafficking.js',
	},
	output: {
		filename: '[name].js',
	},
};
