let previous = null;
let current = null;
let id_count = 0;

function handleClick(element) {
	current = element;

	let rotate_cntrls = document.querySelectorAll('.rotate-cntrl');
	for (let i = 0; i < rotate_cntrls.length; i++) {
		if (element.children[1] == rotate_cntrls[i]) continue;
		rotate_cntrls[i].style.display = 'none';
		rotate_cntrls[i].parentElement.style.borderColor = 'transparent';
	}

	let rotate_stat = window.getComputedStyle(element.children[1]).display;
	if (rotate_stat == 'none') {
		let top = parseInt(window.getComputedStyle(element).height) + 10;
		console.log('top: ' + top);

		element.children[1].style.top = top + 'px';
		element.children[1].style.display = 'initial';
		element.style.borderColor = 'black'
	}

	addDrag(element);
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





// copy
function addTextBoxWithResize(text_in, event) {	
	let parent = document.getElementById('page-container');

	let resize_controllers = addResizeControllers();

	let container = document.createElement('div');
	container.className = 'text-box';
	container.id = id_count;

	container.addEventListener('click', (e)=> {
		container.style.border = '2px solid black';
	});

	container.addEventListener('contextmenu', (e)=>showEditElementMenu(container, e));
	current = container;

	let text = document.createElement('h1');
	text.className = 'text';
	text.innerHTML = text_in;

	text.addEventListener('click', ()=> handleClick(container));

	let rotate_cntrl = document.createElement('div');
	rotate_cntrl.className = 'rotate-cntrl';
	rotate_cntrl.addEventListener('click', ()=>addRotate(container));

	container.appendChild(resize_controllers[0]);  //top
	resize_controllers[1].appendChild(text);  	   // append text to center
	resize_controllers[1].appendChild(resize_controllers[3])  // append right resize controller
	container.appendChild(resize_controllers[1]);
	container.appendChild(resize_controllers[4]) // bottom resize
	container.appendChild(rotate_cntrl);  		// rotate controll

	id_count++;
	parent.appendChild(container);
}



function addResizeControllers() {
	const topDrag = document.createElement('div');
	topDrag.className = 'top-drag';

	const center = document.createElement('div');
	center.className = 'center';

	const leftDrag = document.createElement('div');
	leftDrag.className = 'left-drag';

	const rightDrag = document.createElement('div');
	rightDrag.className = 'right-drag';

	const bottomDrag = document.createElement('div');
	bottomDrag.className = 'bottom-drag';

	center.appendChild(leftDrag);

	return [topDrag, center, leftDrag, rightDrag, bottomDrag];
}