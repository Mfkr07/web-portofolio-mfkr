# Design Specification (design.md)
## mfkr.DEV — Visual Design Specification

---

## 1. Design Philosophy

This design is a digital manifestation of a **Medieval Fantasy Alchemist's Grimoire**. Rather than using generic modern developer themes (such as dark mode with neon colors), it uses physical medieval textures, borders, and gold plating to present a premium visual experience.

- **Contrast**: Alternating between pitch-black areas (Hero & Footer) and warm, textured parchment surfaces (About, Projects, Contact).
- **Accents**: Extensive use of gold borders, gold buttons, and alchemical gold glow effects.
- **Medieval Motifs**: Minimalist borders, flat button corners (border-radius: 2px), caret markers (`›`), and gold slot item frames.

---

## 2. Color Palette

```
COLOR NAME       HEX CODE    USAGE
──────────────────────────────────────────────────────────────────────────
Deep Void        #0D0D0D     Main page background, Hero backdrop, footer block.
Crimson Maroon   #6B1A1A     Navbar background, accent buttons, core text headers.
Old Gold         #C9A84C     Ornamental borders, heading highlights, stat numbers.
Ember Gold       #E8B84B     Hover indicators, gold button glows, glowing slots.
Parchment        #F0E6D0     Warm background color for sections (About, Projects).
Aged Cream       #FCFBF9     Background of cards, form containers.
Smoke White      #E8E0D0     Body texts overlaying dark voids.
```

---

## 3. Typography

### Font Pairing
- **Display Font**: `Cinzel Decorative` (Google Fonts). Used for primary hero title, navbar logo, and section headers. High-contrast Roman serif with medieval flare.
- **Heading Font**: `Cinzel` (Google Fonts). Used for card titles, section subtitles, and coordinates.
- **Body Font**: `Inter` (Google Fonts). Used for paragraphs, forms, coordinates metadata, and descriptions. Offers maximum readability.
- **Monospace Font**: `JetBrains Mono` (Google Fonts). Used for statistic labels, code credits, copyright bars, and secondary metadata.

### Type Scale
- **Display XL** (Hero Title): `Cinzel Decorative / 60px / Bold`
- **Display L** (Section Headers): `Cinzel Decorative / 32px / Bold / Tracking [3px]`
- **Heading 1** (Card Headers): `Cinzel / 24px / Bold / Tracking-wide`
- **Body Text**: `Inter / 13px - 14px / Regular / Leading-relaxed`
- **Monospace**: `JetBrains Mono / 10px / Regular / Tracking-wider`

---

## 4. Layout & Spacing

- **Max Container Width**: 1200px (Centered).
- **Section Padding**: 80px (`py-20` in Tailwind) to ensure breathing room between sections.
- **Grid Layouts**:
  - **About Me**: Single card layout centered on the screen (`max-w-[800px]`).
  - **Skills Carousel**: Infinite seamless full-width horizontal marquee.
  - **Projects Grid**: 2-column layout (`grid-cols-1 md:grid-cols-2`) with `gap-12` spacing.
  - **Contact**: 2-column layout (`lg:grid-cols-12`, 5 cols for Info, 7 cols for Form).
  - **Footer**: 3-column structured grid (`5:3:4` column ratio).

---

## 5. UI Elements & Components

### 5.1 Navbar
- **Height**: 64px (`h-16`).
- **Scroll Transition**: Switches from transparent to `#6B1A1A` with a background blur backdrop filter when the viewport is scrolled past 80px.
- **Border**: Thin gold border at the bottom (`border-b border-old-gold/20`).

### 5.2 Portrait Image Frame (Hero)
- **Positioning**: Bottom-aligned absolute container.
- **Overlay Mask**: Uses CSS gradients to fade out the bottom of the portrait into the background void:
  ```css
  mask-image: linear-gradient(to top, transparent 0%, black 15%);
  ```

### 5.3 Masterpiece Item Slots (Skills)
- **Concept**: Represents an inventory screen of an RPG item.
- **Framing**: Each stack icon is placed inside a custom gold frame asset (`frame_T8_masterpiece-removebg-preview.png`).
- **Interactive States**:
  - On Hover: Scale transforms by 105% (`scale-105`), increases saturation, and triggers an ember gold glow (`drop-shadow`).

### 5.4 Cards & Parchments
- **Styling**: Off-white cards (`bg-[#FCFBF9]`) bordered with a thin gold line (`border-old-gold/30`) on top of a warm parchment texture background.
- **Shadow**: Subtle card drop shadow (`shadow-sm` or `shadow-md`) to lift cards off the background.

---

## 6. Animations & Transitions

| Element | Animation Trigger | Description |
|---|---|---|
| **Portrait image** | Page Load | Slide-in from left with smooth easing. |
| **Stat Counters** | Page Load | Count-up numbers from 0 to end values. |
| **Section headers** | In Viewport | Fade-in and slide-up by 15px. |
| **Project cards** | In Viewport | Staggered fade-in and slide-up. |
| **Skills Marquee** | Infinite | Auto-scrolling infinite marquee using keyframes. |
| **Buttons & Slots**| Hover | Smooth scaling and border color change. |
