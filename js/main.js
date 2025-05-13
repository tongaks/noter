document.addEventListener('contextmenu', (e)=>e.preventDefault());

function pageFocus() {
	let edit_menus = document.getElementsByClassName('edit-element-menu'); 
	for (let i = 0; i < edit_menus.length; i++) {
		edit_menus[i].remove();
	}

	// console.log('page focus');
}