function resizeDrag(direction) {
    let container = document.getElementById('container');

    function resize(e) {
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
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', onMouseUp);
}

let center = document.getElementById('center');
console.log(center.parentElement.className);
center.addEventListener('mousedown', ()=>addDrag(center.parentElement));

let top_control = document.getElementById('top-drag');
top_control.addEventListener('mousedown', (e)=> {
    resizeDrag('top');
});

let bottom_control = document.getElementById('bottom-drag');
bottom_control.addEventListener('mousedown', ()=>resizeDrag('bottom'));

let left_control = document.getElementById('left-drag');
left_control.addEventListener('mousedown', (e)=> {
    e.stopPropagation();
    resizeDrag('left');
});


let right_control = document.getElementById('right-drag');
right_control.addEventListener('mousedown', (e)=> {
    e.stopPropagation();
    resizeDrag('right');
});