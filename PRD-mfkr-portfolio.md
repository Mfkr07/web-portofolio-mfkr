# Product Requirements Document (PRD)
## mfkr.DEV — Personal Portfolio Website
**Versi:** 1.0  
**Tanggal:** Juni 2026  
**Owner:** M. Fakhri Asshofi  

---

## 1. Overview

### 1.1 Tujuan Produk
Website portfolio personal untuk M. Fakhri Asshofi (alias mfkr.DEV) yang berfungsi sebagai media presentasi diri, showcase project, dan titik kontak bagi calon klien atau kolaborator. Website ini dirancang dengan tema visual **RPG Fantasy Alchemist** yang unik dan berkesan, membedakannya dari portfolio developer pada umumnya.

### 1.2 Target Audiens
- Rekruter / HRD perusahaan teknologi
- Calon klien freelance (individu atau bisnis kecil)
- Sesama developer yang ingin berkolaborasi
- Komunitas developer lokal

### 1.3 Tujuan Bisnis
- Meningkatkan personal branding M. Fakhri Asshofi sebagai fullstack developer
- Menjadi pintu masuk utama untuk peluang kerja, freelance, dan kolaborasi
- Menampilkan portofolio project secara profesional namun tetap personal

---

## 2. Scope

### 2.1 In Scope
- Website statis satu halaman (Single Page Application)
- Semua section yang didefinisikan dalam dokumen ini
- Animasi dan interaktivitas berbasis scroll dan hover
- Responsif untuk desktop dan mobile
- SEO dasar (meta tags, Open Graph)

### 2.2 Out of Scope (v1.0)
- CMS atau backend untuk edit konten
- Blog / artikel
- Authentication / login
- Dark/light mode toggle
- Integrasi form backend (v1.0 bisa pakai mailto atau Formspree)

---

## 3. Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animasi | Framer Motion |
| Carousel | Embla Carousel |
| Deployment | Vercel |
| Form | Formspree (atau mailto fallback) |

---

## 4. Struktur Halaman & Sections

Website terdiri dari **satu halaman panjang** dengan navigasi anchor ke masing-masing section.

### Navigasi
```
[mfkr.DEV]    ABOUT ME    SKILLS    PROJECT    CONTACT    [LET'S COLLAB →]
```
- Navbar sticky/fixed di atas
- Logo "mfkr.DEV" di kiri, links di tengah, CTA button di kanan
- CTA "LET'S COLLAB" scroll ke section Contact
- Mobile: hamburger menu

---

### Section 1: Hero

**Tujuan:** First impression yang kuat, memperkenalkan identitas Fakhri

**Konten:**
- Eyebrow text: `FULLSTACK UNEMPLOYMENT` (italic, gold)
- Headline: `M. FAKHRI ASSHOFI` (display font, putih besar)
- Subtext: `Hire me pls...`
- Foto Fakhri di sisi kiri (foreground, cropped setengah badan)
- Background: ilustrasi/artwork fantasy landscape (gelap, langit dramatis)
- Tiga stat counter di bagian bawah hero:
  - `200-` — Project completed
  - `300+` — Manga/lwa/lna read
  - `2050+` — Hours in Albion Online

**Perilaku:**
- Stat counter animasi count-up saat halaman pertama kali dimuat
- Background bisa berupa gambar statis atau subtle parallax ringan
- Foto Fakhri masuk dengan animasi slide-in dari kiri saat load

---

### Section 2: About Me

**Tujuan:** Memberikan konteks personal dan kepribadian Fakhri

**Konten:**
- Gambar featured (screenshot/artwork Albion Online) di bagian atas card
- Judul: `ABOUT ME`
- Dua kolom teks (dummy/placeholder dulu):
  - Kiri: paragraf pertama tentang background dan perjalanan
  - Kanan: paragraf kedua tentang pendekatan kerja atau minat

**Perilaku:**
- Card muncul dengan animasi fade-in saat scroll masuk viewport
- Teks dua kolom untuk desktop, satu kolom untuk mobile

---

### Section 3: Skills (Ancient Knowledge)

**Tujuan:** Menampilkan tech stack dan kemampuan teknis

**Judul Section:** `ANCIENT KNOWLEDGE`

**Daftar Skills (minimal):**
TypeScript, PHP, JavaScript, Laravel, React, Flutter, Vue, Vite, Android (Kotlin/Java), CSS, HTML, Python, Supabase, Firebase, Next.js, C++, Dart, MySQL

**Layout:**
- Carousel horizontal auto-scroll (loop infinite)
- Setiap item: ikon teknologi dalam frame dekoratif (sesuai desain — berbingkai emas/RPG)
- Hover: efek glow atau scale sedikit
- Carousel bisa di-drag secara manual oleh user

**Perilaku:**
- Carousel berjalan otomatis (auto-play) kiri ke kanan, infinite loop
- Kecepatan lambat dan smooth (bukan flip-flip)
- Saat di-hover/drag, auto-play berhenti sementara

---

### Section 4: Projects

**Tujuan:** Showcase karya nyata Fakhri

**Layout:** Grid 2 kolom, tiap item berupa card dengan:
- Thumbnail gambar project (screenshot app/web atau placeholder)
- Label judul project (semua caps)
- Deskripsi singkat 1–2 kalimat

**Daftar Project (dari repo GitHub Mfkr07):**

| # | Nama Project | Deskripsi Singkat |
|---|---|---|
| 1 | Landing Page TK & Playgroup Al-Azzhar | Website landing page untuk lembaga pendidikan TK dan Playgroup Al-Azzhar Muaraenim. Dibangun dengan Next.js 15 dan React. |
| 2 | Sistem Manajemen Sarana & Prasarana Desa | Aplikasi web untuk manajemen inventaris aset desa dengan role Admin dan Kepala Desa. Dibangun dengan Laravel 12 dan deploy ke Vercel. |
| 3 | Palm Harvest App | Aplikasi mobile Flutter untuk manajemen pemanenan kelapa sawit, menggunakan Supabase sebagai backend. |
| 4 | Sistem Rental Warnet | Aplikasi web Laravel untuk booking dan manajemen rental warnet, lengkap dengan admin panel dan cetak bukti booking. |
| 5 | TPK Koperasi | Aplikasi mobile Flutter untuk sistem manajemen koperasi. |
| 6 | SpasiKomputer | Prototipe website rental komputer dengan halaman Home, About, Gallery, dan Login. |

**Perilaku:**
- Card muncul dengan animasi stagger (muncul bergantian) saat scroll masuk viewport
- Hover pada card: slight scale-up + shadow lebih dalam
- Klik card: bisa link ke repo GitHub atau halaman detail (v1.0 cukup ke GitHub)

---

### Section 5: Contact

**Tujuan:** Memberikan cara mudah untuk menghubungi Fakhri

**Konten:**
- Judul: bebas (misal: `SUMMON ME` atau `CONTACT THE SCHOLAR`)
- Subtitle / deskripsi singkat (dummy)
- Form fields:
  - Nama
  - Email
  - Pesan / Pesan
  - Tombol kirim: `SEND MESSAGE` atau `CAST SCROLL`
- Social links (opsional): GitHub, LinkedIn, atau email langsung

**Perilaku:**
- Form submission via Formspree atau mailto (v1.0)
- Validasi field sederhana (required, format email)
- Feedback setelah submit: pesan sukses inline

---

### Section 6: Footer

**Konten:**
- Nama brand: `MASTER ALCHEMIST` (atau `mfkr.DEV`)
- Link navigasi footer: THE ORDER (About) · ANCIENT LAWS (Skills) · PRIVACY SIGIL · CONTACT RAVENS (Contact)
- Ikon sosial media
- Copyright: `© [tahun] mfkr.DEV. ALL SCROLLS RESERVED.`

---

## 5. Desain & Visual

Detail lengkap ada di `DESIGN.md`. Ringkasan:
- Tema: RPG Fantasy Alchemist
- Palet: dark maroon, cream/parchment, gold accent
- Font: display serif untuk judul, sans-serif untuk body
- Ikon skill dalam frame dekoratif bergaya RPG/medieval

---

## 6. Animasi & Interaktivitas

| Elemen | Animasi |
|---|---|
| Foto hero | Slide-in dari kiri saat page load |
| Stat counters | Count-up animation saat page load |
| Section cards | Fade-in + slight slide-up saat scroll masuk viewport |
| Project cards (stagger) | Muncul bergantian dengan delay per card |
| Skill carousel | Auto-scroll infinite, pause on hover/drag |
| Navbar | Background muncul (blur/solid) saat scroll melewati hero |
| Hover button | Scale + glow effect |
| Background hero | Subtle parallax (opsional, bisa dinonaktifkan di mobile) |

Semua animasi harus menghormati `prefers-reduced-motion`.

---

## 7. Responsivitas

| Breakpoint | Perilaku |
|---|---|
| Mobile (< 768px) | Single column, hamburger menu, parallax nonaktif |
| Tablet (768–1024px) | Grid 2 kolom untuk project, navigasi tetap full |
| Desktop (> 1024px) | Layout penuh sesuai desain |

---

## 8. SEO & Meta

- `<title>`: `mfkr.DEV — M. Fakhri Asshofi | Fullstack Developer`
- `<meta description>`: Deskripsi singkat ~150 karakter
- Open Graph tags untuk preview sosial media
- Favicon: logo mfkr.DEV
- `robots.txt` dan `sitemap.xml` dasar

---

## 9. Performance Target

- Lighthouse Performance Score: ≥ 85
- LCP (Largest Contentful Paint): < 2.5s
- Gambar dioptimasi dengan `next/image`
- Font dimuat dengan `next/font`

---

## 10. Acceptance Criteria

- [ ] Semua 6 section tampil dan fungsional
- [ ] Navigasi anchor berfungsi dari navbar dan footer
- [ ] CTA "LET'S COLLAB" scroll ke section Contact
- [ ] Skill carousel auto-scroll dan bisa di-drag
- [ ] Semua animasi berjalan smooth (60fps)
- [ ] Website responsif di mobile, tablet, dan desktop
- [ ] Form contact bisa diisi dan dikirim
- [ ] Deploy berhasil di Vercel

---

## 11. Prioritas Development (Urutan)

1. Setup Next.js + Tailwind + Framer Motion
2. Section Hero (paling krusial untuk first impression)
3. Navbar
4. Section Skills + Carousel
5. Section Projects
6. Section About Me
7. Section Contact + Form
8. Footer
9. SEO & Meta
10. Polish animasi, testing, dan deployment

---

*Dokumen ini adalah living document dan dapat diperbarui seiring perkembangan project.*
