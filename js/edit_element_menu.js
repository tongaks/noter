function showEditElementMenu(element, event) {
	event.preventDefault();

	let edit_menus = document.getElementsByClassName('edit-element-menu'); 
	for (let i = 0; i < edit_menus.length; i++) {
		edit_menus[i].remove();
	}

	const editElementMenu = document.createElement("div");
	editElementMenu.className = "edit-element-menu";

	const heading = document.createElement("h2");
	heading.textContent = "Edit";
	editElementMenu.appendChild(heading);

	// ----- Color Section -----
	const colorsDiv = document.createElement("div");
	colorsDiv.className = "edit-color";

	const colorInput = document.createElement("input");
	colorInput.id = "color-table";
	colorInput.type = "color";
	colorInput.oninput = () => {
		element.style.background = colorInput.value;
	};

	const redColor = document.createElement("div");
	redColor.id = "red-color";
	redColor.className = "preset-color";
	redColor.style.background = "red";
	redColor.onclick = () => {
		element.style.background = "red";
	};

	const blueColor = document.createElement("div");
	blueColor.id = "blue-color";
	blueColor.className = "preset-color";
	blueColor.style.background = "blue";
	blueColor.onclick = () => {
		element.style.background = "blue";
	};

	const greenColor = document.createElement("div");
	greenColor.id = "green-color";
	greenColor.className = "preset-color";
	greenColor.style.background = "green";
	greenColor.onclick = () => {
		element.style.background = "green";
	};

	colorsDiv.appendChild(colorInput);
	colorsDiv.appendChild(redColor);
	colorsDiv.appendChild(blueColor);
	colorsDiv.appendChild(greenColor);
	editElementMenu.appendChild(colorsDiv);

	// ----- Border Section -----
	const borderDiv = document.createElement("div");
	borderDiv.className = "edit-border";

	const borderRadiusInput = document.createElement("input");
	borderRadiusInput.id = "border-radius";
	borderRadiusInput.type = "number";
	borderRadiusInput.placeholder = "Border radius by px";
	borderRadiusInput.oninput = () => {
		const isPercent = borderUnit === "percent";
		const value = borderRadiusInput.value;
		element.style.borderRadius = isPercent ? value + "%" : value + "px";
		borderRadiusInput.placeholder = "Border radius by " + (isPercent?"%":"px");
	};

	let borderUnit = "px";

	const pixelBtn = document.createElement("div");
	pixelBtn.className = "border-button";
	pixelBtn.id = "border-px";
	pixelBtn.textContent = "Pixel";
	pixelBtn.onclick = () => {
		borderUnit = "px";
		borderRadiusInput.oninput();
	};

	const percentBtn = document.createElement("div");
	percentBtn.className = "border-button";
	percentBtn.id = "border-percent";
	percentBtn.textContent = "Percentage";
	percentBtn.onclick = () => {
		borderUnit = "percent";
		borderRadiusInput.oninput();
	};

	borderDiv.appendChild(borderRadiusInput);
	borderDiv.appendChild(pixelBtn);
	borderDiv.appendChild(percentBtn);
	editElementMenu.appendChild(borderDiv);

	// ----- Position & Attach Menu -----
	const rect = element.getBoundingClientRect();
	editElementMenu.style.position = "absolute";
	editElementMenu.style.top = (rect.top + window.scrollY) + "px";
	editElementMenu.style.left = (rect.right + 20) + "px";

	document.body.appendChild(editElementMenu);
}
