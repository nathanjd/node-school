var http = require('http'),

	port = process.argv[2] || 8000,
	path = process.argv[3] || 'response.txt',

	server = http.createServer(function (request, response) {
		if (request.method.toLowerCase() === 'post') {
			request.on('data', function (chunk) {
				response.write(chunk.toString().toUpperCase());
			});
		}

		request.on('end', function () {
			response.end();
		});
	});

server.listen(port);