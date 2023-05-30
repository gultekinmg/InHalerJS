//Make the DIV element draggable:
function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;/* if present, the header is where you move the DIV from:*/
	} else {elmnt.onmousedown = dragMouseDown;}/* otherwise, move the DIV from anywhere inside the DIV:*/
	function dragMouseDown(e) {e = e || window.event; e.preventDefault(); 
		pos3 = e.clientX;pos4 = e.clientY;// get the mouse cursor position at startup:
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;    // call a function whenever the cursor moves:
	}
	function elementDrag(e) {e = e || window.event; e.preventDefault();    
		pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY;// calculate the new cursor position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";// set the element's new position:
	}
	function closeDragElement() {/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}