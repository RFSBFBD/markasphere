# MarkaSphere | Strategic Executive Brand Presence

A modern Vue 3 + Vite single-page application that builds executive brand presence, visual identity systems, and premium digital experiences.

## Project Overview

**MarkaSphere** is a specialized creative studio website showcasing:
- Strategic visual identity and branding solutions
- Executive digital presence systems
- Premium website design and development
- Social media, video editing, and marketing services
- Portfolio of case studies and client testimonials
- Multi-language support (English & Arabic) with RTL/LTR layout switching
- Premium glassmorphism UI with smooth animations

## Tech Stack

- **Frontend Framework:** Vue 3 with Composition API (`<script setup>`)
- **Build Tool:** Vite (with HMR support)
- **Styling:** Tailwind CSS 4 + custom CSS variables
- **State Management:** Pinia
- **Routing:** Vue Router 5
- **Animations:** Lenis (scroll behavior), Reveal (entrance animations), Magnetic (interactive effects)
- **UI Components:** Lucide icons, Embla Carousel
- **SEO/Meta:** @unhead/vue for dynamic head management

## Project Structure

```
markasphere/
├── src/
│   ├── components/
│   │   ├── animations/       # Reveal, Magnetic, scroll effects
│   │   ├── cards/            # ProjectCard component
│   │   ├── layout/           # Footer layout
│   │   ├── navigation/       # Header, NavLinks, MobileMenu, HeaderActions
│   │   ├── sections/         # Page sections (Hero, Services, Projects, etc.)
│   │   ├── shared/           # Shared/utility components
│   │   └── ui/               # UI utilities (CookieConsent, CustomCursor, ScrollToTop)
│   ├── composables/          # Vue composables (useLanguage, useTheme, useLenis)
│   ├── config/               # Constants and configuration
│   ├── content/              # Translation files (en/ar locales)
│   ├── data/                 # Static data (projects)
│   ├── layouts/              # MainLayout wrapper
│   ├── pages/                # Page components (Home, Services, Work, etc.)
│   ├── router/               # Vue Router setup
│   ├── stores/               # Pinia stores (language, theme)
│   ├── styles/               # Global styles (base, glass, motion, tokens)
│   ├── utils/                # Utility functions
│   ├── App.vue               # Root component
│   └── main.js               # Entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## Features

### Core Features
- ✨ **Responsive Design** — Mobile-first approach with glassmorphism
- 🌍 **Multi-language Support** — English & Arabic with automatic RTL/LTR switching
- 🎨 **Theme Switching** — Light/dark mode with localStorage persistence
- 📱 **Mobile Menu** — Smooth overlay menu with animations
- 🔗 **SPA Navigation** — Fast, seamless page transitions with Vue Router
- 🎭 **Rich Animations** — Reveal effects, scroll-driven animations, magnetic cursors

### Pages
1. **Home** — Hero section, services overview, project carousel, testimonials
2. **Services** — Detailed service descriptions with filtering
3. **Work (Portfolio)** — Project grid with filtering by category
4. **Insights** — Blog/article listing
5. **About** — Company philosophy and differentiators
6. **Project Details** — Individual case study pages
7. **Service Details** — Detailed service information pages

## Getting Started

### Prerequisites
- Node.js 16+ and npm/pnpm/yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/markasphere.git
cd markasphere
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173` with HMR enabled.

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

### Key Development Notes

#### Language & i18n
- Language state managed in `src/stores/language.js` (Pinia)
- Translations loaded dynamically from `src/content/locales/{lang}/{section}.js`
- Use `useLanguage()` composable to access `t` (translations) and toggle functions
- DOM direction and lang attributes auto-synced via `applyLanguage()`

#### Styling
- **CSS Variables** — All colors, spacing, transitions defined in `src/styles/tokens.css`
- **Responsive Units** — `clamp()` for fluid typography, `@media (width < 768px)` for breakpoints
- **Glassmorphism** — `.glass` utility applies backdrop blur and transparent background
- **Animations** — Motion classes in `src/styles/motion.css` (nav indicators, mobile menu delays)

#### State Management
- **Language Store** — `src/stores/language.js` — language, translations, i18n lifecycle
- **Theme Store** — `src/stores/theme.js` — light/dark mode
- **Composables** — `useLanguage()`, `useTheme()`, `useLenis()`, `useNavItems()`

#### Routing
- Routes defined in `src/router/index.js`
- Lazy-loaded pages for optimal performance
- Router guards for language/theme initialization
- Meta data via `useHead()` for SEO

### Common Tasks

#### Adding a New Page
1. Create `.vue` file in `src/pages/`
2. Add route in `src/router/index.js`
3. Link from navigation in `src/components/navigation/NavLinks.vue`
4. Add translations in `src/content/locales/*/layout.js`

#### Adding a New Section Component
1. Create component in `src/components/sections/`
2. Use `useLanguage()` to access translations
3. Wrap content with `<Reveal>` for animations
4. Test RTL support with direction toggle

#### Adding Translations
1. Add key-value pairs in `src/content/locales/{lang}/{section}.js`
2. Access via `t.value.sectionName.key` in components
3. Translations loaded dynamically on language toggle

## Environment Variables

Create a `.env.local` file in the project root (not tracked in Git):

```env
# Optional: API endpoints, if needed in future
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Deployment

### Build for Production
```bash
npm run build
```

Output will be in `dist/` directory.

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Code Style & Conventions

- **Components** — Single-file components with `<script setup>` syntax
- **Naming** — PascalCase for components, camelCase for functions/variables
- **Reactivity** — Use `ref()`, `computed()`, `watch()` for reactive state
- **Props** — Define with `defineProps()` and TypeScript hints (when available)
- **Emits** — Define with `defineEmits()`
- **Styling** — Scoped styles with `<style scoped>` in each component

## Performance Optimizations

- ✅ Code splitting via lazy-loaded routes
- ✅ Image lazy-loading with `loading="lazy"`
- ✅ CSS variables for reduced repaints
- ✅ Smooth scroll behavior with Lenis
- ✅ Prefetching of alternate language translations
- ✅ Vite's native ESM for faster HMR

## Known Issues & TODOs

- [ ] Add unit tests (Vitest)
- [ ] Add E2E tests (Cypress/Playwright)
- [ ] Optimize image assets (next-gen formats, srcset)
- [ ] Add service worker for offline support
- [ ] Integrate CMS for dynamic content

## Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## License

MIT License — see [LICENSE](LICENSE) file for details.

## Contact & Support

**Website:** https://markasphere.com  
**Email:** info@markasphere.com  
**WhatsApp:** +20 (106) 277-7300

---

**Last Updated:** May 30, 2026  
**Maintainers:** MarkaSphere Creative Studio

