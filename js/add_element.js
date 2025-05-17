let previous = null;
let current = null;
let id_count = 0;

function handleClick(element) {
	current = element;
	element.tabIndex = '0';

	let rotate_cntrls = document.querySelectorAll('.rotate-cntrl');
	for (let i = 0; i < rotate_cntrls.length; i++) {
		if (element.children[1] == rotate_cntrls[i]) continue;
		rotate_cntrls[i].style.display = 'none';
		rotate_cntrls[i].parentElement.style.borderColor = 'transparent';
	}

	let rotate_stat = window.getComputedStyle(element.children[1]).display;
	if (rotate_stat == 'none') {
		let top = parseInt(window.getComputedStyle(element).height) + 10;
		element.children[1].style.top = top + 'px';
		element.children[1].style.display = 'initial';
		element.style.borderColor = 'black'
	}

	element.focus();
	keyEvent(element);
	addDrag(element);
}

function keyEvent(element) {
	let isPressed = false;

	function handleKeyDown(e) {
		if (e.key === 'Backspace') {
			element.remove();
			return;
		} else if (e.ctrlKey && e.keyCode == 219) {
			let z_index = parseInt(window.getComputedStyle(element).zIndex);
			element.style.zIndex = z_index + 1;
			console.log('z_index: ' + element.style.zIndex);
			return;
		} else if (e.ctrlKey && e.keyCode == 221) {
			let z_index = parseInt(window.getComputedStyle(element).zIndex);
			if (z_index > 1)
				element.style.zIndex = z_index - 1;
			console.log('z_index: ' + element.style.zIndex);
			return;
		}
	}

	function handleKeyUp(e) {
		isPressed = false;
	}

	element.addEventListener('keydown', handleKeyDown);
	element.addEventListener('keyup', handleKeyUp);
}

function addTextBox(text_in, event) {	
	let parent = document.getElementById('page-container');

	let container = document.createElement('div');
	container.className = 'text-box';
	container.id = id_count;

	container.addEventListener('click', (e)=> {
		container.style.border = '2px solid black';
	});

	container.addEventListener('contextmenu', (e)=>showEditElementMenu(container, e));
	container.addEventListener('mouseenter', (e)=>resizeHover(container));

	current = container;

	let text = document.createElement('h1');
	text.className = 'text';
	text.innerHTML = text_in;

	text.addEventListener('click', ()=> handleClick(container));

	let rotate_cntrl = document.createElement('div');
	rotate_cntrl.className = 'rotate-cntrl';
	rotate_cntrl.id = 'rotate-' + id_count;
	rotate_cntrl.style.height = 'fit-content';
	rotate_cntrl.addEventListener('click', ()=> {
		addRotate(container);
	});

	container.appendChild(text);
	container.appendChild(rotate_cntrl);

	id_count++;
	parent.appendChild(container);
}