var http = require('http'),
	urls = process.argv.slice(2),
	bodies = {},
	returned = 0;

function get(url, callback) {
	http.get(url, function (response) {
		var body = '';

		response.setEncoding('utf8');

		response.on('data', function (data) {
			body += data;
		});

		response.on('end', function () {
			returned++;
			bodies[url] = body;
			callback();
		});
	});
}

urls.forEach(function (url) {
	get(url, function () {
		if (returned >= urls.length) {
			urls.forEach(function (url) {
				console.log(bodies[url]);
			});
		}
	});
});

