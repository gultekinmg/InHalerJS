/*///  inHaler JSlibrary                                
	/// TODO:	//parent_div.removeChild(child); //not on 
	// input.setAttribute("type", "file");  input.setAttribute("name", id); 
	// if(content){var t = document.createTextNode(content+"@Paragraph("+id+')@'+ParentID);	para.appendChild(t); }	
The easiest way to find an HTML element in the DOM, is by using the element id.
	var myElement = document.getElementById("intro"); 
	var y = myElement.getElementsByTagName("p"); 
	var x = document.getElementsByClassName("intro"); var x = document.querySelectorAll("p.intro"); 
	document.getElementById("demo").innerHTML = 'The 2nd dom (index 1) with class="intro": ' + x[1].innerHTML;  
*/
	var 	file_location=window.location.host;
	var 	Parent_DIV_ID='EMBEDEN_MODULES', DIV_ID= "+DIV", P_ID='+P', SPAN_ID='+SPAN', id_UL='+UL', id_LI='+LI', BUTTON_ID='+BTN';
	var 	FORM_ID="+form", INPUT_ID="+FILEinput", xHTML_ID="NewDIVtoEmbedHTML";			
	var	DN=FN=IN=PN=SN=UN=LN=BN=0;
	var putin=".input_container {border: 1px solid #e5e5e5; width:max-content; background-color:beige;}"+
		".input_container input[type=file]::file-selector-button {background-color:#fff;color:#000;"+
				"border:0;border-right:1px solid #e5e5e5;padding:10px 15px;border-radius: .2em;margin-right:20px;transition:.2s;}"+
		".input_container input[type=file]::file-selector-button:hover { background-color: #81ecec; border: 2px solid #00cec9;}";
	function $(id){ let wtf=document.getElementById(id); return wtf? wtf : document.body; }
	function SIZE(id,h,w) { var x = $(id); x.height= h; x.width = w; }
	function _(id,h,w) { var x = $(id); x.height= h; x.width = w; }
	function ATTR(id,attr_name, content) { $(id).setAttribute(attr_name, content); }
	function DEL(id) { $(id).remove(); }
	function NEW(Type, ParentID, ID, Content, HTML, order, replaced) { 
		var newNode = document.createElement(Type); 
		var parentnode = $(ParentID); 
		if(ID) newNode.id = ID;		
		if(Content) newNode.textContent = Content; // var textnode = document.createTextNode(_text); newItem.appendChild(textnode);
		if(HTML)newNode.innerHTML = HTML;
		if(order>=0) { parentnode.insertBefore( newNode, parentnode.childNodes[0]); /* console.log(order,newNode,parentnode.childNodes[0]); */ } 
		else { 
			if(replaced) parentnode.replaceChild($(replaced), newNode); else parentnode.appendChild(newNode);
		}
		return newNode;
	}	
	/// 																																																						
	function _importEmbededJS(that){ return that.split('<script>')[1].split('</script>')[0];}
	function _includeFILE(that,CallBack){ var fr=new FileReader();
		fr.onload=function(){ 
			DEL(FORM_ID);
			$(xHTML_ID).innerHTML+=fr.result;
			var eScr= _importEmbededJS(fr.result);
			if(eScr) NEW('SCRIPT',xHTML_ID,'WirusWork',eScr); /// embed EmbededJS into ParentPage
			if(CallBack)CallBack();
		}
		fr.readAsText(that.files[0]);
	}
	function _includeXMLHttp() { /* embed HTML elements from a page XMLHttpRequest*/
	var zTag, i, eleman, file, xhttp;  
	zTag = document.getElementsByTagName("*");
	for (i = 0; i < zTag.length; i++) {							/*loop through a collection of all HTML elements:*/
	  eleman = zTag[i];    
	  file = eleman.getAttribute("XMLHttp");	/*search for elements with a certain atrribute:*/
	  if (file) { xhttp = new XMLHttpRequest();       /*make an HTTP request using the attribute value as the file name:*/
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4) {
			if (this.status == 200) {eleman.innerHTML = this.responseText;
				var eScr= _importEmbededJS(this.responseText);
				if(eScr) NEW('SCRIPT',xHTML_ID,'WirusWork',eScr); /// embed EmbededJS into ParentPage
			}
			if (this.status == 404) {eleman.innerHTML = "Page not found.";}
			//eleman.removeAttribute("XMLHttp");			/* remove the attribute, and call this function once more: */
			//_includeXMLHttp();
		  }
		}      
		xhttp.open("GET", file, true);
		xhttp.send();      
		return true;/*exit the function:*/
	  }
	}
	};
	function xHTML(ParentID, ID,URL,CallBack) { /* Plugin HTML elements into created embed-div. */
		var NewDIV =  NEW("DIV",ParentID,ID);	NewDIV.setAttribute('XMLHttp', URL); xHTML_ID=ID;
		// NewDIV.textContent = ParentID+"=(ID)"; 
		$(ParentID).appendChild(NewDIV);
		if(file_location){ return _includeXMLHttp(); }	else { console.log("Host:", file_location, "Parent:"+ParentID);
			NEW("style", ParentID, "my", putin)	;
			NEW("FORM",ParentID, FORM_ID); ATTR(FORM_ID,"class","input_container");
			NEW("INPUT",FORM_ID,INPUT_ID); ATTR(INPUT_ID,"type","file"); ATTR(INPUT_ID,"name",INPUT_ID+1); ATTR(INPUT_ID,"accept",".html, .js"); 
			ATTR(INPUT_ID,"onchange","_includeFILE(this,"+CallBack+")"); /// INPUT(_idPARENT,_idnode,CallBack);
		}
		
	};
	function JSS(_link){ var script = NEW("script"); ///create new link for SCRIPT SOURCE
		script.type = "text/javascript";	script.src = _link; document.getElementsByTagName("head")[0].appendChild(script);
	}

	


