var fs = require('fs'),
	filePath = process.argv[2],
	data = fs.readFileSync(filePath),
	numLines = data.toString().split('\n').length - 1;

console.log(numLines);