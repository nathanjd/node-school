var net = require('net'),
	moment = require('moment'),
	port = parseInt(process.argv[2], 10),
	server;

server = net.createServer(function (socket) {
	socket.write(moment().format('YYYY-MM-DD HH:mm'));
	socket.end();
});

server.listen(port);

console.log('Time server running at port', port);
