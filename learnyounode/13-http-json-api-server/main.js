var http = require('http'),
	urlParser = require('url'),

	port = process.argv[2] || 8000,

	routes = {
		'/api/parsetime': function (time) {
			return {
				hour: time.getHours(),
				minute: time.getMinutes(),
				second: time.getSeconds()
			};
		},
		'/api/unixtime': function (time) {
			return {
				unixtime: time.getTime()
			};
		}
	},

	server = http.createServer(function (request, response) {
		var url = urlParser.parse(request.url, true);

		if (routes[url.pathname] && request.method.toLowerCase() === 'get') {
			time = new Date(url.query.iso);

			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.write(
				JSON.stringify(routes[url.pathname](time))
			);
		} else {
			response.writeHead(404);
		}

		response.end();
	});

server.listen(port);