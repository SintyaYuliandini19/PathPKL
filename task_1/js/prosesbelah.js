// JavaScript Document
 
	
	function proseshitung() {
    var myForm = document.form1;
    var angka1 = eval(myForm.angka1.value);
    var angka2 = eval(myForm.angka2.value);
		 var s = eval(myForm.s.value);
   
   var count=4*s;
		var luas= 1/2*angka1*angka2;
    myForm.hasil.value = count;
		 myForm.luas.value = luas;
    myForm.angka1.value = "";
    myForm.angka2.value = "";
		  myForm.s.value = "";
}
 