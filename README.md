# Pusat Panduan Akun

Website statis berbentuk pusat bantuan untuk pemulihan, pengamanan, dan pemeliharaan akun digital.

## Struktur

- `index.html` halaman utama dan shell aplikasi
- `style.css` desain responsif dan mode tema
- `script.js` routing hash, sidebar, pencarian, artikel, PWA install prompt
- `articles.js` database 140 artikel awal
- `config.js` konfigurasi logo eksternal dan key tema
- `manifest.json` konfigurasi PWA
- `service-worker.js` cache offline dasar
- `assets/` icon aplikasi PWA

## Konfigurasi utama

Edit `config.js` untuk mengganti URL gambar logo, key tema localStorage, atau teks footer.

Theme dibaca dari `localStorage.getItem('Captain-z-MD.theme')` secara default.

## Menambah artikel

Tambahkan data artikel baru di `articles.js`. Tidak perlu mengubah komponen UI karena sidebar, pencarian, halaman kategori, related articles, table of contents, dan navigasi sebelumnya/berikutnya dibuat otomatis dari data artikel.

## Hosting

Project ini dapat langsung di-host sebagai static site. Untuk GitHub Pages, unggah seluruh isi folder ke repository lalu aktifkan Pages dari branch yang diinginkan. Untuk Cloudflare Pages, gunakan root project sebagai directory deployment tanpa build command.

## PWA

Service worker akan melakukan cache dasar untuk shell aplikasi. Gambar dari URL eksternal tetap membutuhkan koneksi ketika belum tersimpan di cache browser.

## Catatan keamanan

Semua panduan diarahkan untuk akun milik pengguna sendiri dan prosedur resmi. Website tidak menyediakan bypass keamanan, pembobolan akun, pencurian kredensial, atau metode pengelakan pembatasan.
