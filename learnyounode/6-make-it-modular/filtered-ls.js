var fs = require('fs');

module.exports = function(dirPath, extension, callback) {
	var re = new RegExp('.' + extension + '$');

	fs.readdir(dirPath, function (err, list) {
		if (err) {
			callback(err);
			return;
		}

		callback(null, list.filter(function (fileName) {
			return re.exec(fileName);
		}));
	});
};