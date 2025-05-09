function drawRectShape() {
	let rect = document.createElement('div');
	rect.className = 'rectangle-style'
	rect.addEventListener('click', ()=>handleClick(rect));

	function onClick(event) {
		current = id_count;
		let container = document.createElement('div');
		container.className = 'text-box';
		container.id = id_count;	

		let page = document.getElementById('left-page');
		let page_pos = page.getBoundingClientRect();
		rect.style.left = Math.abs(parseInt(page_pos.left - event.pageX)) + 'px';
		rect.style.top = Math.abs(parseInt(page_pos.top - event.pageY)) + 'px';		

		let rotate_cntrl = document.createElement('div');
		rotate_cntrl.className = 'rotate-cntrl';
		rotate_cntrl.id = 'rotate-' + id_count;
		rotate_cntrl.addEventListener('click', ()=> {
			addRotate(container);
		});

		container.appendChild(rect);
		container.appendChild(rotate_cntrl);

		id_count++;

		page.appendChild(container);
		// document.removeEventListener('click', onClick);
		document.addEventListener('mousedown', drawRect);
	}

	function drawRect(event) {
		document.removeEventListener('click', onClick);
		function draw(e) {
			let x = parseInt(window.getComputedStyle(rect).width);
			let y = parseInt(window.getComputedStyle(rect).height);

	        rect.style.width = (x + e.movementX) + 'px';
	        rect.style.height = (y + e.movementY) + 'px';

	        // console.log('x: ' + event.pageX);
	        // console.log('y: ' + event.pageY);
		}

		function onMouseUp() {
			document.removeEventListener('mousemove', draw);
			document.removeEventListener('mousedown', drawRect);
			// element.removeEventListener('mousedown', drawRect);
		}

		document.addEventListener('mousemove', draw);
		document.addEventListener('mouseup', onMouseUp);
	}

	document.addEventListener('click', onClick);
}