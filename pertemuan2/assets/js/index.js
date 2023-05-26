var namaDepan = "rudi"
var namaBelakang = "ana"

var gabung = namaDepan+" " +namaBelakang
console.log(gabung)

var y = 68
var k = 85
var g = 35
var f = 9
var e = 5

function coba (p1,p2,p3,p4,p5) {
    return y + k - g * f / e
}
function coba2 (p1,p2,p3,p4,p5) {
    return k + y - g * f / e 
}
function coba3 (p1,p2,p3,p4,p5) {
    return k + y - f * g / e 
}
function coba4 (p1,p2,p3,p4,p5) {
    return k + y - f * e / g 
}

console.log(coba(y,k,g,f,e))
console.log(coba2(y,k,g,f,e))
console.log(coba3(y,k,g,f,e))
console.log(coba4(y,k,g,f,e))