function showEditElementMenu(element, event) {
	event.preventDefault();

	document.querySelector(".edit-element-menu")?.remove();

	const editElementMenu = document.createElement("div");
	editElementMenu.className = "edit-element-menu";

	const heading = document.createElement("h2");
	heading.textContent = "Edit";
	editElementMenu.appendChild(heading);

	// --- Background Color Section ---
	const bgColorDiv = document.createElement("div");
	bgColorDiv.className = "edit-color";

	const bgLabel = document.createElement("h3");
	bgLabel.textContent = "BG color:";
	bgColorDiv.appendChild(bgLabel);

	const bgColorInput = document.createElement("input");
	bgColorInput.type = "color";
	bgColorInput.placeholder = "Color";
	bgColorInput.oninput = () => {
		element.style.background = bgColorInput.value;
	};

	const redBg = document.createElement("div");
	redBg.className = "preset-color";
	redBg.style.background = "red";
	redBg.onclick = () => element.style.background = "red";

	const blueBg = document.createElement("div");
	blueBg.className = "preset-color";
	blueBg.style.background = "blue";
	blueBg.onclick = () => element.style.background = "blue";

	const greenBg = document.createElement("div");
	greenBg.className = "preset-color";
	greenBg.style.background = "green";
	greenBg.onclick = () => element.style.background = "green";

	bgColorDiv.appendChild(bgColorInput);
	bgColorDiv.appendChild(redBg);
	bgColorDiv.appendChild(blueBg);
	bgColorDiv.appendChild(greenBg);
	editElementMenu.appendChild(bgColorDiv);

	// --- Font Color Section ---
	const fontColorDiv = document.createElement("div");
	fontColorDiv.className = "edit-color";

	const fontLabel = document.createElement("h3");
	fontLabel.textContent = "Font color:";
	fontColorDiv.appendChild(fontLabel);

	const fontColorInput = document.createElement("input");
	fontColorInput.type = "color";
	fontColorInput.placeholder = "Color";
	fontColorInput.oninput = () => {
		element.style.color = fontColorInput.value;
	};

	const redFont = document.createElement("div");
	redFont.className = "preset-color";
	redFont.style.background = "red";
	redFont.onclick = () => element.style.color = "red";

	const blueFont = document.createElement("div");
	blueFont.className = "preset-color";
	blueFont.style.background = "blue";
	blueFont.onclick = () => element.style.color = "blue";

	const greenFont = document.createElement("div");
	greenFont.className = "preset-color";
	greenFont.style.background = "green";
	greenFont.onclick = () => element.style.color = "green";

	fontColorDiv.appendChild(fontColorInput);
	fontColorDiv.appendChild(redFont);
	fontColorDiv.appendChild(blueFont);
	fontColorDiv.appendChild(greenFont);
	editElementMenu.appendChild(fontColorDiv);

	// --- Border Radius Section ---
	const borderDiv = document.createElement("div");
	borderDiv.className = "edit-border";

	const borderRadiusInput = document.createElement("input");
	borderRadiusInput.id = "border-radius";
	borderRadiusInput.type = "number";
	borderRadiusInput.placeholder = "Border radius by px";

	let borderUnit = "px";

	borderRadiusInput.oninput = () => {
		const val = borderRadiusInput.value;
		element.style.borderRadius = borderUnit === "percent" ? val + "%" : val + "px";
		borderRadiusInput.placeholder = `Border radius by ${borderUnit === "percent" ? "%" : "px"}`;
	};

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
	percentBtn.id = "border-perc";
	percentBtn.textContent = "Percentage";
	percentBtn.onclick = () => {
		borderUnit = "percent";
		borderRadiusInput.oninput();
	};

	borderDiv.appendChild(borderRadiusInput);
	borderDiv.appendChild(pixelBtn);
	borderDiv.appendChild(percentBtn);
	editElementMenu.appendChild(borderDiv);

	// --- Position Menu Next to Element ---
	const rect = element.getBoundingClientRect();
	editElementMenu.style.position = "absolute";
	editElementMenu.style.top = (rect.top + window.scrollY) + "px";
	editElementMenu.style.left = (rect.right + 20) + "px";

	document.body.appendChild(editElementMenu);
}
