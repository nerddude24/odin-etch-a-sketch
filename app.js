const container = document.querySelector(".container");

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

createGrid(32);
