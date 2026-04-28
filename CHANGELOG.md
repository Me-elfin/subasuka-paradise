# Changelog — Subasuka Paradise Website

Semua perubahan penting pada proyek ini didokumentasikan di sini.

---

## [1.3.0] — 2026-04-28

### Changed
- Footer tagline diubah dari "Designed for UMKM Kota Kupang" menjadi "Crafted for Kupang's local businesses"

---

## [1.2.0] — 2026-04-28

### Added
- Favicon dari logo Subasuka (32×32, 192×192, Apple Touch Icon 180×180)
- Script `deploy.sh` untuk mempermudah proses deploy ke Vercel
- Integrasi GitHub untuk auto-deploy ke Vercel pada setiap `git push`

### Changed
- Footer copyright diubah menjadi "©Lekomese Studio 2026. All rights reserved."

---

## [1.1.0] — 2026-04-28

### Fixed
- Bug: semua icon Lucide hilang karena atribut `defer` yang salah pada script Lucide
- Bug: font Outfit & Playfair Display tidak muncul di halaman `menu.html` karena Google Fonts hanya ada di `index.html`
- Logo di `menu.html` masih menggunakan file lama `logo.png` yang belum teroptimasi

### Changed
- Google Fonts dipindahkan dari CSS `@import` ke HTML `<link>` dengan `preconnect` untuk performa lebih baik
- Logo di `menu.html` diperbarui ke `logo-opt.png`

---

## [1.0.0] — 2026-04-28

### Added — Performa & Optimasi
- Video hero dikompresi dari **44MB → 6MB** menggunakan ffmpeg (720p, CRF28)
- Atribut `preload="metadata"` dan `poster` ditambahkan ke elemen video
- Logo dikompresi dari **568KB → 20KB** (resize 200×200px)
- Gambar venue dikonversi PNG → JPEG dan dikompresi:
  - `Lopo.png` (2.8MB) → `Lopo.jpg` (400KB)
  - `angin sepoi.png` (2.7MB) → `angin-sepoi.jpg` (444KB)
  - `subasuka 2.png` (2.3MB) → `subasuka-2.jpg` (224KB)
  - `capela.jpeg` (2.6MB) → `capela-opt.jpg` (292KB)
- Atribut `loading="lazy"` dan `decoding="async"` ditambahkan ke semua gambar di bawah fold
- Resource hints (`preconnect`, `dns-prefetch`) ditambahkan untuk Google Fonts, unpkg, Unsplash

### Added — Initial Deploy
- Hosting pertama ke Vercel: [subasuka-paradise.vercel.app](https://subasuka-paradise.vercel.app)
- Halaman utama (`index.html`) dengan hero video, menu, venues, promo, testimonial, kontak
- Halaman buku menu lengkap (`menu.html`)
- Navbar responsif dengan mobile menu overlay
- Modal reservasi dengan integrasi WhatsApp
- Testimonial carousel dengan swipe support
