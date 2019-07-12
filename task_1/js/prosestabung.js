// JavaScript 
 
	
	function proseshitung() {
    var myForm = document.form1;
    var angka1 = eval(myForm.angka1.value);
    var angka2 = eval(myForm.angka2.value);
		 var angka3 = eval(myForm.angka3.value);
   
   var count=22/7*angka3*angka3*angka2;
		var luas=2*22/7*angka3;
    myForm.hasil.value = count;
		 myForm.luas.value = luas;
    myForm.angka1.value = "";
    myForm.angka2.value = "";
		  myForm.angka3.value = "";
}
 