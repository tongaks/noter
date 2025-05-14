let previous = null;
let current = null;
let id_count = 0;

function handleClick(element) {
	current = element;

	let rotate_cntrls = document.querySelectorAll('.rotate-cntrl');
	for (let i = 0; i < rotate_cntrls.length; i++) {
		if (element.children[1] == rotate_cntrls[i]) continue;
		rotate_cntrls[i].style.display = 'none';
	}

	let rotate_stat = window.getComputedStyle(element.children[1]).display;
	if (rotate_stat == 'none') {
		let top = parseInt(window.getComputedStyle(element).height) + 10;
		console.log('top: ' + top);

		element.children[1].style.top = top + 'px';
		element.children[1].style.display = 'initial';
	}

	addDrag(element);
}


function addTextBox(text_in, event) {	
	let parent = document.getElementById('page-container');

	let container = document.createElement('div');
	container.className = 'text-box';
	container.id = id_count;
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