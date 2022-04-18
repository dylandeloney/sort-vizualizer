export function getInsertionSortAnimations(array) {
	const animationArray = [];
	if (array.length <= 1) return array;
	doInsertionSort(array, animationArray);
	return animationArray;
}

export function doInsertionSort(arr, animationArray) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
		animationArray.push({
			animation: "key",
			index: i,
			color: "blue",
		});
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			animationArray.push({
				animation: "push",
				index: j + 1,
				height: arr[j],
				color: "red",
			});
			animationArray.push({
				animation: "resetBlack",
				index: j + 1,
				color: "black",
			});

			arr[j + 1] = arr[j];

			j = j - 1;
		}

		animationArray.push({
			animation: "lock",
			index: j + 1,
			color: "green",
			height: key,
		});
		animationArray.push({
			animation: "resetBlack",
			index: j + 1,
			color: "black",
		});

		arr[j + 1] = key;
	}
}
