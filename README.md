# 🌴 Subasuka Paradise — Official Website

Website resmi **Subasuka Paradise**, destinasi kuliner tepi pantai di Kupang, Nusa Tenggara Timur.

🔗 **Live:** [subasuka-paradise.vercel.app](https://subasuka-paradise.vercel.app)

---

## 📋 Tentang Proyek

Website ini dibuat untuk memperkenalkan Subasuka Paradise kepada publik, menampilkan menu, fasilitas venue, promo, dan informasi reservasi.

### Fitur
- Hero section dengan video background
- Menu signature & buku menu lengkap
- Galeri venue (Modern Chapel, Garden Cafe, Ume Lopo & Sonaf)
- Promo section
- Testimonial carousel
- Reservasi meja via WhatsApp
- Peta lokasi Google Maps
- Halaman menu lengkap dengan harga

---

## 🗂️ Struktur File

```
Subasuka Paradise/
├── index.html          # Halaman utama
├── menu.html           # Halaman buku menu lengkap
├── style.css           # Custom styles
├── script.js           # JavaScript (navbar, carousel, reservasi)
├── logo.png            # Logo original
├── logo-opt.png        # Logo teroptimasi (digunakan di website)
├── favicon-32.png      # Favicon browser
├── favicon-192.png     # Favicon Android
├── apple-touch-icon.png# Icon iOS
├── deploy.sh           # Script deploy ke Vercel via GitHub
└── Asset/
    ├── video_compressed.mp4   # Video hero (terkompresi)
    ├── video-poster.jpg       # Poster video
    ├── capela-opt.jpg         # Foto Modern Chapel
    ├── angin-sepoi.jpg        # Foto Garden Cafe
    ├── Lopo.jpg               # Foto Ume Lopo
    └── subasuka-2.jpg         # Foto suasana restoran
```

---

## 🚀 Deploy

Website di-hosting di **Vercel** dan terhubung dengan GitHub untuk auto-deploy.

### Deploy perubahan:
```bash
./deploy.sh "deskripsi perubahan"
```

Contoh:
```bash
./deploy.sh "update harga menu seafood"
./deploy.sh "tambah foto venue baru"
```

> Setiap `git push` ke branch `main` akan otomatis trigger deployment di Vercel.

---

## 🛠️ Teknologi

| Teknologi | Keterangan |
|---|---|
| HTML5 | Struktur halaman |
| Tailwind CSS (CDN) | Styling & responsive layout |
| Vanilla JavaScript | Interaksi (navbar, carousel, modal) |
| Lucide Icons | Icon library |
| Google Fonts | Font Outfit & Playfair Display |
| Vercel | Hosting & deployment |
| GitHub | Version control & auto-deploy trigger |

---

## 📍 Informasi Restoran

- **Alamat:** Jl. Timor Raya No.135, Pasir Panjang, Kec. Kota Lama, Kota Kupang, NTT
- **Jam Buka:** Setiap hari, 10:00 – 22:00 WITA
- **Telepon:** 0811-382-8800
- **Instagram:** [@subasukaresto](https://www.instagram.com/subasukaresto/)
- **WhatsApp:** [wa.me/628113828800](https://wa.me/628113828800)

---

## 👨‍💻 Developer

Dikembangkan oleh **Lekomese Studio** © 2026
