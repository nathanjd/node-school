var ls = require('./filtered-ls'),
	dirPath = process.argv[2],
	extension = process.argv[3];

ls(dirPath, extension, function (err, list) {
	if (err) {
		console.log('Error.');
		return;
	}

	list.forEach(function (fileName) {
		console.log(fileName);
	});
});