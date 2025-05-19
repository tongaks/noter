function resizeHover(element) {
	let currentDirection = null;

	function getDirection(event) {
		const rect = element.getBoundingClientRect();
		const threshold = 15;
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


function resizeDrag(element, direction) {
    function resize(e) {
        let elementStyles = window.getComputedStyle(element);
        let height = parseInt(elementStyles.height);
        let width = parseInt(elementStyles.width);
        let top = parseInt(elementStyles.top);
        let left = parseInt(elementStyles.left);

        let rotate_cntrl = element.children[1];
        let rc_top = parseInt(window.getComputedStyle(rotate_cntrl).top);

        switch (direction) {
            case 'top':
                element.style.top = (top + e.movementY) + 'px';
                element.style.height = (height - e.movementY) + 'px';
                rotate_cntrl.style.top = (rc_top - e.movementY) + 'px';
                break;
            case 'bottom':
                element.style.height = (height + e.movementY) + 'px';
                element.style.top = top + 'px';
                rotate_cntrl.style.top = (rc_top + e.movementY) + 'px';
                break;
            case 'left':
                element.style.width = (width - e.movementX) + 'px';
                element.style.left = (left + e.movementX) + 'px';
                break;
            case 'right':
                element.style.width = (width + e.movementX) + 'px';
                break;
        }
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', onMouseUp);
}