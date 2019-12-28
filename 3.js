function printWord(kata){

    var vocal = 'AAERKDMY';
    var hasil = '';

    for (var i = 0; i < vocal.length; i ++){
        hasil = vocal[i];
        console.log(hasil);
        hasil = '';
    }
    return hasil;
}

console.log(printWord('ARKADEMY'));