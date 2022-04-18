// Generate random num bers to fill array for bars
export function genRandomNumbers(min, max) {
	return Math.floor(Math.random() * (min - max + 1) + max);
}

// test my sorts by comparing them to array.sort javascript function
export function testSorts(raw, mine) {
	let test = raw.sort(function (a, b) {
		return a - b;
	});
	arraysAreIdentical(test, mine);
}

//compares arrays (used in testSorts)
function arraysAreIdentical(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (var i = 0, len = arr1.length; i < len; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}
