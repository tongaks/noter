let previous = null;
let current = null;
let id_count = 0;

function handleClick(element) {
	// check if current is another element
	// if not, set the new current and previous
	if (current !== element.id) {
		previous = current;
		current = element.id;
		const rotateElem = document.getElementById('rotate-' + current);
		if (rotateElem && rotateElem.style.display == null) {
			console.log('rotate is null');
			console.log(rotateElem.style.display);
		}
		// document.getElementById('rotate-' + current).style.display = 'initial';
		// document.getElementById('rotate-' + previous).style.display = 'none';
	} else {
		document.getElementById('rotate-' + current).style.display = 'initial';
	}

	addDrag(element);
}


function addTextBox(text_in) {	
	current = id_count;
	if (current == 0)
		previous = current;

	let container = document.createElement('div');
	container.className = 'text-box';
	container.id = id_count;

	let text = document.createElement('h1');
	text.className = 'text';
	text.innerHTML = text_in;
	text.addEventListener('click', ()=> handleClick(container));

	let rotate_cntrl = document.createElement('div');
	rotate_cntrl.className = 'rotate-cntrl';
	rotate_cntrl.id = 'rotate-' + id_count;
	rotate_cntrl.addEventListener('click', ()=> {
		addRotate(container);
	});

	container.appendChild(text);
	container.appendChild(rotate_cntrl);

	id_count++;

	document.getElementById('left-page').appendChild(container);
}