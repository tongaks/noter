document.addEventListener('contextmenu', (e)=>e.preventDefault());

function addElementDialog(event) {
	let container = document.createElement('div');
	container.className = 'toolbox'
	container.style.left = event.pageX + 'px';
	container.style.top = (event.pageY - 50) + 'px';

	function handleSelectTool() { container.remove(); }
	document.addEventListener('mouseup', handleSelectTool);

	const tools = ['Text', 'Shape', 'Image'];
	for (let i = 0; i < tools.length; i++) {
		let tool = document.createElement('div');
		tool.className = 'tool';
		tool.innerHTML = tools[i];

		tool.addEventListener('mousedown', ()=> {
			console.log('tool selected: ' + tools[i])
			if (i == 0) addTextBoxDialog();
			if (i == 1)  drawRectShape();
		});

		container.appendChild(tool);
	}

	document.body.appendChild(container);
	console.log('done');
}