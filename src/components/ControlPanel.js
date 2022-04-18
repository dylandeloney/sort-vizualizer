import React, { useState } from "react";

function ControlPanel(props) {
	const [active, setActive] = useState(1);
	const handleSubmit = () => {
		props.setIsSorting(true);
		setTimeout(() => {
			props.handleSort(props.SortAlgo);
		}, 1);
	};

	const handleClick = (str, num) => {
		setActive(num);
		props.setSortAlgo(str);
	};

	const navTextStyles = { backgroundColor: "", textDecoration: "none" };
	const activeNavText = { color: "blue", textDecoration: "none" };

	return (
		<div className="control">
			{props.isSorting ? (
				<button onClick={() => window.location.reload(true)}>Reset</button>
			) : (
				<div className="controlItems">
					<button onClick={() => props.generateBars()}>Generate</button>
					<button
						onClick={() => handleClick("selection", 1)}
						style={active === 1 ? activeNavText : navTextStyles}>
						{" "}
						Selection Sort
					</button>
					<button
						onClick={() => handleClick("bubble", 2)}
						style={active === 2 ? activeNavText : navTextStyles}>
						Bubble Sort
					</button>
					<button
						onClick={() => handleClick("insertion", 3)}
						style={active === 3 ? activeNavText : navTextStyles}>
						Insertion Sort
					</button>
					<button
						onClick={() => handleClick("merge", 4)}
						style={active === 4 ? activeNavText : navTextStyles}>
						Merge Sort
					</button>

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
