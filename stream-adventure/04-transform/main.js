var through = require('through'),
	tr;

function write(buffer) {
	this.queue(buffer.toString().toUpperCase());
}

function end() {
	this.queue(null);
}

tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);