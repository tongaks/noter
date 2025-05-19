function resizeDrag(element, direction) {
    function resize(e) {
        e.stopPropagation();
        let elementStyles = window.getComputedStyle(element);

        let rotate_cntrl = element.children[1];
        let rc_top = parseInt(window.getComputedStyle(rotate_cntrl).top);
        console.log('rc-top: ' + rc_top);

        let height = parseInt(elementStyles.height);
        let width = parseInt(elementStyles.width);
        let top = parseInt(elementStyles.top);
        let left = parseInt(elementStyles.left);

        switch (direction) {
            case 'top':
                element.style.height = (height - e.movementY) + 'px';
                element.style.top = (top + e.movementY) + 'px';
                break;
            case 'bottom':
                element.style.height = (height + e.movementY) + 'px';
                rotate_cntrl.style.top = (rc_top + e.movementY) + 'px';
                break;
            case 'left':
                element.style.width = (width - e.movementX) + 'px';
                element.style.left = (left + e.movementX) + 'px';
                break;
            case 'right':
                element.style.width = (width + e.movementX) + 'px';
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

// function getResizeControlllers() {

// }

// let center = document.getElementById('center');
// console.log(center.parentElement.className);
// center.addEventListener('mousedown', ()=>addDrag(center.parentElement));

// let top_control = document.getElementById('top-drag');
// top_control.addEventListener('mousedown', (e)=> {
//     resizeDrag('top');
// });

// let bottom_control = document.getElementById('bottom-drag');
// bottom_control.addEventListener('mousedown', ()=>resizeDrag('bottom'));

// let left_control = document.getElementById('left-drag');
// left_control.addEventListener('mousedown', (e)=> {
//     e.stopPropagation();
//     resizeDrag('left');
// });


// let right_control = document.getElementById('right-drag');
// right_control.addEventListener('mousedown', (e)=> {
//     e.stopPropagation();
//     resizeDrag('right');
// });