function addTextBoxDialog() {
	function handleText() {
		if (textarea.value == '') {
			alert('Text is empty');
			container.remove();
			return;
		}

		addTextBox(textarea.value, event);
		container.remove();		
	}


	let container = document.createElement('div');
	container.className = 'dialog';
	container.id = 'add-text-dialog';

	let title = document.createElement('h2');
	title.innerHTML = 'Add title';

	let textarea = document.createElement('textarea');
	textarea.placeholder = 'Enter the text here';
	textarea.addEventListener('keydown', (e)=> {
		if (e.keyCode == 13) handleText();
	});

	let controls = document.createElement('div');
	controls.className = 'controls';
	controls.id = 'dialog-control';

	let add_button = document.createElement('div');
	let cancel_button = document.createElement('div');

	cancel_button.id = 'cancel-button';
	add_button.id = 'add-button';

	add_button.className = 'button';
	cancel_button.className = 'button';

	add_button.innerHTML = 'Add text';
	cancel_button.innerHTML = 'Cancel';

	add_button.onclick = ()=>handleText();
	
	cancel_button.onclick = () => {container.remove()};

	controls.appendChild(add_button);
	controls.appendChild(cancel_button);

	// add all elements to the container
	container.appendChild(title);
	container.appendChild(textarea);
	container.appendChild(controls);

	document.body.appendChild(container);
}