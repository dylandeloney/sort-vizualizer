export function getMergeSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
	return animations;
}

function mergeSortHelper(
	mainArray,
	startIdx,
	endIdx,
	auxiliaryArray,
	animations
) {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
	mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
	mainArray,
	startIdx,
	middleIdx,
	endIdx,
	auxiliaryArray,
	animations
) {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while (i <= middleIdx && j <= endIdx) {
		animations.push({
			animation: "compare",
			index1: i,
			index2: j,
			color: "red",
		});
		animations.push({
			animation: "reset2black",
			index1: i,
			index2: j,
			color: "black",
		});
		if (auxiliaryArray[i] <= auxiliaryArray[j]) {
			animations.push({
				animation: "overwrite",
				index: k,
				color: "blue",
				height: auxiliaryArray[i],
			});
			animations.push({
				animation: "resetBlack",
				index: k,
				color: "black",
			});
			mainArray[k++] = auxiliaryArray[i++];
		} else {
			animations.push({
				animation: "overwrite",
				index: k,
				color: "blue",
				height: auxiliaryArray[j],
			});
			animations.push({
				animation: "resetBlack",
				index: k,
				color: "black",
			});
			mainArray[k++] = auxiliaryArray[j++];
		}
	}
	while (i <= middleIdx) {
		animations.push({
			animation: "compare",
			index1: i,
			index2: i,
			color: "red",
		});
		animations.push({
			animation: "reset2black",
			index1: i,
			index2: i,
			color: "black",
		});

		animations.push({
			animation: "overwrite",
			index: k,
			color: "blue",
			height: auxiliaryArray[i],
		});
		animations.push({
			animation: "resetBlack",
			index: k,
			color: "black",
		});
		mainArray[k++] = auxiliaryArray[i++];
	}
	while (j <= endIdx) {
		animations.push({
			animation: "compare",
			index1: j,
			index2: j,
			color: "red",
		});
		animations.push({
			animation: "reset2black",
			index1: j,
			index2: j,
			color: "black",
		});

		animations.push({
			animation: "overwrite",
			index: k,
			color: "blue",
			height: auxiliaryArray[j],
		});
		animations.push({
			animation: "resetBlack",
			index: k,
			color: "black",
		});
		mainArray[k++] = auxiliaryArray[j++];
	}
}
