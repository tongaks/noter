function drawRectShape() {
	let rect = document.createElement('div');
	rect.style.background = 'red';
	rect.style.position = 'absolute';
	rect.style.width = '10px';
	rect.style.height = '10px';

	function onClick(event) {
		console.log('click draw shape');

		console.log("x: " + (event.pageX - 10));
		console.log("y: " + (event.pageY - 10));

		rect.style.left = (event.pageX - 10) + 'px';
		rect.style.top = (event.pageY - 10) + 'px';		

		document.body.appendChild(rect);

		document.addEventListener('mousedown', drawRect);
		document.removeEventListener('click', onClick);
	}

	function drawRect(event) {
		function draw(e) {
			console.log("x: " + rect.style.left);
			console.log("y: " + rect.style.top);

			let x = parseInt(window.getComputedStyle(rect).width);
			let y = parseInt(window.getComputedStyle(rect).height);

	        rect.style.width = (x + e.movementX) + 'px';
	        rect.style.height = (y + e.movementY) + 'px';
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