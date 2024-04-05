const container = document.querySelector(".container");
const newGridBtn = document.querySelector("#new-grid-btn");

newGridBtn.addEventListener("click", (e) => {
	const gridSize = parseInt(prompt("Enter new grid size: (4 - 100)"));

	if (isNaN(gridSize)) {
		alert("That's not a number!");
		return;
	} else if (gridSize < 4 || gridSize > 100) {
		alert("Please enter a correct number! (between 4 and 100)");
		return;
	}

	// * all checks passed and we create new grid
	createGrid(gridSize);
});

function clearGrid() {
	container.innerHTML = "";
}

function createGrid(size) {
	clearGrid();

	for (let i = 0; i < size; i++) {
		let gridRow = document.createElement("div");
		gridRow.className = "gridRow";
		for (let j = 0; j < size; j++) {
			let div = document.createElement("div");
			div.classList.add("gridItem");

			div.addEventListener("mouseenter", (e) => {
				e.target.classList.add("gridItemActivated");
			});

			gridRow.appendChild(div);
		}

		container.appendChild(gridRow);
	}
}

createGrid(16);
