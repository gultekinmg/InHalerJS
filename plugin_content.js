function myReplace(idNode) {
	var str = Embed.NODE(idNode).textContent;  //console.log(str);
	var res1 = str.replace(/blue/gi, "red fucking");
	var res2 = res1.replace(/red|house|car/gi, function (x) { return x.toUpperCase(); });
	Embed.NODE(idNode).textContent="(replaced by _plugin_content.js): "+res2;
}
myReplace(id_PARA+2);