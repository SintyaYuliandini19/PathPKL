// JavaScript Document
 
	
	function proseshitung() {
    var myForm = document.form1;
    var angka1 = eval(myForm.angka1.value);
    var angka2 = eval(myForm.angka2.value);
		 var angka3 = eval(myForm.angka3.value);
   
   var count=4*(angka1+angka2+angka3);
		var luas= angka1*angka2*angka3;
    myForm.hasil.value = count;
		 myForm.luas.value = luas;
    myForm.angka1.value = "";
    myForm.angka2.value = "";
		  myForm.angka3.value = "";
}
 