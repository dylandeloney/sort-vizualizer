export function getSelectionSortAnimations(array) {
	const animationArray = [];
	if (array.length <= 1) return array;
	doSelectionSort(array, animationArray);
	return animationArray;
}

export function doSelectionSort(arr, animationArray) {
	for (let i = 0; i < arr.length; i++) {
		let minPos = i;
		for (let j = i + 1; j < arr.length; j++) {
			animationArray.push({
				animation: "compare",
				index: j,
				color: "red",
			});
			animationArray.push({
				animation: "resetBlack",
				index: j,
				color: "black",
			});
			if (arr[j] < arr[minPos]) {
				//newMin
				animationArray.push({
					animation: "resetBlack",
					index: minPos,
					color: "black",
				});
				animationArray.push({
					animation: "newMin",
					index: j,
					color: "blue",
				});

				minPos = j;
			}
		}
		if (i !== minPos) {
			animationArray.push({
				animation: "swap",
				index1: i,
				index2: minPos,
				color: "green",
				height1: arr[i],
				height2: arr[minPos],
			});
			animationArray.push({
				animation: "resetBlack",
				index: minPos,
				color: "black",
			});
			[arr[i], arr[minPos]] = [arr[minPos], arr[i]]; //swap 2 positions
		} else {
			animationArray.push({
				animation: "lock",
				index: i,
				color: "green",
			});
		}
	}
}
