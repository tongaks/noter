let current_mode = null;

// add rotate handler to an element
function addRotate(element) {
	function handleRotate() {
	    function onMouseMove(event) {
	    	if (current_mode !== 'rotate') {
	    		return;
	    	}

		    let rotate_val_style = getComputedStyle(element);
			let rotate_val = parseFloat(rotate_val_style.rotate);
	        element.style.rotate = (rotate_val + event.movementY) + 'deg';
	    }

	    function onMouseUp() {
	        document.removeEventListener('mousemove', onMouseMove);
	        document.removeEventListener('mousemove', handleRotate);			
			document.removeEventListener('mousedown', handleRotate);
	        current_mode = null;
	    }

	    document.addEventListener('mousemove', onMouseMove);
	    document.addEventListener('mouseup', onMouseUp);
	}

	current_mode = 'rotate';
	element.classList.add('show-rotate');
	element.addEventListener('mousedown', handleRotate);
	console.log(current_mode);
}


// add hold-click + move event to an element
function addDrag(element) {
	function handleMove() {
		current_mode = 'move';
		element.style.cursor = 'move';

	    function onMouseMove(event) {
	    	if (current_mode !== 'move') {
	    		return;
	    	}

	        let x = parseInt(window.getComputedStyle(element).left);
	        let y = parseInt(window.getComputedStyle(element).top);
	        element.style.left = (x + event.movementX) + 'px';
	        element.style.top = (y + event.movementY) + 'px';
	    }

	    function onMouseUp() {
	        element.removeEventListener('mousemove', onMouseMove);
			element.removeEventListener('mousedown', handleMove);
			element.style.cursor = 'default';
	    }

	    element.addEventListener('mousemove', onMouseMove);
	    document.addEventListener('mouseup', onMouseUp);
	}

	element.addEventListener('mousedown', handleMove);
}