function resizeHover(element) {
	let currentDirection = null;

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

		return direction;
	}

	function onMouseMove(event) {
		event.stopPropagation();

		const dir = getDirection(event);
		currentDirection = dir;

		if (dir === 'left' || dir === 'right') {
			element.style.cursor = 'e-resize';
		} else if (dir === 'top' || dir === 'bottom') {
			element.style.cursor = 'n-resize';
		} else {
			element.style.cursor = 'move';
		}
	}

	function onMouseDown(event) {
		event.stopPropagation();
		current_mode = 'resize';

		if (currentDirection) {
			resizeDrag(element, currentDirection);
		}
	}

	function onMouseUp() {
		element.removeEventListener('mousedown', onMouseDown);
	}

	document.addEventListener('mousemove', onMouseMove);
	element.addEventListener('mousedown', onMouseDown);
	element.addEventListener('mouseup', onMouseUp);
}
