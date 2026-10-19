# Wedding Website & Celebration Portal (Terracotta & Sunset Bronze)

An elegant, modern single-page wedding website and celebration portal crafted with warm terracotta, desert sand, and sunset bronze aesthetics, featuring an interactive countdown, event itinerary, Google Maps venue directions, responsive photo gallery with full lightbox viewer, dark/light theme switching, and direct WhatsApp RSVP integration with dynamic couple customization.

### User Review & Critical Decisions

> [!IMPORTANT]
> Based on your selections, the design uses a **Warm Terracotta, Sand, and Sunset Bronze** palette with editorial serif typography (`Cormorant Garamond` & `Plus Jakarta Sans`). Since you requested to specify custom couple names and wedding date, the application includes a discreet **"Customize Wedding" settings drawer** where you can enter any names, wedding date/time, venue address, WhatsApp phone number, and social hashtag, with changes persisting locally.

- **Confirmed Aesthetic**: Warm Terracotta (`#C26D53` / `#A34832`), Desert Sand (`#FBF8F5` / `#F3ECE2`), and Sunset Bronze (`#C88A58` / `#8B5E34`) with deep obsidian accents (`#1C1614` in dark mode).
- **Confirmed Personalization**: Defaults to an editorial showcase (Elena & Mateo / Aria & Liam) with a live in-app customization drawer allowing immediate updates to names, date, venue, WhatsApp contact, and story highlights.
- **RSVP Direct Routing**: Form fields (guest name, headcount, meal/dietary notes, personal blessing) are validated and converted into clean encoded text sent directly via WhatsApp (`https://wa.me/[PHONE]?text=...`).

---

## 1. Overview & Core Concept

- **What It Does**: A complete, mobile-responsive celebration website for engaged couples to share their journey, announce schedule details (Ceremony, Cocktail Hour, Reception), guide guests with embedded maps and dress code notes, showcase engagement photography with a full-screen lightbox modal, and collect RSVPs directly via WhatsApp without requiring third-party database subscriptions.
- **Target Audience / Persona**: Wedding guests on mobile and desktop seeking schedule timing, directions, attire guidance, and instant RSVP submission, as well as the couple personalizing the site.
- **Key Value**: High-fashion editorial visual presentation, zero backend maintenance, zero broken image risks, and instant WhatsApp guest communication.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Hero & Countdown**: Guest arrives at a cinematic hero frame with subtle warmth scrim, responsive typography, live days/hours/minutes/seconds countdown ticking in real-time, and one-tap smooth scroll to RSVP.
  2. **Our Story Timeline**: Editorial journey cards highlighting key milestones (First Met, The First Trip, The Proposal, Forever Begins).
  3. **Event Schedule & Maps**: Structured event cards with date, time, location, and dress code, paired with an embedded interactive Google Map and a direct Google Maps directions trigger.
  4. **Engagement Gallery & Lightbox**: Responsive grid of curated photographs; clicking any photo opens an accessible, keyboard-navigable (`ESC`, `←`, `→`) fullscreen modal with image caption and photo counter.
  5. **WhatsApp RSVP Form**: Intuitive form with instant input validation; clicking "Send RSVP via WhatsApp" creates a pre-formatted message and opens WhatsApp Web/Mobile.
  6. **Live Customizer Drawer**: A clean, discreet floating action trigger letting the couple edit names, wedding date, venue, phone number, and hashtag on the fly.
  7. **Theme Toggle**: Seamless dark mode support honoring evening viewing with warm obsidian and amber contrast compensation.

- **Visual Identity & Theme**:
  - *Palette*:
    - Canvas (Light): Sand Cream `#FAF6F0`, warm card surface `#F4EDE3`, subtle border `#E5D9CB`
    - Canvas (Dark): Deep Desert Night `#181311`, card surface `#231C19`, border `#3B2E28`
    - Accents: Terracotta Rust `#C26546`, Sunset Bronze `#D48B54`, Desert Clay `#A44C33`
  - *Typography*:
    - Display / Headings: `Cormorant Garamond` (classic high-fashion luxury serif, delicate italic ampersands)
    - Body & UI: `Plus Jakarta Sans` (crisp, modern, high-legibility geometric sans)
    - Numerical / Countdown: `font-mono tabular-nums` for rock-solid countdown alignment
  - *Zero-Pill Restraint*: Unboxed metadata with quiet typographic bullet separators (`Ceremony · 4:00 PM · Black-Tie Optional`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: WhatsApp RSVP Direct Dispatch vs. Database Backend**:
  - *Chosen Approach*: Direct client-side WhatsApp URL generator (`https://wa.me/<phone>?text=<encoded_rsvp>`).
  - *Why*: Perfectly satisfies the user requirement, works seamlessly on both mobile devices (native WhatsApp app) and desktop (WhatsApp Web), eliminates external server costs, and delivers guest RSVPs directly to the couple's personal chat.
  - *Alternatives Considered*: Firebase Firestore (adds setup friction for a static wedding site when WhatsApp direct contact is explicitly required).

- **Decision 2: Live In-App Couple Customizer**:
  - *Chosen Approach*: Floating subtle "Personalize Site" button opening a slide-over modal that persists couple names, date, venue, phone, and hashtag to `localStorage` while providing instant reactive preview.
  - *Why*: Empowers the user to test their real names and dates immediately without editing source files manually.

- **Decision 3: Curated High-Fidelity Themed Assets**:
  - *Chosen Approach*: Generate domain-matched editorial wedding photographs using `generate_image` (hero couple portrait, golden hour engagement shots, intimate wedding details) with robust fallback styling.
  - *Why*: Eliminates broken image links from external CDNs and provides a cohesive terracotta-and-sunset aesthetic.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      App Container                     │
│    (Theme Context, Wedding Details State, Modals)      │
└──────────────────────────┬─────────────────────────────┘
                           │
 ┌─────────────────────────┼────────────────────────────┐
 │                         │                            │
 ▼                         ▼                            ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   Navigation     │  │   Hero Banner    │  │   Our Story      │
│  - Couple Logo   │  │  - Names & Date  │  │  - Milestones    │
│  - Section Links │  │  - Live Timer    │  │  - Date & Quote  │
│  - Dark Mode /   │  │  - RSVP CTA      │  └──────────────────┘
│    Edit Triggers │  └──────────────────┘
└──────────────────┘
                           │
 ┌─────────────────────────┼────────────────────────────┐
 │                         │                            │
 ▼                         ▼                            ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Schedule & Map  │  │  Photo Gallery   │  │  WhatsApp RSVP   │
│  - Event Cards   │  │  - Masonry Grid  │  │  - Guest Inputs  │
│  - Google Maps   │  │  - Lightbox View │  │  - URL Formatter │
│  - Directions CTA│  │  - Keyboard Nav  │  │  - Send Trigger  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

- **Interactive State Mapping**:
  - `weddingInfo`: Couple names (`partner1`, `partner2`), wedding timestamp (`targetDate`), venue name, city, address, phone number for WhatsApp (`+1234567890`), hashtag (`#ElenaAndMateo`), and story chapters.
  - `countdown`: Reactive `calculateTimeLeft()` running every 1,000ms calculating days, hours, minutes, seconds.
  - `lightbox`: Active index `number | null`, with next/prev handlers and keyboard listener.
  - `rsvpForm`: `fullName`, `attendingStatus`, `guestCount`, `dietaryRestrictions`, `message`.
  - `theme`: `'light' | 'dark'` toggling `document.documentElement.classList`.
