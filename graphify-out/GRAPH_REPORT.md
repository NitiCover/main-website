# Graph Report - .  (2026-08-13)

## Corpus Check
- Corpus is ~32,181 words - fits in a single context window. You may not need a graph.

## Summary
- 200 nodes · 217 edges · 20 communities (12 shown, 8 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.96)
- Token cost: 232,651 input · 0 output

## Community Hubs (Navigation)
- Project Instructions & Scaffold Docs
- Marketing Page Sections
- Runtime Dependencies
- shadcn Component Config
- Hero Scroll + WhatsApp Quote Demo
- TypeScript Compiler Options
- Lint & Type Dev Dependencies
- README & Scaffold Credits
- TS Config File Refs
- package.json Scripts
- Root Layout & Fonts
- NitiCover Brand Logo
- ESLint Config File
- Next.js Config File
- PostCSS Config File
- Unused Stock Icon (file.svg)
- Unused Stock Icon (globe.svg)
- Unused Stock Icon (next.svg)
- Unused Stock Icon (vercel.svg)
- Unused Stock Icon (window.svg)

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `NitiCover (WhatsApp business account)` - 8 edges
3. `include` - 7 edges
4. `tailwind` - 6 edges
5. `aliases` - 6 edges
6. `Button()` - 5 edges
7. `scripts` - 5 edges
8. `Customer (startup founder requesting cover)` - 5 edges
9. `Tata AIG (quote: ₹61,000/year, ₹2 Crore coverage; recommended & selected)` - 5 edges
10. `lib` - 4 edges

## Surprising Connections (you probably didn't know these)
- `HeroScrollImage()` --references--> `WhatsApp Cyber Insurance Quote Conversation (Demo)`  [INFERRED]
  components/sections/hero-scroll-image.tsx → public/whatsapp-quote-demo.png
- `next/font` --conceptually_related_to--> `app/layout.tsx`  [INFERRED]
  README.md → CLAUDE.md
- `create-next-app` --conceptually_related_to--> `Next.js 16.3.0`  [INFERRED]
  README.md → CLAUDE.md
- `Button()` --calls--> `cn()`  [EXTRACTED]
  components/ui/button.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Read Next.js Docs Before Coding Workflow** — claude, agents, agents_next_dist_docs [EXTRACTED 0.90]
- **create-next-app Scaffolded Stack** — readme_create_next_app, claude_nextjs, claude_react, claude_tailwindcss_v4 [INFERRED 0.85]
- **npm Script Lifecycle (dev/build/start)** — claude_npm_run_dev, claude_npm_run_build, claude_npm_run_start [EXTRACTED 0.90]

## Communities (20 total, 8 thin omitted)

### Community 0 - "Project Instructions & Scaffold Docs"
Cohesion: 0.10
Nodes (21): generate-agent-files.js, next dev command, node_modules/next/dist/docs/, Next.js Breaking Changes Warning, app/globals.css, app/page.tsx, eslint.config.mjs, eslint-config-next (+13 more)

### Community 1 - "Marketing Page Sections"
Cohesion: 0.13
Nodes (13): Benefits, Cta(), Footer(), HowDifferent(), niticover, traditional, links, Navbar() (+5 more)

### Community 2 - "Runtime Dependencies"
Cohesion: 0.09
Nodes (23): @base-ui/react, class-variance-authority, clsx, framer-motion, lucide-react, next, dependencies, @base-ui/react (+15 more)

### Community 3 - "shadcn Component Config"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 4 - "Hero Scroll + WhatsApp Quote Demo"
Cohesion: 0.14
Nodes (16): Hero(), HeroScrollImage(), ContainerScroll(), Bajaj Allianz (quote: ₹68,000/year, ₹2 Crore coverage), CloudNest Technologies (SaaS company, 18 employees, ₹2 crore revenue), Company info request (name, industry, revenue, employees, data storage, incident history), WhatsApp Cyber Insurance Quote Conversation (Demo), Customer (startup founder requesting cover) (+8 more)

### Community 5 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 6 - "Lint & Type Dev Dependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 7 - "README & Scaffold Credits"
Cohesion: 0.20
Nodes (10): app/layout.tsx, Next.js 16.3.0, create-next-app, Geist Font, Learn Next.js Tutorial, next/font, Next.js Documentation, Next.js GitHub Repository (+2 more)

### Community 8 - "TS Config File Refs"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 9 - "package.json Scripts"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 10 - "Root Layout & Fonts"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 11 - "NitiCover Brand Logo"
Cohesion: 0.83
Nodes (4): NitiCover (insurance brand), Cupped hands icon — black line-art of two open hands forming a sheltering/protective cup shape, positioned left of the NitiCover wordmark, Tagline: 'Smart Insurance, Secure Future.' — navy serif text beneath the wordmark, NitiCover logo — 'Niti' in dark navy serif, 'Cover' in medium blue serif, above tagline 'Smart Insurance, Secure Future.' in navy small-caps serif; icon of two open cupped hands (black outline) forming a protective/sheltering gesture to the left of the wordmark

## Knowledge Gaps
- **100 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `$schema`, `style` (+95 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Runtime Dependencies` to `package.json Scripts`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Lint & Type Dev Dependencies` to `package.json Scripts`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `NitiCover (WhatsApp business account)` (e.g. with `WhatsApp Cyber Insurance Quote Conversation (Demo)` and `Bajaj Allianz (quote: ₹68,000/year, ₹2 Crore coverage)`) actually correct?**
  _`NitiCover (WhatsApp business account)` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _100 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Instructions & Scaffold Docs` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Should `Marketing Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._