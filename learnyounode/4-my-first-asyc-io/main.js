var fs = require('fs'),
	filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
	var numLines = data.toString().split('\n').length - 1;
	console.log(numLines);
});