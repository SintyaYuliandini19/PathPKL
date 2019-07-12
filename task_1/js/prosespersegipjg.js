// JavaScript Document
 
	
	function proseshitung() {
    var myForm = document.form1;
    var angka1 = eval(myForm.angka1.value);
    var angka2 = eval(myForm.angka2.value);
   
   var count=2*(angka1*angka2);
		var luas= angka1*angka2;
    myForm.hasil.value = count;
		 myForm.luas.value = luas;
    myForm.angka1.value = "";
    myForm.angka2.value = "";
}
 