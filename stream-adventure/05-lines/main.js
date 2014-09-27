var through = require('through'),
	split = require('split'),
	i = 0;

process.stdin
	.pipe(split())
	.pipe(through(function (line) {
		if (i++ % 2) {
			this.queue(line.toString().toUpperCase() + '\n');
		} else {
			this.queue(line.toString().toLowerCase() + '\n');
		}
	}))
	.pipe(process.stdout);