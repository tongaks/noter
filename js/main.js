document.addEventListener('contextmenu', (e)=>e.preventDefault());

function pageFocus() {
	let edit_menus = document.getElementsByClassName('edit-element-menu'); 
	for (let i = 0; i < edit_menus.length; i++) {
		edit_menus[i].remove();
	}

	let rotate_cntrls = document.getElementsByClassName('text-box');
	for (let i = 0; i < rotate_cntrls.length; i++) {
		if (rotate_cntrls[i] == current) continue;
		rotate_cntrls[i].children[1].style.display = 'none';
	}

	// let rotate_cntrls = document.getElementsByClassName('rotate-cntrl');
	// for (let i = 0; i < rotate_cntrls.length; i++) {
	// 	rotate_cntrls[i].style.display = 'none';
	// }

	// console.log('page focus');
}