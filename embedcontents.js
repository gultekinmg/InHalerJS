///EXTENTION SCRIPT..
var id_DIV='+DIV'; 
var id_PARENT_DIV=id_DIV+0;
var id_PARA='+PARA', id_SPAN='+SPAN', id_UL='+UL', id_LI='+LI', id_BUTTON='+BTN';
//
function myEMBED(){
	var code_parent='var ParentPAGE;';
	Embed.SCRIPT('','parentwindow',code_parent); // B4 INSERTING an HTML FILE INTO PARENT, TELL WINDOW THIS IS PARENT
	// DEPROCODE INSERTION.no need except public variables.
	var code='function myReplace2(idNode){var str=Embed.NODE(idNode).textContent;var res1=str.replace(/blue/gi,"black fucking");var res2=res1.replace(/black|house|car/gi,function(x){return x.toUpperCase();});Embed.NODE(idNode).textContent="(replaced by code embeded into page): "+res2;}'
	///
	Embed.publicMethod();	/// log hello,
	Embed.DIV(id_DIV,id_PARENT_DIV);	/// Embed.DIV(_idPARENT,_idnode); IF FALSE CREATES INTO <BODY>
			Embed.NODE(id_PARENT_DIV).textContent = "DIV.TXT from attribute.";	/// Embed.NODE(_idnode); GETS NODE.
		Embed.SPAN(id_PARENT_DIV,id_SPAN+1); /// Embed.SPAN(_idPARENT,_idnode); ADD SPAN
			Embed.NODE(id_SPAN+1).textContent = "SPAN.TXT from attribute: Mr Blue has a blue house and a blue car.";
		Embed.PARA(id_SPAN+1,id_PARA+1,"Mr Blue has a blue house and a blue car."); 
	///
	Embed.HTML(id_PARENT_DIV,"plugin_content.html"); /// Embed.HTML(_idPARENT, Attribute_html); CROSS REFERENCE
	//Embed.SCRIPTSRC("plugin_content.js"); /// Embed.SCRIPTSRC(_Specify); LINKS A JSFILE, AND IT WORKS IMMEDIATELY.
	Embed.SCRIPT(id_PARENT_DIV,'content.js',code); ///  Embed.SCRIPT(_idPARENT,_idnode,CODE); EMBED CODE INTO PAGE.WORKS ALSO, DO SMALL.
	/// YOU CAN INSERT CODE ALSO FROM JSFILE. BUT WHO CARES WHILE LINKING SOURCE WORKS. IF NO NEED PUBLICVARS.
	Embed.DIV(id_PARENT_DIV,id_DIV+1);
	Embed.SPAN(id_DIV+1,id_SPAN+2); /// Embed.SPAN(_idPARENT,_idnode); ADD SPAN
		Embed.NODE(id_SPAN+2).textContent = "rvzspan.textContent from attribute.";
	Embed.PARA(id_SPAN+2,id_PARA+2,"Mr Blue has a blue house and a blue car."); /// Embed.PARA(_idPARENT,_idnode,_newTEXT);
		//Embed.ATTR(id_PARA+2,"style","float: left; margin: 0; padding: 0;"); /// ADD ATTRIBUTES ***
	Embed.UL(id_SPAN+2,id_UL+1); /// Embed.UL(_idPARENT,_idnode);
		//Embed.ATTR(id_UL,"style","float: left; margin: 0; padding: 0;");
	Embed.LI(id_UL+1,id_LI,"1.1.textContent"); /// Embed.LI(_idPARENT,_idnode,_text,_order);
	Embed.LI(id_UL+1,id_LI,"1.2.textContent");
	Embed.LI(id_UL+1,id_LI,"1.3.textContent",1);
	Embed.LI(id_UL+1,id_LI,"1.4.textContent",0); // no zero order
		//Embed.ATTR(id_LI,"style","list-style-type: none;")		
	Embed.DIV(id_PARENT_DIV,id_DIV+2);
	Embed.SPAN(id_DIV+2,id_SPAN+3);
	Embed.UL(id_SPAN+3,id_UL+2);
	Embed.LI(id_UL+2,'',"2.5.textContent");
	
	Embed.DIV(id_PARENT_DIV,id_DIV+3);
	
	Embed.BUTTON(id_PARENT_DIV,id_BUTTON+1); /// Embed.BUTTON(_idPARENT,_idnode);
		Embed.ATTR(id_BUTTON+1,"onclick","myCLCK(id_DIV+3)");
		Embed.ATTR(id_BUTTON+1,"style","top:200;");
};
function myCLCK(id_DIV){
	Embed.REMOVE(id_BUTTON+1); /// Embed.REMOVE(_idnode); REMOVES NODES
	Embed.IMAGE(id_DIV,'FIRST'); /// Embed.IMAGE(_idPARENT,_idnode);
		Embed.ATTR('FIRST',"src","./400px-Cat_silhouette.svg.png"); /// Embed.ATTR(_idnode,_idnew,_Specify);
		Embed.ATTR('FIRST',"type","PNG");
	Embed.BUTTON(id_DIV,id_BUTTON+2);
		Embed.ATTR(id_BUTTON+2,"onclick","myREVIZE()"); /// Embed.SIZE(_idnode,_height,_width);
		Embed.ATTR(id_BUTTON+2,"style","float: left; margin-left:100px;");
};
function myREVIZE(){
	Embed.SIZE('FIRST',200,200);
	Embed.NODE(id_BUTTON+2).remove();
	///
	//myReplace2("+SPAN1"); /// REPLACES ALL TEXT IN SPAN INTO INION
	myReplace2(id_PARA+1);	/// REPLACE ONLY PARA1.TXT
};

myEMBED();

function myReplace(idNode) {
	var str = Embed.NODE(idNode).textContent;  //console.log(str);
	var res1 = str.replace(/blue/gi, "red fucking");
	var res2 = res1.replace(/red|house|car/gi, function (x) { return x.toUpperCase(); });
	Embed.NODE(idNode).textContent="(replaced by _plugin_content.js): "+res2;
}
myReplace(id_PARA+2);

///
dragElement(document.getElementById("themeMENU"));
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
///