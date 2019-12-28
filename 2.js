
function is_name_valid(nama){

    var ambilNama = nama; 
    var panjangNama = nama.length;
    var reg = /[A-Z]+/;
    var check = reg.exec(ambilNama);

    if (check && panjangNama > 3){
        return true;
    }else{
        return false;
    }
}

function is_age_valid(umur){

    var ambilUmur = String(umur);
    var checkDigit = ambilUmur.length;
    
    if (checkDigit > 0 && checkDigit < 3){
        return true;
    }else{
        return false;
    }
}

function is_username_valid(userName){
    var ambilUser = userName;
    var reg = /[a-z0-9_|.]+/g;
    var reg1 = /[a-z]+/g;
    var reg2 = /[0-9]+/g;
    var check = reg.exec(ambilUser);
    var check1 = reg1.exec(ambilUser);
    var check2 = reg2.exec(ambilUser);
    var panjangAngka = String(check2);
    var panjangHuruf = String(check1);
    var hasilPanjangAngka = panjangAngka.length;
    var hasilPanjangHuruf = panjangHuruf.length;

    if (check && hasilPanjangHuruf < 5 && hasilPanjangAngka < 4 && hasilPanjangAngka > 2){
        return true;
    }else{
        return false;
    }
}

console.log(is_name_valid('TIARA'));
console.log(is_age_valid(21));
console.log(is_username_valid('yani_333'));
console.log(is_username_valid('dian_11'));