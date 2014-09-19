var numbers = process.argv.splice(2),
	sum = numbers.reduce(function (previousValue, currentValue, index, array) {
		previousValue = previousValue || 0;
		return parseInt(previousValue, 10) + parseInt(currentValue, 10);
	});

console.log(sum);