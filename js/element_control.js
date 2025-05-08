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



// add move handler to an element
function addDrag(element) {
	current_mode = 'move';

	function handleMove() {
	    function onMouseMove(event) {

	    	// return if the current mode is rotate
	    	if (current_mode == 'rotate') {
	    		return;
	    	}

	        let x = parseInt(window.getComputedStyle(element).left);
	        let y = parseInt(window.getComputedStyle(element).top);
	        element.style.left = (x + event.movementX) + 'px';
	        element.style.top = (y + event.movementY) + 'px';
	    }

	    function onMouseUp() {
	        document.removeEventListener('mousemove', onMouseMove);
	        document.removeEventListener('mousedown', handleMove);
			element.removeEventListener('mousedown', handleMove);
	    }

	    document.addEventListener('mousemove', onMouseMove);
	    document.addEventListener('mouseup', onMouseUp);
	}

	element.addEventListener('mousedown', handleMove);
	console.log(current_mode);
}