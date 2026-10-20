// 1. Pilih tombol dari HTML berdasarkan ID-nya ('sapaButton')
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' untuk mendeteksi ketika tombol di-klik
tombolSapa.addEventListener('click', function() {
    // 3. Tampilkan pesan pemberitahuan (alert) ketika tombol di-klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
