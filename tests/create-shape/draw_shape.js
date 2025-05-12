function drawRectShape() {
	let rect = document.createElement('div');
	rect.className = 'rectangle-style'

	let container = document.createElement('div');
	container.className = 'text-box';
	container.addEventListener('contextmenu', (e)=>showEditElementMenu(rect, e));
	// container.id = id_count;
	// current = id_count;
	// id_count++;

	let rotate_cntrl = document.createElement('div');
	rotate_cntrl.className = 'rotate-cntrl';
	// rotate_cntrl.id = 'rotate-' + id_count;
	rotate_cntrl.addEventListener('click', ()=> {
		addRotate(container);
	});

	function onClick(event) {

		container.style.left = event.pageX + 'px';
		container.style.top = (event.pageY - 60) + 'px';

		container.appendChild(rect);
		container.appendChild(rotate_cntrl);
		document.body.appendChild(container);

		document.removeEventListener('click', onClick);
		document.addEventListener('mousedown', drawRect);
	}

	function drawRect() {
		function draw(e) {
			let x = parseInt(window.getComputedStyle(rect).width);
			let y = parseInt(window.getComputedStyle(rect).height);
	        rect.style.width = (x + e.movementX) + 'px';
	        rect.style.height = (y + e.movementY) + 'px';
		}

		function onMouseUp() {
			document.removeEventListener('mousemove', draw);
			document.removeEventListener('mousedown', drawRect);
		}

		document.addEventListener('mousemove', draw);
		document.addEventListener('mouseup', onMouseUp);
	}

	document.addEventListener('click', onClick);
}