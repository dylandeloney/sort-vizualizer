export function getBubbleSortAnimations(array) {
	const animationArray = [];
	if (array.length <= 1) return array;
	doBubbleSort(array, animationArray);
	return animationArray;
}

// This sort can be improved by setting a flag to break the loops early if no more swaps are encountered but looping all the way through for correct animations for now
export function doBubbleSort(array, animationArray) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			animationArray.push({
				animation: "compare",
				index1: j,
				index2: j + 1,
				color: "red",
			});
			if (array[j] > array[j + 1]) {
				animationArray.push({
					animation: "swap",
					index1: j,
					index2: j + 1,
					color: "blue",
					height1: array[j],
					height2: array[j + 1],
				});
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
			animationArray.push({
				animation: "resetBlack",
				index1: j,
				index2: j + 1,
				color: "black",
			});
		}
		animationArray.push({
			animation: "lock",
			index: array.length - 1 - i,
			color: "green",
		});
	}
}
