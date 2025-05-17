function handleResize(element) {
	// let element_x = parseInt(window.getComputedStyle(element).left);
	// let element_y = parseInt(window.getComputedStyle(element).top);
	let current_dir = null;

	function resize(event) {
		if (current_dir == null) return;

		let direction = getDirection(event);
		let element_w = parseInt(window.getComputedStyle(element).width);
		let element_h = parseInt(window.getComputedStyle(element).height);

		if (direction == 'left') {
			element.style.width = element_w - event.movementX;
		} else if (direction == 'right') {
			element.style.width = element_w + event.movementX;
		} else if (direction == 'top') {
			element.style.height = element_h + event.movementY;
		} else if (direction == 'bottom') {
			element.style.height = element_h + event.movementY;
		}
	}

	function getDirection(event) {
		const rect = element.getBoundingClientRect();
		const threshold = 10;
		let direction = null;

		const mouseX = event.clientX;
		const mouseY = event.clientY;

		if (mouseX < rect.left + threshold) {
			direction = 'left';
		} else if (mouseX > rect.right - threshold) {
			direction = 'right';
		}

		if (mouseY < rect.top + threshold) {
			direction = 'top';
		} else if (mouseY > rect.bottom - threshold) {
			direction = 'bottom';
		}

		if (direction == 'top' || direction == 'bottom') {
			element.style.cursor = 'n-resize';
		} else if (direction == 'left' || direction == 'right') {
			element.style.cursor = 'e-resize';
		} else {
			element.style.cursor = 'default';
		}

		current_dir = direction;
		return direction;
	}

	element.addEventListener('mousemove', getDirection);
	element.addEventListener('mousedown', resize);
}

handleResize(document.getElementById('shape-box'));