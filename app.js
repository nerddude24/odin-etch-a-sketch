const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	let gridRow = document.createElement("div");
	gridRow.className = "gridRow";
	for (let j = 0; j < 16; j++) {
		let div = document.createElement("div");
		div.className = "gridItem";

		gridRow.appendChild(div);
	}

	container.appendChild(gridRow);
}