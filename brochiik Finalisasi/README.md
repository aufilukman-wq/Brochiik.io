# Brochiik — Website (Multi-page)

Struktur situs sekarang multi-halaman (bukan satu halaman panjang), mengikuti setiap item navigasi:

- `index.html`   — Beranda (hero, ringkasan tentang, kenapa kami, menu favorit, promo, testimoni, unduh app)
- `tentang.html` — Tentang Kami (cerita, **Visi & Misi**, **Galeri Foto**)
- `menu.html`    — Menu lengkap dengan filter kategori dan tombol tambah ke keranjang
- `keranjang.html` — Keranjang pesanan dengan fitur CRUD (tambah, lihat, ubah jumlah, hapus)
- `kenapa.html`  — Kenapa Kami lengkap + proses kami
- `promo.html`   — Promo utama + promo lainnya
- `lokasi.html`  — Daftar outlet terhubung ke **Google Maps** (klik outlet untuk update peta, tombol "Buka di Google Maps" untuk arah)
- `kontak.html`  — Info kontak, peta mini, dan form pesan

## Mengganti foto galeri (halaman Tentang Kami)

Di `tentang.html`, cari komentar berikut di setiap kotak galeri:

```html
<!-- Ganti <img> di bawah ini dengan foto asli Brochiik. Contoh: <img src="assets/gallery/nama-file.jpg" alt="..."> -->
```

Taruh file foto kamu di folder `assets/gallery/`, lalu tambahkan tag
`<img src="assets/gallery/nama-file.jpg" alt="...">` di dalam kotak `.gallery__box`
yang sesuai (hapus ikon SVG placeholder-nya).

## Mengubah/menambah outlet (halaman Lokasi)

Data outlet ada di `lokasi.html` — tiap kartu `.lokasi__card` punya atribut
`data-map-query` (alamat yang di-encode untuk Google Maps). Untuk menambah
outlet baru, salin satu blok kartu `.lokasi__card` dan sesuaikan nama, alamat,
jam buka, dan link "Buka di Google Maps"-nya (href).

Peta di sebelah kanan otomatis pindah ke lokasi outlet yang diklik, memakai
Google Maps Embed tanpa API key (`https://www.google.com/maps?q=...&output=embed`).

## Menjalankan secara lokal

Cukup buka `index.html` di browser, atau jalankan server statis sederhana:

```
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.


## Fitur keranjang pesanan

- Dari halaman `menu.html`, klik tombol `+ Tambah ke Keranjang` pada kartu menu.
- Klik ikon/tulisan Keranjang di navigasi untuk membuka `keranjang.html`.
- Tombol `+` dan `−` memperbarui jumlah item; tombol `Hapus` menghapus item dari keranjang.
- Data keranjang disimpan menggunakan `localStorage` pada browser yang sama. Ini merupakan CRUD sisi-klien dan tidak memerlukan tabel MySQL. Untuk menyimpan pesanan ke database agar dapat dilihat lintas perangkat/admin, diperlukan endpoint PHP dan tabel pesanan terpisah.
- Jalankan melalui XAMPP/Apache atau server lokal; fitur keranjang memakai JavaScript dan penyimpanan browser.
