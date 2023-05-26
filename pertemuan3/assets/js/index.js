// const nilaisiswa = 80
// if(nilaisiswa > 79) {
//     console.log('lulus')
// }
// else if(nilaisiswa == 80 ){
//     console.log('tidak lulus')
// }

const nilaiSiswa = 100

if(nilaiSiswa >=101) {
    console.log('tidak memenuhi kriteria');
}else if(nilaiSiswa >=71 && nilaiSiswa <=100) {
    console.log('nilai A');
}else if(nilaiSiswa >=51 && nilaiSiswa <=70) {
    console.log('nilai B');
}else if(nilaiSiswa <=50 && nilaiSiswa >=0){
    console.log('nilai C');  
}
else{
    console.log('nilai tidak valid');
}