let rect_count = 0;

document.body.addEventListener('contextmenu', addElementDialog);

function restart() {
	let rects = document.getElementsByClassName('rect');
	document.getElementById('line').remove();
	for (let i = 0; i < rects.length; i++) {
		rects[i].remove();
	}

	rect_count = 0;
}

function callDrawLine() {
	let rect1 = document.getElementById('rect-0');
	let rect2 = document.getElementById('rect-1');
	drawLine(rect1, rect2);
}

function createRectStatic(x_pos, y_pos) {
	// let x_pos = document.getElementById('x-pos').value;
	// let y_pos = document.getElementById('y-pos').value;

	let rect = document.createElement('div');
	rect.id = 'rect-' + rect_count;
	rect.className = 'rect';
	rect.style.top = y_pos + 'px';
	rect.style.left = x_pos + 'px';
	rect.onclick = ()=> {
		addDrag(rect);
	}

	document.body.appendChild(rect);
	rect_count+=1;
}

function createRect() {
	let x_pos = document.getElementById('x-pos').value;
	let y_pos = document.getElementById('y-pos').value;

	let rect = document.createElement('div');
	rect.id = 'rect-' + rect_count;
	rect.className = 'rect';
	rect.style.top = y_pos + 'px';
	rect.style.left = x_pos + 'px';
	rect.onclick = ()=> {
		addDrag(rect);
	}


	document.body.appendChild(rect);
	rect_count+=1;
}

function drawLine(source, target) {
	let source_styles = window.getComputedStyle(source);
	let source_height = parseInt(source_styles.height);
	let source_width = parseInt(source_styles.width);
	let source_top = parseInt(source_styles.top);
	let source_left = parseInt(source_styles.left);

	let target_styles = window.getComputedStyle(target);
	let target_height = parseInt(target_styles.height);
	let target_width = parseInt(target_styles.width);
	let target_top = parseInt(target_styles.top);
	let target_left = parseInt(target_styles.left);

	let total_height = (target_top - source_top) + (target_height/2);
	let total_width =  target_left - source_left;

	source.classList.add(target.id);
	target.classList.add(source.id);

	console.log('totH: ' + total_height);
	console.log('totW: ' + total_width);

	let line = document.createElement('div');
	line.id = 'line-' + source.id + '-to-' + target.id;
	line.className = 'line';

	line.style.width = total_width + 'px';
	line.style.height = total_height + 'px';

	line.style.top = (source_top) + 'px';
	line.style.left = ((source_left + source_width) - (source_width / 2)) + 'px';

	if (source_left < target_left) {
		line.style.borderBottom = '2px solid black';
		line.style.borderLeft = '2px solid black';
	} else if(source_left > target_left) {
		line.style.borderBottom = '2px solid black';
		line.style.borderRight = '2px solid black';		
	}

	document.body.appendChild(line);
}

// createRectStatic(200, 200);
// createRectStatic(600, 600);
// callDrawLine();