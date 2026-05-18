# Design System - Ikan Bakar Kalianak

## Brand Identity
The brand identity for **Ikan Bakar Kalianak** is built on **Tradition, Authenticity, and Premium Quality**. The visual style evokes the warmth of charcoal fires, the richness of traditional Indonesian spices, and the elegance of a legacy spanning over two decades.

### Core Values
- **Traditional:** Respecting recipes and methods since 1998.
- **Warm:** Inviting, communal, and fire-inspired.
- **Premium:** Sophisticated presentation with a focus on quality.

---

## Color Palette

The color scheme is inspired by the elements of traditional grilling: charcoal, fire, embers, and wood.

| Visual | Category | Name | Hex | Usage |
| :--- | :--- | :--- | :--- | :--- |
| ![](https://img.shields.io/badge/-%231C252E-1C252E?style=flat-square) | **Primary** | **Charcoal** | `#1C252E` | Main background, deep surfaces. |
| ![](https://img.shields.io/badge/-%23500302-500302?style=flat-square) | **Secondary** | **Maroon** | `#500302` | Deep accents, section backgrounds, brand depth. |
| ![](https://img.shields.io/badge/-%23FFD931-FFD931?style=flat-square) | **Accent** | **Gold** | `#FFD931` | Highlights, CTA hover states, fire/flame icons. |
| ![](https://img.shields.io/badge/-%23DEB992-DEB992?style=flat-square) | **Accent** | **Sand** | `#DEB992` | Soft text, borders, decorative elements. |
| ![](https://img.shields.io/badge/-%23FFFFFF-FFFFFF?style=flat-square) | **Neutral** | **White** | `#FFFFFF` | Primary text, high contrast elements. |
| ![](https://img.shields.io/badge/-%239CA3AF-9CA3AF?style=flat-square) | **Neutral** | **Gray** | `#9CA3AF` | Secondary text, descriptions. |

---

## Typography

The system uses a pairing of a classic serif font for elegance and a modern sans-serif for readability.

### Serif: Cormorant Garamond
- **Usage:** Headings, blockquotes, brand titles.
- **Character:** Sophisticated, traditional, authoritative.
- **Tailwind class:** `font-serif`

### Sans-Serif: Montserrat
- **Usage:** Body text, navigation, UI elements, metadata.
- **Character:** Clean, modern, highly readable.
- **Tailwind class:** `font-sans`

---

## UI Components & Patterns

### 1. Parallax Sections
Used to create depth and a premium feel. Background images scroll at a different speed (0.3 to 0.5) than the content.
- **Overlay:** Usually `bg-black/30` or `bg-[#4a0000]/70` with backdrop blur.

### 2. Fade-In Animations
Standard entry for all content blocks to ensure a smooth, "living" experience.
- **Implementation:** React components triggering CSS transitions on visibility.

### 3. Image Styles
- **Filters:** Extensive use of `grayscale` with `hover:grayscale-0` transitions.
- **Borders:** Double borders or decorative offset borders (e.g., `border-ember-900/50`).
- **Shadows:** Heavy drop shadows (`shadow-2xl`) to create depth on dark backgrounds.

### 4. Navigation
- **Sticky Header:** Transparent at the top, transitioning to `bg-charcoal/90` with `backdrop-blur-md` on scroll.
- **Tracking:** Wide letter-spacing (`tracking-widest`) for uppercase nav links.

### 5. Interactive Elements
- **Social Icons:** Rounded glassmorphism style (`bg-white/5`, `backdrop-blur-sm`) with scale transformations on hover.
- **Buttons/Links:** Hover transitions to `text-ember-500` (Gold) or `bg-ember-600` (Maroon).

---

## Layout Principles
- **Container:** Standard `container mx-auto px-6` for centered content.
- **Vertical Rhythm:** Generous padding (`py-24`) to give sections "room to breathe."
- **Responsive:** Mobile-first approach with significant layout shifts (grid-cols-1 to grid-cols-2) at `md` (768px) breakpoint.
- **Dark Mode:** The application is natively "Dark Mode" with a `#1C252E` (Charcoal) base.
