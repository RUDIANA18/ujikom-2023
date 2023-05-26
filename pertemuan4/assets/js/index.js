// var tam = 100;
// for (index = 0; index < tam; index++){
//     console.log(index + "." + "saya rajin")
// }





// let nilaiAwal = 0;
// let nilaiAkhir = 3;

// do {
//     console.log('saya rajin')
//     nilaiAwal++;
// } while (nilaiAwal < nilaiAkhir);


// let nilaiAwal = 0;

// do {
//   console.log("saya rajin");
//    nilaiAwal++;
// } while (nilaiAwal <= 3);

// let i = 0;

// do {
//   console.log("saya rajin");
//   i++;
// } while (i <= 3);
// function showMenu(menu) {
//     console.log(menu)

// const isiYgAktif = document.getElementById("isi-3");
// console.log(isiYgAktif);
// if (isiYgAktif.classList.contains("hidden")) {
//     isiYgAktif.classList.remove("hidden")
// } 

// // nambah class ke elment
// const isiygHarusDisable = document.getElementById("isi-1");
// isiygHarusDisable.classList.add("hidden");


// function showMenu1() {
//     const menu = document.getElementById('menu-1 ');
//     const tampil = document.getElementById('isi-1');

//     menu.classList

// }
function showMenu(menu) {
    const isiYgAktif = document.getElementById("isi-" + menu);
    const menuItems = document.querySelectorAll(".active");
    
    menuItems.forEach((item) => {
      if (item.classList.contains("menu-" + menu)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    
    const semuaIsi = document.querySelectorAll("p");
    semuaIsi.forEach((item) => {
      if (item.id === "isi-" + menu) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  }
  