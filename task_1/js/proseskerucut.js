// JavaScript Document
 
	
	function proseshitung() {
    var myForm = document.form1;
    var alas = eval(myForm.alas.value);
    var selimut = eval(myForm.selimut.value);
		 var tinggi = eval(myForm.tinggi.value);
		var r = eval(myForm.r.value);
   
   var count=1/3*22/7*r*r*tinggi;
		var luas=alas+selimut;
    myForm.hasil.value = count;
		 myForm.luas.value = luas;
    myForm.alas.value = "";
    myForm.selimut.value = "";
		  myForm.tinggi.value = "";
		 myForm.r.value = "";
}
 