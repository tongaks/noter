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

	console.log('totH: ' + total_height);
	console.log('totW: ' + total_width);

	let line = document.createElement('div');
	line.id = 'line';
	line.style.position = 'absolute';
	line.style.zIndex = '-1';
	line.style.background = 'whitesmoke';

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