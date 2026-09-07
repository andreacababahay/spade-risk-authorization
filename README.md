# Spade — Risk & Authorization

A responsive TypeScript / Next.js App Router recreation of every section on https://spade.com/use-case/risk-authorization/.

## Run locally

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. The same page is also available at `/use-case/risk-authorization/`.

```sh
pnpm build
pnpm typecheck
```

The production build exports a static site into `out/`, suitable for static hosting. On systems with limited file watchers, run `WATCHPACK_POLLING=true pnpm dev`.

## Included

- Sticky desktop navigation and keyboard-accessible mobile menu
- Hero, benefit ticker and customer logos
- Problem statement and four-card benefit carousel
- Three customer testimonials with navigation
- Two interactive authorization workflows and all eight steps
- Layered agentic-commerce artwork
- Industry cards, case studies and related use cases
- Closing call to action, footer links and newsletter demo
- Responsive styling and reduced-motion support

UI controls use the bundled Base UI / Shadcn primitives. Content is implemented as React components, with shared CSS and local assets; no iframe or copy of the original site's runtime is embedded.

## Scope and source assets

This is a reference recreation, not an official Spade service. The original site remains the destination for sales, case-study, navigation and legal links. Newsletter entry is local UI only: it explicitly reports that no subscription has been submitted. The diagrams use static layers and lightweight CSS motion; the original Rive animations are not reproduced exactly.

Brand artwork, logos, fonts, customer quotations and marketing content originate from the supplied Spade reference. They retain their original ownership and are included to support review of the requested recreation. No independent asset license is granted by this repository.

The Sites scaffold's dependencies and UI component catalog have been retained, but development and production builds run actual Next.js 16 with TypeScript. `.openai/hosting.json` configures the static preview deployment.
