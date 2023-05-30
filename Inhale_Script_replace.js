function myReplace(idNode) {
	var str = $(idNode).textContent;  //console.log(str);
	var res1 = str.replace(/blue/gi, "red shing");
	var res2 = res1.replace(/red|house|car/gi, function (x) { return x.toUpperCase(); });
	$(idNode).textContent="Replaced by embedden module(Inhale_Script_replace.js):"+res2;
}
if(P_ID+2) myReplace(P_ID+2);
console.log("i come from Inhale_Script_replace.JS");
function check(x) { let wtf=document.getElementById(Parent_DIV_ID); if(x.checked == true) wtf.style.backgroundColor=x.value; }