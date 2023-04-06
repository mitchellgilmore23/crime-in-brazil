const path = require('path');
const file = 'Violence In Brazil.js';
module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		'Violence In Brazil': './src/Violence In Brazil.js',
		'Income Inequality': './src/Income Inequality.js',
	},
	output: {
		filename: '[name].js',
	},
};
