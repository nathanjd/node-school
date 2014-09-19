var http = require('http'),
	fs = require('fs'),

	port = process.argv[2] || 8000,
	path = process.argv[3] || 'response.txt',

	server = http.createServer(function (request, response) {
		var stream = fs.createReadStream(path);

		stream.on('data', function (chunk) {
			response.write(chunk);
		});

		stream.on('end', function () {
			response.end();
		});
	});

server.listen(port);