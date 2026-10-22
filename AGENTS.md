<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

| Action | Command |
|--------|---------|
| dev server | `npm run dev` |
| build | `npm run build` |
| lint | `npm run lint` |
| start (prod) | `npm run start` |

No test runner is configured — `lint` is the only verification gate.

## Architecture

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript (strict)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`). CSS modules used only for Swiper overrides in `landingSlider/style.module.css`. No Sass.
- **React Compiler**: enabled in `next.config.ts` (`reactCompiler: true`) — do not add `useMemo`/`useCallback` manually.
- **Path alias**: `@/*` → `./src/*`

### RTL Persian shop site

- `dir="rtl"`, `lang="fa"` in root `<html>`. Vazir font loaded via `next/font/local`.
- Components use Persian text and RTL-aware layout classes.

### Component tree

```
src/
  app/            — App Router pages (/, /cart with own layout.tsx)
  components/
    layouts/      — Navbar, Footer
    templates/    — Page sections (home/, cart/)
    modules/       — Reusable pieces (ShopCard, SearchBar, AccordionSection, etc.)
```

### State & data

- No state management library — plain `useState`/`use client`.
- No API routes, no `lib/`, no `models/` — entirely frontend-only at this stage.
- Cart page at `src/app/cart/` is scaffolded with a placeholder summary section.

### Dependencies

- `framer-motion` (animations), `swiper` (carousels), `react-icons` (icons), `recharts` (charts)
- `jsonwebtoken` + `mongoose` in deps but not wired into any source files yet.

## Conventions

- All components use default exports.
- Client components explicitly marked `"use client"`.
- Images served from `public/` via `next/image` with local paths (`/temp/...`, `/images/...`).
- `.env*` files are gitignored — never commit secrets.
