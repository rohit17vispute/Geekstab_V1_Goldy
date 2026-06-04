# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page marketing/landing site for **Geekstab**, an enterprise Salesforce consulting firm. It's a React 19 SPA served by a custom Express server that also exposes one API endpoint for the contact form.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server: tsx runs server.ts with Vite in middleware mode (HMR), port 3000
npm run build        # vite build (client → dist/) + esbuild bundles server.ts → dist/server.cjs
npm start            # production: NODE_ENV=production node dist/server.cjs, serves static dist/
npm run lint         # type-check only: tsc --noEmit (no emit, no separate test runner exists)
npm run clean        # rm -rf dist server.js
```

There is **no test suite and no ESLint** — `npm run lint` is purely `tsc` type-checking. Run it after changes to catch type errors.

## Architecture

**Unified server (`server.ts`).** A single Express app serves both the app and the API. In dev it mounts Vite as middleware (`appType: "spa"`); in production (`NODE_ENV=production`) it serves the built `dist/` folder with an SPA catch-all. The API route is registered *before* the Vite/static middleware so it isn't swallowed by the catch-all — keep new API routes above `startServer()`.

**The one API endpoint: `POST /api/submit-inquiry`.** Backs the contact form. Validates `name`, `email`, `helpWith`, `message` (required) plus optional `company`. Then:
- If SMTP env vars are missing it returns `{ success: true, simulated: true }` ("demo mode") instead of erroring — the UI shows a "SIMULATED" notice. This is intentional; don't make missing SMTP a hard failure.
- If configured, it sends **two** emails via nodemailer: a branded confirmation to the customer and a lead-notification to `SMTP_USER`. Both HTML templates are inlined in `server.ts`.

**Client (`src/`).** `main.tsx` → `App.tsx` renders a fixed sequence of section components (Hero, About, Services, TechStack, HowWeWork, Portfolio, Industries, WhyGeekstab) plus `Header`, `Footer`, and the `ContactForm` modal. `App.tsx` owns two pieces of state: scroll-spy `activeSection` (matched against hardcoded section IDs) and `contactOpen` for the modal. Navigation is smooth-scroll to element IDs with an 80px sticky-nav offset — section `id` attributes in components must stay in sync with the `sections` array in `App.tsx` and the nav item IDs in `Header.tsx`.

**Content lives in `src/data.ts`**, typed by `src/types.ts` (`SERVICES`, `HOW_WE_WORK_STEPS`, `CASE_STUDIES`, `INDUSTRIES`, `DIFFERENTIATORS`). To change copy — services, case studies, industries — edit `data.ts`, not the components. Components map over these arrays.

**ContactForm (`src/components/ContactForm.tsx`)** does client-side validation mirroring the server's, POSTs to `/api/submit-inquiry`, and additionally persists every submission to `localStorage` under the key `geekstab_inquiries`.

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js`). The theme is defined in `src/index.css` using the `@theme` block — brand colors are CSS custom properties exposed as utility classes: `brand-navy`, `brand-darker`, `brand-card`, `brand-cyan`, `brand-gray`, `brand-border`, etc. Fonts: `font-sans` (Inter), `font-mono` (JetBrains Mono), `font-display` (Space Grotesk). Use these tokens rather than raw hex values to stay on-brand. Icons come from `lucide-react`; animation from `motion`.

## Conventions

- `@/*` path alias maps to the repo root (configured in both `tsconfig.json` and `vite.config.ts`).
- TS is `noEmit` / `allowImportingTsExtensions` — imports use explicit `.tsx` extensions (e.g. `import App from './App.tsx'`).
- `.env` is gitignored (`.env*` except `.env.example`). SMTP secrets (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`) and `INQUIRY_TO` go there; see `.env.example`.
