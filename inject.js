// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... giggity');
	
	function myReplace(idNode) {
		var str = Embed.NODE(idNode).textContent;  //console.log(str);
		var res1 = str.replace(/blue/gi, "red fucking");
		var res2 = res1.replace(/red|house|car/gi, function (x) { return x.toUpperCase(); });
		Embed.NODE(idNode).textContent="(replaced by _plugin_content.js): "+res2;
	}
	myReplace(id_PARA+2);

})();