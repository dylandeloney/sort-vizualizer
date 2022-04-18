import React, { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel";
import { genRandomNumbers } from "../helpers";
import { getSelectionSortAnimations } from "../sorts/selectionSort";
import { getBubbleSortAnimations } from "../sorts/bubbleSort";
import { getInsertionSortAnimations } from "../sorts/insertionSort";
import { getMergeSortAnimations } from "../sorts/mergeSort";

function GameBoard() {
	const [SortAlgo, setSortAlgo] = useState(null);
	const [array, setArray] = useState([]);
	const [speed, setSpeed] = useState(51);
	let [isSorting, setIsSorting] = useState(false);
	const arrayBars = document.getElementsByClassName("bar");

	useEffect(() => {
		generateBars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function generateBars() {
		const temp = [];
		for (let i = 0; i < 250; i++) {
			temp.push(genRandomNumbers(1, 250));
		}

		setArray([...temp]);
		for (let i = 0; i < array.length; i++) {
			arrayBars[i].style.backgroundColor = "black";
		}
	}

	function handleSort(sort) {
		switch (sort) {
			case "selection":
				selectionSort();
				break;
			case "bubble":
				bubbleSort();
				break;
			case "insertion":
				insertionSort();
				break;
			case "merge":
				mergeSort();
				break;

			default:
				selectionSort();
				break;
		}
	}

	return (
		<div>
			<ControlPanel
				generateBars={generateBars}
				setSortAlgo={setSortAlgo}
				handleSort={handleSort}
				SortAlgo={SortAlgo}
				setSpeed={setSpeed}
				speed={speed}
				isSorting={isSorting}
				setIsSorting={setIsSorting}
			/>
			<div className="board ">
				{array.map(function (value, index) {
					return (
						<div
							className="bar"
							key={index}
							style={{
								height: `${value * 2}px`,
							}}></div>
					);
				})}
			</div>
		</div>
	);
	function selectionSort() {
		const animations = getSelectionSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			switch (animations[i].animation) {
				case "compare":
				case "resetBlack":
				case "newMin":
				case "lock":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "swap":
					const lowestIndexBar = animations[i].index1;
					const lowestValueBar = animations[i].index2;
					//console.log(animations[i]);
					const lowestIndexStyle = arrayBars[lowestIndexBar].style;
					const lowestValueStyle = arrayBars[lowestValueBar].style;
					setTimeout(() => {
						lowestIndexStyle.height = `${animations[i].height2 * 2}px`;
						lowestValueStyle.height = `${animations[i].height1 * 2}px`;
						lowestIndexStyle.backgroundColor = animations[i].color;
					}, i * speed);
					break;

				default:
					console.log(animations[i].animation);
			}
		}
	}

	function bubbleSort() {
		const animations = getBubbleSortAnimations(array);

		for (let i = 0; i < animations.length; i++) {
			switch (animations[i].animation) {
				case "compare":
				case "resetBlack":
					{
						const barOneIdx = animations[i].index1;
						const barTwoIdx = animations[i].index2;
						const barOneStyle = arrayBars[barOneIdx].style;
						const barTwoStyle = arrayBars[barTwoIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
							barTwoStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "swap":
					{
						const lowestIndexBar = animations[i].index1;
						const lowestValueBar = animations[i].index2;
						//console.log(animations[i]);
						const lowestIndexStyle = arrayBars[lowestIndexBar].style;
						const lowestValueStyle = arrayBars[lowestValueBar].style;
						setTimeout(() => {
							lowestIndexStyle.height = `${animations[i].height2 * 2}px`;
							lowestValueStyle.height = `${animations[i].height1 * 2}px`;
							lowestIndexStyle.backgroundColor = animations[i].color;
							lowestValueStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "lock":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				default:
					console.log(animations[i].animation);
			}
		}
	}

	function insertionSort() {
		const animations = getInsertionSortAnimations(array);

		for (let i = 0; i < animations.length; i++) {
			switch (animations[i].animation) {
				case "key":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "resetBlack":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "push":
					const barOneIdx = animations[i].index;
					const barOneStyle = arrayBars[barOneIdx].style;
					setTimeout(() => {
						barOneStyle.backgroundColor = animations[i].color;
						barOneStyle.height = `${animations[i].height * 2}px`;
					}, i * speed);
					break;
				case "lock":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
							barOneStyle.height = `${animations[i].height * 2}px`;
						}, i * speed);
					}
					break;
				default:
					console.log(animations[i].animation);
			}
		}
	}
	function mergeSort() {
		const animations = getMergeSortAnimations(array);

		for (let i = 0; i < animations.length; i++) {
			switch (animations[i].animation) {
				case "compare":
				case "reset2black":
					{
						const barOneIdx = animations[i].index1;
						const barTwoIdx = animations[i].index2;
						const barOneStyle = arrayBars[barOneIdx].style;
						const barTwoStyle = arrayBars[barTwoIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
							barTwoStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "resetBlack":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
						}, i * speed);
					}
					break;
				case "overwrite":
					{
						const barOneIdx = animations[i].index;
						const barOneStyle = arrayBars[barOneIdx].style;
						setTimeout(() => {
							barOneStyle.backgroundColor = animations[i].color;
							barOneStyle.height = `${animations[i].height * 2}px`;
						}, i * speed);
					}
					break;
				default:
					console.log(animations[i].animation);
			}
		}
	}
}

export default GameBoard;
