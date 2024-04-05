const MIN_GRID_SIZE = 4;
const MAX_GRID_SIZE = 100;
const START_GRID_SIZE = 16;

const container = document.querySelector(".container");
const newGridBtn = document.querySelector("#new-grid-btn");

newGridBtn.addEventListener("click", (e) => {
	// * parseInt returns NaN if prompt is not a number
	const gridSize = parseInt(
		prompt(
			"Enter new grid size: (" +
				MIN_GRID_SIZE +
				" - " +
				MAX_GRID_SIZE +
				" )"
		)
	);

	if (isNaN(gridSize)) {
		alert("That's not a number!");
		return;
	} else if (gridSize < MIN_GRID_SIZE || gridSize > MAX_GRID_SIZE) {
		alert(
			"Please enter a correct number! (between " +
				MIN_GRID_SIZE +
				" - " +
				MAX_GRID_SIZE +
				" )"
		);
		return;
	}

	// * all checks passed and we create new grid
	createGrid(gridSize);
});

function clearGrid() {
	container.innerHTML = "";
}

// * creates a grid that is always 750x750px big
function createGrid(size) {
	clearGrid();

	for (let i = 0; i < size; i++) {
		let gridRow = document.createElement("div");
		gridRow.className = "gridRow";

		for (let j = 0; j < size; j++) {
			let div = document.createElement("div");
			div.classList.add("gridItem");

			// * hover effect
			div.addEventListener("mouseenter", hoverEffect);

			// * add grid item to it's row
			gridRow.appendChild(div);
		}

		// * add grid row to grid container
		container.appendChild(gridRow);
	}
}

function hoverEffect(event) {
	let element = event.target;

	element.classList.add("gridItemActivated");

	const randomRed = Math.random() * 255;
	const randomGreen = Math.random() * 255;
	const randomBlue = Math.random() * 255;

	element.style.backgroundColor =
		"rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
}

// * start app with 16x16 grid
createGrid(START_GRID_SIZE);
