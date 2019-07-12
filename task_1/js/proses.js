function proseshitung() {
    var myForm = document.form1;
    var angka1 = eval(myForm.angka1.value);
    var angka2 = eval(myForm.angka2.value);
    var pilih = myForm.operator.value;
    if (pilih == "tambah") {
        var count = angka1 + angka2;
    } else if (pilih == "kurang") {
        var count = angka1 - angka2;
    } else if (pilih == "kali") {
        var count = angka1 * angka2;
    } else if (pilih == "bagi") {
        var count = angka1 / angka2;
    } else if (pilih == "mod") {
        var count = angka1 % angka2;
    } else if (pilih == "Pangkat") {
        var count = Math.pow(angka1, angka2);
    }
    myForm.hasil.value = count;
    myForm.angka1.value = "";
    myForm.angka2.value = "";
}