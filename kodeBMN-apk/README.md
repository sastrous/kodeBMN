# Kode BMN — Proyek APK Android

Proyek ini membungkus aplikasi web "Cari Kode BMN" menjadi aplikasi Android (APK)
memakai Capacitor. APK dibangun otomatis oleh GitHub, jadi Anda tidak perlu
memasang Android Studio.

## Cara membuat APK (sekali jalan)

1. Buat akun di https://github.com (gratis), lalu buat repositori baru
   (**New repository**, nama bebas, mis. `kode-bmn`). Boleh Private.
2. Unggah **seluruh isi folder ini** ke repositori:
   - Lewat web: **Add file → Upload files**, seret semua file dan folder.
   - PENTING: folder `.github` (diawali titik) sering tidak ikut terunggah saat
     memilih file lewat dialog. Kalau tab **Actions** kosong setelah unggah,
     buat manual: **Add file → Create new file**, ketik nama
     `.github/workflows/build-apk.yml`, lalu tempel isi file dengan nama itu
     dari proyek ini, dan **Commit**.
   - Atau lewat Git:
     ```
     git init && git add -A && git commit -m "awal"
     git branch -M main
     git remote add origin https://github.com/USERNAME/kode-bmn.git
     git push -u origin main
     ```
3. Buka tab **Actions** di repositori. Alur **Build APK** berjalan otomatis
   (atau klik **Build APK → Run workflow**). Tunggu sekitar 5–10 menit sampai
   centang hijau.
4. Klik proses yang selesai, lalu di bagian **Artifacts** unduh **KodeBMN-apk**
   (berupa zip berisi `KodeBMN.apk`).
5. Kirim `KodeBMN.apk` ke HP, buka, dan izinkan **Instal dari sumber tidak
   dikenal** bila diminta.

## Cara memperbarui data

Cukup ubah file lalu unggah ulang ke GitHub (tidak perlu Python di komputer):

- **Alias / keterangan:** edit `keterangan.xlsx` (sheet "Keterangan").
- **Foto:** taruh atau ganti foto di `www/foto/` dengan nama `<kode 10 digit>.jpg`.

GitHub otomatis menjalankan `update.py`, membangun APK baru, dan nomor versinya
naik sendiri. APK baru bisa dipasang langsung menimpa yang lama, tanpa
menghapus aplikasi (kunci tanda tangan sama, ada di folder `signing/`).

Kalau ingin mencoba di komputer dulu: `pip install openpyxl`,
`python update.py`, lalu buka `www/index.html`.

## Isi folder

| Item | Fungsi |
|---|---|
| `www/` | Aplikasi web (index.html, keterangan.js, foto/, fonts/) |
| `keterangan.xlsx`, `update.py` | Sumber alias dan keterangan, serta skrip pembuat datanya |
| `assets/` | Ikon dan splash screen (ganti PNG-nya jika ingin ikon lain) |
| `capacitor.config.json` | Nama aplikasi (`Kode BMN`) dan ID paket (`id.kodebmn.app`) |
| `.github/workflows/build-apk.yml` | Resep pembuatan APK di GitHub |
| `signing/debug.keystore` | Kunci tanda tangan APK |

## Catatan

- APK yang dihasilkan adalah build **debug**: aman untuk dipasang manual, tetapi
  belum cocok untuk diunggah ke Google Play Store (butuh build release).
- Tombol **Kembali** di Android menutup jendela detail dulu, baru keluar aplikasi.
- Font Inter sudah ikut dibundel, sehingga tampilan sama saat offline.
- Mengganti ikon: ubah file di `assets/` (`icon-only.png`, `icon-foreground.png`,
  `icon-background.png` berukuran 1024×1024; `splash.png` 2732×2732).
