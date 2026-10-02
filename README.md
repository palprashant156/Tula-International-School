# Tula International School — Homepage Frontend

A responsive, animated homepage for Tula's International School (Dehradun),
built with **React + Vite**. The UI is ported from the *TIS Modern Homepage
Redesign* created in **Google Stitch** and fetched via the Stitch MCP server,
then rebuilt as hand-written React components with motion and dark mode.

## Features

- **Stitch-accurate homepage** — hero, stats bar, about, four pillars, academic
  pathways (IV–XII tabs), sports & arts mosaic, boarding life, mentors,
  parent testimonials, admissions enquiry form, and footer.
- **Custom cursor** — mouse-follower dot + ring that expands and tints over
  links, buttons, and form fields (GPU-composited transforms, rAF-throttled).
- **Scroll-triggered reveals** — staggered card entrances via
  IntersectionObserver (`Reveal` / `RevealGroup`), with
  `prefers-reduced-motion` support.
- **Theme switcher** — animated dark/light toggle in the header, persisted to
  `localStorage`, OS-preference aware, no first-paint flash.
- **Scroll progress bars** — smooth rAF-throttled reading indicator.
- **Responsive** — mobile drawer nav, collapsing grids, fluid display type
  from 360px phones to widescreen desktops.

## Tech stack

| Layer   | Choice                                              |
| ------- | --------------------------------------------------- |
| UI      | React 18 (function components + hooks)              |
| Build   | Vite 6                                              |
| Styling | Tailwind Play CDN (Stitch design tokens) + `src/styles/index.css` fallbacks |
| Design  | Google Stitch (via MCP: `stitch.googleapis.com/mcp`) |
| Fonts   | Plus Jakarta Sans, Noto Serif, Material Symbols     |

## Project structure

```
src/
├── App.jsx                 # composition only (+ tour-modal state)
├── main.jsx                # entry point
├── data/site.js            # nav, contact, stats, pillars, tabs, testimonials
├── hooks/                  # useInView, useScrollProgress, useCustomCursor, useTheme
├── components/
│   ├── layout/             # Header, Footer, ScrollProgress, CustomCursor,
│   │                       # ThemeToggle, TourModal
│   ├── sections/           # Hero, StatsBar, About, Pillars, Academics,
│   │                       # Sports, Boarding, Mentors, Testimonials, Enquiry
│   └── ui/                 # Reveal/RevealGroup, SectionTag, SmartImage
└── styles/index.css        # tokens, alignment fallbacks, reveals, dark mode
```

## Setup

Prerequisites: **Node.js 20+** and npm.

```bash
npm install     # install dependencies
npm run dev     # start dev server (default http://localhost:5173)
npm run build   # production build into dist/
npm run preview # preview the production build
```

No environment variables are needed — all artwork besides `public/logo.png`
loads from the Stitch CDN URLs at runtime.

## Design source

The layout, copy, palette, and imagery come from the Stitch project
**“TIS Modern Homepage Redesign”** (`projects/13663643041138290183`,
screen `Tulas International School (TIS) - Homepage`), retrieved with the
Stitch MCP tools `list_projects → list_screens → get_screen`. The raw export
was then split into the components above; interactive parts (tabs, drawer,
form, modal, theme) are native React state.
