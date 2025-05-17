function topDrag(element) {
	let container = document.getElementById('container');

	function draw(e) {
		let container_height = parseInt(window.getComputedStyle(container).height);
		let container_bottom = parseInt(window.getComputedStyle(container).bottom);

        container.style.height = (container_height - e.movementY) + 'px';
        container.style.top = (container_bottom + e.movementY) + 'px';
	}

	function onMouseUp() {
		document.removeEventListener('mousemove', draw);
		// document.removeEventListener('mousedown', topDrag);
	}

	document.addEventListener('mousemove', draw);
	document.addEventListener('mouseup', onMouseUp);
}

function bottomDrag() {
	console.log('bottom');
}

function leftDrag() {
	console.log('left');
}

function rightDrag() {
	console.log('right');
}

let center = document.getElementById('center');
console.log(center.parentElement.className);
center.addEventListener('mousedown', ()=>addDrag(center.parentElement));

let top_control = document.getElementById('top-drag');
top_control.addEventListener('mousedown', ()=>topDrag(top_control));

let bottom_control = document.getElementById('bottom-drag');
bottom_control.addEventListener('mousedown', bottomDrag);

let left_control = document.getElementById('left-drag');
left_control.addEventListener('mousedown', leftDrag);

let right_control = document.getElementById('right-drag');
right_control.addEventListener('mousedown', rightDrag);