function resizeDrag(direction) {
    let container = document.getElementById('container');

    function draw(e) {
        let containerStyles = window.getComputedStyle(container);
        let height = parseInt(containerStyles.height);
        let width = parseInt(containerStyles.width);
        let top = parseInt(containerStyles.top);
        let left = parseInt(containerStyles.left);

        switch (direction) {
            case 'top':
                container.style.height = (height - e.movementY) + 'px';
                container.style.top = (top + e.movementY) + 'px';
                break;
            case 'bottom':
                container.style.height = (height + e.movementY) + 'px';
                break;
            case 'left':
                container.style.width = (width - e.movementX) + 'px';
                container.style.left = (left + e.movementX) + 'px';
                break;
            case 'right':
                container.style.width = (width + e.movementX) + 'px';
                break;
        }
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', draw);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', draw);
    document.addEventListener('mouseup', onMouseUp);
}


function topDrag(element) {
	let container = document.getElementById('container');

	function draw(e) {
		let container_height = parseInt(window.getComputedStyle(container).height);
		let container_top = parseInt(window.getComputedStyle(container).top);

        container.style.height = (container_height - e.movementY) + 'px';
        container.style.top = (container_top + e.movementY) + 'px';
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
top_control.addEventListener('mousedown', ()=>resizeDrag('top'));

let bottom_control = document.getElementById('bottom-drag');
bottom_control.addEventListener('mousedown', ()=>resizeDrag('bottom'));

let left_control = document.getElementById('left-drag');
left_control.addEventListener('mousedown', ()=>resizeDrag('left'));

let right_control = document.getElementById('right-drag');
right_control.addEventListener('mousedown', ()=>resizeDrag('right'));