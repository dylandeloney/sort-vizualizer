import React from "react";

function ControlPanel(props) {
	const handleSubmit = () => {
		props.setIsSorting(true);
		setTimeout(() => {
			props.handleSort(props.SortAlgo);
		}, 1);
	};

	return (
		<div className="control">
			{props.isSorting ? (
				<button onClick={() => window.location.reload(true)}>Reset</button>
			) : (
				<div className="controlItems">
					<button onClick={() => props.generateBars()}>Generate</button>
					<button onClick={() => props.setSortAlgo("selection")}>
						Selection Sort
					</button>
					<button onClick={() => props.setSortAlgo("bubble")}>
						Bubble Sort
					</button>
					<button onClick={() => props.setSortAlgo("insertion")}>
						Insertion Sort
					</button>
					<button onClick={() => props.setSortAlgo("merge")}>Merge Sort</button>

					<label>
						Speed of animations:
						<input
							onChange={(e) => props.setSpeed(102 - e.target.value)}
							type="range"
							min="2"
							max="100"
							step="1"
							defaultValue={props.speed}
						/>
					</label>

					<button onClick={() => handleSubmit()}>Sort</button>
				</div>
			)}

			{/* <button onClick={() => props.generateBars()}>Generate</button>
			<button onClick={() => props.setSortAlgo("selection")}>
				Selection Sort
			</button>
			<button onClick={() => props.setSortAlgo("bubble")}>Bubble Sort</button>
			<button onClick={() => props.setSortAlgo("insertion")}>
				Insertion Sort
			</button>
			<button onClick={() => props.setSortAlgo("merge")}>Merge Sort</button>

			<label>
				Speed of animations:
				<input
					onChange={(e) => props.setSpeed(102 - e.target.value)}
					type="range"
					min="2"
					max="100"
					step="1"
					defaultValue={props.speed}
				/>
			</label>

			<button onClick={() => handleSubmit()}>Sort</button> */}
		</div>
	);
}

export default ControlPanel;
