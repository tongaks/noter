function drawRectShape() {
	let rect = document.createElement('div');
	rect.className = 'rectangle-style'
	rect.addEventListener('click', ()=>handleClick(container));

	let container = document.createElement('div');
	container.className = 'text-box';
	current = container;

	container.addEventListener('contextmenu', (e)=>showEditElementMenu(rect, e));

	let rotate_cntrl = document.createElement('div');
	rotate_cntrl.className = 'rotate-cntrl';
	rotate_cntrl.id = 'rotate-' + id_count;
	rotate_cntrl.addEventListener('click', ()=> {
		addRotate(container);
	});

	function onClick(event) {

		container.style.left = event.pageX + 'px';
		container.style.top = (event.pageY - 60) + 'px';

		container.appendChild(rect);
		container.appendChild(rotate_cntrl);
		document.getElementById('page-container').appendChild(container);

		document.removeEventListener('click', onClick);

		// container.addEventListener('click', (e)=> {
		// 	container.style.border = '2px solid black';
		// });

		document.addEventListener('mousedown', drawRect);
	}

	function drawRect() {
		function draw(e) {
			let x = parseInt(window.getComputedStyle(rect).width);
			let y = parseInt(window.getComputedStyle(rect).height);

	        container.style.width = (x + e.movementX) + 'px';
	        container.style.height = (y + e.movementY) + 'px';
		}

		function onMouseUp() {
			container.addEventListener('click', (e)=> {
				container.style.border = '2px solid black';
			});

			document.removeEventListener('mousemove', draw);
			document.removeEventListener('mousedown', drawRect);
		}

		document.addEventListener('mousemove', draw);
		document.addEventListener('mouseup', onMouseUp);
	}

	document.addEventListener('click', onClick);
}