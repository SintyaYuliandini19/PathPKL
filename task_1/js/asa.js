function kali(){
//tangkep proses request
var frm = document.getElementById(“frmKalkulator”);
var a = parseFloat(frm.satu.value);//parseFloat fungsi konversi text ke decimal
var b = parseFloat(frm.dua.value);
//lakukan operasi perkalian
var total = a * b;
//penempatan hasil
frm.hasil.value = total;
}
function bagi()
{
//tangkep proses request
var frm = document.getElementById(“frmKalkulator”);
var a = parseFloat(frm.satu.value);//parseFloat fungsi konversi text ke decimal
var b = parseFloat(frm.dua.value);
//lakukan operasi perkalian
var total = a / b;
//penempatan hasil
frm.hasil.value = total;
}
function tambah()
{
//tangkep proses request
var frm = document.getElementById(“frmKalkulator”);
var a = parseFloat(frm.satu.value);//parseFloat fungsi konversi text ke decimal
var b = parseFloat(frm.dua.value);
//lakukan operasi perkalian
var total = a + b;
//penempatan hasil
frm.hasil.value = total;
}
function kurang()
{
//tangkep proses request
var frm = document.getElementById(“frmKalkulator”);
var a = parseFloat(frm.satu.value);//parseFloat fungsi konversi text ke decimal
var b = parseFloat(frm.dua.value);
//lakukan operasi perkalian
var total = a – b;
//penempatan hasil
frm.hasil.value = total;
}
 
function pangkat()
{
//tangkep proses request
var frm = document.getElementById(“frmKalkulator”);
var a = parseFloat(frm.satu.value);//parseFloat fungsi konversi text ke decimal
var b = parseFloat(frm.dua.value);
//lakukan operasi perkalian
var total = Math.pow(a,b);
//penempatan hasil
frm.hasil.value = total;
}