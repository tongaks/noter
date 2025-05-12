// this is a better implementation of adding hold-click and move

function onFocus(element) {
	element.style.border = '2px solid black'
	addDrag(element);
}

function addDrag(element) {
	function handleMove() {
    	element.style.cursor = 'move';

	    function onMouseMove(event) {
	        let x = parseInt(window.getComputedStyle(element).left);
	        let y = parseInt(window.getComputedStyle(element).top);
	        element.style.left = (x + event.movementX) + 'px';
	        element.style.top = (y + event.movementY) + 'px';
	    }

	    function onMouseUp() {
	        document.removeEventListener('mousemove', onMouseMove);
			element.removeEventListener('mousedown', handleMove);
	    	element.style.cursor = 'default';
	    }

	    document.addEventListener('mousemove', onMouseMove);
	    document.addEventListener('mouseup', onMouseUp);
	}

	element.addEventListener('mousedown', handleMove);
}