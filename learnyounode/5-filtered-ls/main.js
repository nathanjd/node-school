var fs = require('fs'),
	dirPath = process.argv[2],
	extension = process.argv[3];

fs.readdir(dirPath, function (err, list) {
	list.forEach(function (fileName) {
		var re = new RegExp('.' + extension + '$');
		if (re.exec(fileName)) {
			console.log(fileName);
		}
	});
});