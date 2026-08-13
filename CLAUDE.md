@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## State of this repo

This is an unmodified `create-next-app` scaffold — no custom code exists yet beyond the generated `app/layout.tsx`, `app/page.tsx`, and `app/globals.css`. There is no test suite or CI configured.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Stack

- Next.js 16.3.0, App Router (`app/` directory), React 19.2.8, TypeScript in strict mode
- Tailwind CSS v4 via `@tailwindcss/postcss` — no `tailwind.config.*` file; theme/config lives in CSS (`app/globals.css`)
- ESLint 9 flat config (`eslint.config.mjs`) extending `eslint-config-next`'s core-web-vitals and typescript rule sets
- Path alias `@/*` resolves to the repo root (`tsconfig.json`)

## Before writing code

Per `AGENTS.md` (imported above): this Next.js version has breaking changes vs. training data. Read the relevant guide under `node_modules/next/dist/docs/` before implementing anything.
