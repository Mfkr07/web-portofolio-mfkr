# DESIGN.md
## mfkr.DEV — Visual Design Specification
**Versi:** 1.0  
**Tanggal:** Juni 2026  
**Tema:** RPG Fantasy Alchemist  

---

## 1. Design Direction

### Konsep Utama
Website ini bukan portfolio developer biasa. Fakhri adalah seorang developer yang juga seorang gamer, pembaca manga, dan pemain Albion Online — dan kepribadian itu harus terasa di setiap piksel. Visual direction mengambil estetika **Alchemist's Guild dari dunia RPG medieval fantasy**: gelap, kaya, penuh tekstur perkamen, dengan sentuhan emas dan sihir biru.

Perbedaan utama dari portfolio developer generik:
- Bukan "dark mode dengan aksen hijau neon"
- Bukan "minimalis putih dengan tipografi serif"
- Ini adalah **grimoire digital** — sebuah buku mantra yang kebetulan berisi CV

### Signature Element
**Skill icons dalam frame artifact RPG** — setiap ikon teknologi dibingkai dengan ornamen emas berbentuk plakat/medallion seperti item di inventory game RPG, dengan efek glow biru-emas saat hover. Ini adalah elemen yang tidak akan ditemukan di portfolio lain.

---

## 2. Color Palette

```
NAMA               HEX         PENGGUNAAN
─────────────────────────────────────────────────────
Crimson Maroon    #6B1A1A     Background navbar, CTA button, aksen utama
Deep Void         #0D0D0D     Background gelap section hero
Parchment         #F0E6D0     Background section terang (About, Project)
Old Gold          #C9A84C     Aksen teks judul, border ornamen, stat numbers
Ember Gold        #E8B84B     Hover state, glow effect, highlight
Aged Cream        #F5EDD8     Background card, footer area terang
Smoke White       #E8E0D0     Body text di atas background gelap
Shadow Gray       #1A1A1A     Background footer
Mystic Blue       #3B7DD8     Link aktif, ikon sosial, aksen sekunder
```

### Penggunaan Warna per Section

| Section | Background | Teks Utama | Aksen |
|---|---|---|---|
| Navbar | `#6B1A1A` | `#E8E0D0` | `#C9A84C` |
| Hero | `#0D0D0D` + gambar | `#FFFFFF` | `#C9A84C` |
| About Me | `#F0E6D0` | `#1A1A1A` | `#3B7DD8` |
| Skills | `#F5EDD8` | `#1A1A1A` | `#C9A84C` |
| Projects | `#F0E6D0` | `#1A1A1A` | `#C9A84C` |
| Contact | `#1A1A1A` | `#E8E0D0` | `#C9A84C` |
| Footer | `#0D0D0D` | `#E8E0D0` | `#C9A84C` |

---

## 3. Typography

### Font Pairing

```
DISPLAY  — Cinzel Decorative (Google Fonts)
           Dipakai untuk: nama besar di hero, judul section, label project
           Karakter: Roman-carved, medieval, authoritative
           Contoh: "M. FAKHRI ASSHOFI", "ANCIENT KNOWLEDGE"

HEADING  — Cinzel (Google Fonts)
           Dipakai untuk: sub-judul, nama project, item navigasi
           Karakter: Lebih ringan dari Decorative, tetap tegas

BODY     — Inter (Google Fonts)
           Dipakai untuk: paragraf, deskripsi, form, meta-text
           Karakter: Bersih, modern, sangat readable

MONO     — JetBrains Mono (Google Fonts)
           Dipakai untuk: eyebrow text seperti "FULLSTACK UNEMPLOYMENT",
                          label stats, copyright footer
           Karakter: Coder aesthetic, menambah kontrast gaya
```

### Type Scale

```
Display XL  : 72px / line-height 1.0  / Cinzel Decorative / weight 700
              → Nama utama di hero

Display L   : 48px / line-height 1.1  / Cinzel Decorative / weight 700
              → Nama section besar (ANCIENT KNOWLEDGE, dll)

Heading 1   : 32px / line-height 1.2  / Cinzel / weight 600
              → Sub-judul section, judul card besar

Heading 2   : 20px / line-height 1.3  / Cinzel / weight 600
              → Judul project card, label skill

Body L      : 16px / line-height 1.7  / Inter / weight 400
              → Paragraf utama

Body S      : 14px / line-height 1.6  / Inter / weight 400
              → Deskripsi card, meta teks, label form

Mono        : 12px / line-height 1.5  / JetBrains Mono / weight 400
              → Eyebrow, stat labels, copyright
```

---

## 4. Spacing & Layout

### Grid System
- **Max content width:** 1200px, centered
- **Horizontal padding:** 24px (mobile), 48px (tablet), 80px (desktop)
- **Section padding vertical:** 80px (mobile: 56px)

### Spacing Scale (Tailwind-compatible)
```
4px   → xs  (gap dalam elemen kecil)
8px   → sm  (gap antar label dan value)
16px  → md  (gap dalam card)
24px  → lg  (gap antar elemen section)
48px  → xl  (gap antar card / grid items)
80px  → 2xl (padding section)
120px → 3xl (padding section hero)
```

### Grid Layout

**Project Section:**
```
Desktop:
┌─────────────┐  ┌─────────────┐
│  Project 1  │  │  Project 2  │
└─────────────┘  └─────────────┘
┌─────────────┐  ┌─────────────┐
│  Project 3  │  │  Project 4  │
└─────────────┘  └─────────────┘
┌─────────────┐  ┌─────────────┐
│  Project 5  │  │  Project 6  │
└─────────────┘  └─────────────┘

Mobile:
┌─────────────────────────────┐
│         Project 1           │
└─────────────────────────────┘
┌─────────────────────────────┐
│         Project 2           │
└─────────────────────────────┘
... dst
```

**Hero Layout:**
```
Desktop:
┌────────────────────────────────────────────────────┐
│  [FOTO]   FULLSTACK UNEMPLOYMENT                   │
│           M. FAKHRI ASSHOFI                        │
│           Hire me pls...                           │
│                                                    │
│           200-          300+        2050+          │
│           Project        Manga      Albion Hours   │
└────────────────────────────────────────────────────┘
```

---

## 5. Component Specifications

### 5.1 Navbar

```
Height      : 64px
Background  : #6B1A1A (solid saat scroll, transparan di paling atas hero)
Transition  : background-color 300ms ease saat scroll
Logo        : "mfkr.DEV" — Cinzel Decorative, 20px, #C9A84C
Nav links   : Cinzel, 13px, uppercase, letter-spacing 2px, #E8E0D0
              Hover: #C9A84C, underline dekoratif
CTA Button  : "LET'S COLLAB"
              Background: #C9A84C
              Text: #1A1A1A, Cinzel, 13px, uppercase
              Border-radius: 2px (hampir tidak ada, terasa medieval)
              Padding: 10px 20px
              Hover: background #E8B84B, slight shadow gold
```

### 5.2 Hero Section

```
Min-height  : 100vh
Background  : Image fantasy landscape + overlay gradient gelap
              (linear-gradient dari #0D0D0D 0% ke transparent 60%)
Foto        : Posisi absolute kiri, bottom-aligned, z-index di atas background
              Width ~35% dari lebar hero
              Tidak ada border, natural cut

Eyebrow     : JetBrains Mono, 12px, #C9A84C, letter-spacing 4px, uppercase
Nama        : Cinzel Decorative, 64-72px, #FFFFFF
Subtext     : Inter, 18px, italic, #E8E0D0

Stat item:
  Angka     : Cinzel Decorative, 48px, #C9A84C
  Label     : JetBrains Mono, 11px, #E8E0D0, letter-spacing 2px
  Divider   : border-left 1px solid rgba(201, 168, 76, 0.3) (kecuali item pertama)
```

### 5.3 About Me Card

```
Background  : #FFFFFF atau #F5EDD8
Border      : 1px solid rgba(201, 168, 76, 0.2)
Border-radius: 4px
Box-shadow  : 0 4px 24px rgba(0,0,0,0.08)
Padding     : 40px
Max-width   : 720px, centered

Gambar featured:
  Width     : 100%
  Height    : 200-240px
  Object-fit: cover
  Border-radius: 4px 4px 0 0 (hanya atas)

Judul ABOUT ME : Cinzel, 24px, #1A1A1A, letter-spacing 3px
Teks kolom     : Inter, 15px, #3A3A3A, line-height 1.8
Link dalam teks: #3B7DD8, tidak ada underline, hover underline
```

### 5.4 Skill Carousel

```
Container   : Full-width, overflow hidden
Item frame  :
  Size      : 80x80px (desktop), 64x64px (mobile)
  Background: linear-gradient(135deg, #2A2215 0%, #1A1508 100%)
  Border    : 2px solid #C9A84C (ornamen emas)
  Border-radius: 8px
  Box-shadow: 0 0 12px rgba(201, 168, 76, 0.15)
  Padding   : 14px

  Hover state:
    Box-shadow: 0 0 20px rgba(232, 184, 75, 0.5) (glow emas)
    Scale     : 1.05
    Border-color: #E8B84B
    Transition: all 250ms ease

Ikon di dalam frame:
  Gunakan SVG logo resmi tiap teknologi
  Size      : 40x40px (desktop), 32x32px (mobile)
  Filter    : sedikit brightness/saturation boost agar terlihat di background gelap

Auto-scroll :
  Speed     : 0.5px per frame (~30px/detik), sangat smooth
  Direction : kiri ke kanan
  Loop      : infinite (clone items)
  Pause     : on hover atau saat di-drag
  Library   : Embla Carousel
```

### 5.5 Project Card

```
Background     : #FFFFFF
Border         : 1px solid rgba(0,0,0,0.08)
Border-radius  : 4px
Overflow       : hidden
Cursor         : pointer

Thumbnail:
  Height      : 180px
  Object-fit  : cover
  Overlay     : gradient ringan di bawah untuk readability label

Label kategori : JetBrains Mono, 10px, #C9A84C, uppercase, letter-spacing 3px
Judul project  : Cinzel, 14px, #1A1A1A, uppercase, margin-top 8px
Deskripsi      : Inter, 13px, #5A5A5A, 2 baris max (line-clamp: 2)

Hover state:
  Transform  : translateY(-4px)
  Box-shadow : 0 12px 32px rgba(0,0,0,0.12)
  Transition : all 250ms ease
```

### 5.6 Contact Form

```
Background section : #1A1A1A
Padding            : 80px vertikal

Input / Textarea:
  Background  : transparent
  Border      : 1px solid rgba(201, 168, 76, 0.4)
  Border-radius: 2px
  Color       : #E8E0D0
  Padding     : 12px 16px
  Font        : Inter, 14px
  Placeholder : rgba(232, 224, 208, 0.4)

  Focus state:
    Border-color  : #C9A84C
    Box-shadow    : 0 0 0 2px rgba(201, 168, 76, 0.15)
    Outline       : none

Textarea height : min 120px, resizable vertical only

Submit button:
  Background  : #C9A84C
  Color       : #1A1A1A
  Font        : Cinzel, 13px, uppercase, letter-spacing 2px
  Padding     : 14px 32px
  Border      : none
  Border-radius: 2px
  Hover       : background #E8B84B, scale 1.01
```

### 5.7 Footer

```
Background  : #0D0D0D
Padding     : 48px vertikal

Brand title : Cinzel Decorative, 20px, #C9A84C, centered
Nav links   : JetBrains Mono, 11px, #E8E0D0, uppercase, letter-spacing 2px
              hover: #C9A84C
              separator: · (bullet centered)
Sosial icons: 24x24px, #E8E0D0, hover: #C9A84C
Copyright   : JetBrains Mono, 10px, #5A5A5A, centered
              "© [tahun] ALCHEMIST'S GUILD. ALL SCROLLS RESERVED."
```

---

## 6. Animation Specification

### 6.1 Page Load Sequence
```
0ms   → Navbar fade in (opacity 0 → 1, 400ms ease)
100ms → Hero background fade in (opacity 0 → 1, 600ms ease)
300ms → Eyebrow text slide up (translateY 16px → 0, opacity 0→1, 500ms)
500ms → Nama utama slide up (translateY 24px → 0, opacity 0→1, 600ms)
700ms → Subtext fade in (opacity 0 → 1, 400ms)
900ms → Foto slide in dari kiri (translateX -40px → 0, opacity 0→1, 700ms)
1100ms→ Stat counters count-up mulai (duration masing-masing 1200ms, ease-out)
```

### 6.2 Scroll-triggered Animations
Gunakan Framer Motion `whileInView` + `viewport={{ once: true }}`

```
Section title   : fadeIn + slideUp (y: 20 → 0), duration 0.5s
About card      : fadeIn + scale (0.98 → 1), duration 0.6s
Project cards   : stagger 0.1s per card, fadeIn + slideUp (y: 24 → 0)
Contact section : fadeIn, duration 0.5s
```

### 6.3 Hover Micro-interactions
```
Navbar links    : underline slide dari kiri (width 0 → 100%, 200ms)
CTA button      : scale 1 → 1.02, shadow emas muncul, 150ms
Project cards   : translateY 0 → -4px, shadow lebih dalam, 250ms
Skill items     : scale 1 → 1.05, glow emas, 250ms
Footer links    : color transition 200ms, no underline
```

### 6.4 Skill Carousel Behavior
```
State: idle      → auto-scroll aktif, kecepatan konstan
State: hover     → auto-scroll berhenti, item under-cursor scale sedikit
State: dragging  → auto-scroll berhenti, cursor berubah ke grab
State: release   → auto-scroll kembali aktif setelah 1000ms delay
```

### 6.5 Navbar Scroll Behavior
```
Di paling atas (scrollY = 0):
  background: transparent
  box-shadow: none

Setelah scroll > 80px:
  background: #6B1A1A
  box-shadow: 0 2px 20px rgba(0,0,0,0.3)
  transition: background 300ms, box-shadow 300ms
```

### 6.6 Stat Counter
```
Library      : custom hook atau react-countup
Start        : 0
End          : nilai target (200, 300, 2050)
Duration     : 1200ms
Easing       : ease-out cubic
Trigger      : saat hero masuk viewport (sekali saja)
```

### 6.7 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* Semua animasi dinonaktifkan atau disederhanakan menjadi opacity only */
  /* Carousel tetap berjalan tapi tanpa auto-scroll, hanya manual drag */
}
```

---

## 7. Iconography & Asset Guidelines

### Tech Stack Icons
- Sumber: [devicons.dev](https://devicons.dev) atau [simpleicons.org](https://simpleicons.org)
- Format: SVG (untuk kualitas terbaik di semua ukuran)
- Warna: gunakan warna original brand masing-masing ikon
- List ikon yang dibutuhkan:
  TypeScript, PHP, JavaScript, Laravel, React, Flutter, Vue.js,
  Vite, Android, CSS3, HTML5, Python, Supabase, Firebase,
  Next.js, C++, Dart, MySQL

### Foto Profil
- Format: PNG dengan background transparan (cutout)
- Posisi: setengah badan, formal (sudah tersedia dari desain)
- Ukuran minimal: 600x800px

### Background Hero
- Fantasy landscape dengan langit dramatis (gelap, ada burung/makhluk terbang)
- Bisa dari: game asset Albion Online (screenshot) atau ilustrasi bebas lisensi
- Harus ada area gelap di kanan untuk teks agar readable
- Ukuran: 1920x1080px minimum

### Project Thumbnails
- Screenshot langsung dari aplikasi/website masing-masing project
- Fallback: placeholder dengan warna gelap dan ikon teknologi di tengah
- Rasio: 16:9 (landscape), ukuran minimal 640x360px

---

## 8. Responsive Design Notes

### Mobile (< 768px)
- Navbar: hamburger menu, panel full-width dari kanan
- Hero: foto di background (bukan foreground), teks centered
- Stat counters: 3 kolom tetap tapi ukuran lebih kecil
- About: single column
- Skills carousel: tetap carousel, item sedikit lebih kecil
- Projects: single column
- Contact form: full width
- Parallax: dinonaktifkan

### Tablet (768–1024px)
- Hero: foto lebih kecil di kiri, teks di kanan
- Projects: 2 kolom
- About: 2 kolom teks

### Desktop (> 1024px)
- Layout penuh sesuai spesifikasi di atas

---

## 9. Accessibility Notes

- Semua gambar memiliki `alt` text deskriptif
- Kontras warna minimal 4.5:1 untuk teks body
- Fokus keyboard visible pada semua elemen interaktif (outline gold saat focus)
- Carousel memiliki tombol pause/play yang accessible
- Form memiliki `label` yang terhubung ke input
- Semua animasi dihormati dengan `prefers-reduced-motion`

---

## 10. File & Folder Structure Rekomendasi

```
mfkr-portfolio/
├── app/
│   ├── layout.tsx          ← Font, metadata global
│   ├── page.tsx            ← Semua section dikumpulkan di sini
│   └── globals.css         ← CSS variables, base styles
├── components/
│   ├── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── SkillCard.tsx
│       ├── ProjectCard.tsx
│       └── StatCounter.tsx
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── profile.png
│   │   ├── about-featured.jpg
│   │   └── projects/
│   │       ├── landing-alazzhar.jpg
│   │       ├── desa-sarpras.jpg
│   │       ├── palm-harvest.jpg
│   │       ├── rental-warnet.jpg
│   │       ├── tpk-koperasi.jpg
│   │       └── spasikomputer.jpg
│   └── icons/
│       └── skills/         ← SVG ikon per teknologi
└── lib/
    └── projects.ts         ← Data project (array of objects)
```

---

*Design specification ini adalah panduan hidup. Update seiring iterasi desain.*
