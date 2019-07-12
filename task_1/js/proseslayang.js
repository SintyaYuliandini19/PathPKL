// JavaScript Document
 
	
	function proseshitung() {
    var myForm = document.form1;
    var angka1 = (myForm.angka1.value);
    var angka2 = (myForm.angka2.value);
   
   var count=2*(angka1+angka2);
		var luas=1/2*(angka1+angka2);
    myForm.hasil.value = count;
		 myForm.luas.value = luas;
    myForm.angka1.value = "";
    myForm.angka2.value = "";
}
 