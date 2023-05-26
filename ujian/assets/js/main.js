var jumlahKesalahan = 0;

function submit() {
  var pin = document.getElementById('ps1').value;

  if (pin === '1234') {
    alert('PIN yang Anda masukkan benar!');
  } else {
    jumlahKesalahan++;

    if (jumlahKesalahan === 3) {
      // Blokir input PIN atau lakukan tindakan lain yang diinginkan
      document.getElementById('ps1').disabled = true;
      alert('Anda telah melebihi batas kesalahan. Silakan hubungi layanan pelanggan.');
    } else {
      alert('PIN yang Anda masukkan salah! Kesalahan ke-' + jumlahKesalahan);
    }
  }
}
