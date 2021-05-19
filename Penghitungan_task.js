function hitungLuas(){
    Jari = document.getElementById("txtJari1").value;
    Luas = Jari * Jari * 3.14;
    document.getElementById("txtLuas1").value = Luas;
}
function hitungKeliling(){
    Jari = document.getElementById("txtJari1").value;
    Keliling = 3.14 * Jari * 2;
    document.getElementById("txtKeliling").value = Keliling;
}
