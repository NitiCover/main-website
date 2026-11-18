# Site-wide NitiCover brand rollout

**Goal:** Every route uses the NitiCover brand that the new home page (`app/page.tsx`, `components/landing/*`) already uses: same nav, footer, palette, typography, buttons and section patterns. Routing and links are consistent across pages.

**Spec (binding authority):** the Figma file "Niticover": the home page (node 170:72), already implemented in `components/landing/*`, and the "Final brand guide" (node 167:895). The home page implementation is the reference for how the brand is applied.

## Global Constraints

- **Stack:** Next.js 16.3 App Router, React 19, Tailwind v4 (tokens in `app/globals.css`, no tailwind config), TypeScript strict. This Next.js has breaking changes: read the relevant guide in `node_modules/next/dist/docs/` before using a Next API you are unsure of.
- **Tests:** Vitest + Testing Library (`npm test`), jsdom. TDD: write the failing test first, run it, watch it fail for the right reason, then implement. Tests assert behaviour and content through roles/text, not class names.
- **Brand tokens** (already defined in `app/globals.css` `@theme inline`, use them, never raw hex for these): `niti-ink #193133`, `niti-deep #1b3537`, `niti-teal #014d43`, `niti-lime #d0ff71`, `niti-lime-ink #093214`, `niti-mint #27eaa6`, `niti-violet #6f73db`, `niti-periwinkle #8f93ff`, `niti-lilac #a7abff`, `niti-lavender #e5e5ff`, `niti-mist #f1f4fa`, `niti-cloud #eeeeee`, `niti-slate #56657a`, `niti-steel #6c84a3`, `niti-stone #676d69`.
- **Fonts** (Tailwind utilities): `font-headline` (Stack Sans Headline: all headings, buttons, nav), `font-text` (Stack Sans Text: UI/body text), `font-display` (Parkinsans: highlighted words, numerals in badges), `font-inter` (Inter: long-form body copy).
- **Brand patterns to reuse (from the home page):**
  - Eyebrow tag: small uppercase label, `bg-niti-violet text-white` (or lavender variant), rounded-lg, `text-xs`.
  - Highlight: lime marker on key phrase(s) of every page and section title (`<Highlight>`).
  - Headings: `font-headline`, `text-niti-ink` on light, white on dark; h1 `clamp(2.125rem,1.1rem+3.6vw,3.5rem)`, h2 `clamp(2rem,1.4rem+1.9vw,2.5rem)` with `leading-[1.3]` (home uses 48px medium `leading-[1.12]` on coloured sections).
  - Body: `font-inter text-lg leading-[1.55] text-niti-slate` on light, `text-white/75` on dark.
  - Surfaces: white sections; light cards `bg-niti-cloud rounded-[32px]` (step cards) or `bg-niti-mist rounded-[20px]` (feature rows with a 44px `bg-niti-teal` icon circle); dark band `bg-niti-ink` / `bg-niti-deep` with mix-blend-screen swirls; periwinkle band `bg-niti-periwinkle`.
  - Numbered badge: 42px `bg-niti-teal` circle with `font-display font-semibold text-[#fafafa]`.
  - Buttons are full pills (`rounded-full`), `font-headline`, the brand guide's three "Send Quote" styles: teal (`bg-niti-teal text-white`), white (`bg-white text-niti-teal`), lime (`bg-niti-lime text-niti-ink`), plus outline (border, transparent) for secondary actions.
  - Section rhythm: sections are max-w-[1280px] centred, horizontal padding `px-4 sm:px-8 lg:px-[72px]`, vertical `py-16 lg:py-[72px]`.
- **Fluid:** every page must work from 360px to 1440px with no horizontal page scroll; use `clamp()` type and responsive grids like the home page.
- **Accessibility:** one `h1` per page; landmark `nav`s labelled; interactive widgets keyboard operable; decorative images `alt=""` + `aria-hidden`.
- **No em dashes** in new copy (use a hyphen). Keep existing page content/meaning; restyle, don't rewrite copy unless a task says so.
- Do not edit `CHANGELOG.md` or generated files. Commit at the end of each task with a conventional commit message and no co-author line.

## File structure

- `components/brand/` (new): shared brand primitives used by every page.
- `components/landing/`: home page sections (existing). Its `primitives.tsx` moves to `components/brand/`.
- `components/site/` (new): site chrome (nav, footer) used by the root layout.
- `app/*/page.tsx`: pages consume brand + site components only.
- `components/sections/*`, `components/ui/{pill-link,section-heading,info-card}.tsx`, `components/background/*`, `components/watermelon-ui/*`, `components/reactbits/*`: legacy; deleted in Task 6 once unused.

---

## Task 1: Brand primitives library

Create `components/brand/` and move the landing primitives into it.

1. Move `components/landing/primitives.tsx` to `components/brand/primitives.tsx` (exports `Eyebrow`, `Highlight`, `Decor`, `pct` unchanged). Update every import in `components/landing/*`. Delete the old file.
2. Add `components/brand/button-link.tsx`: `ButtonLink({ href, variant, size, children, className })`.
   - `variant`: `"teal" | "lime" | "white" | "outline-light" | "outline-dark"` (default `"teal"`). `outline-light` = white border/text for dark backgrounds; `outline-dark` = `border-niti-teal text-niti-teal` for light backgrounds.
   - `size`: `"md"` (`h-12 px-5 text-lg`) | `"sm"` (`px-[18px] py-[9px] text-lg leading-none`, the nav pill). Default `"md"`.
   - Renders `next/link` `Link` for internal paths (`/` or `#` prefix) and a plain `<a>` for `mailto:`, `tel:` and `http(s):` URLs. External `http(s)` links get `target="_blank" rel="noreferrer"`.
   - Pill shape, `font-headline`, hover lift `hover:-translate-y-0.5` for filled variants, colour swap for outlines, visible `focus-visible` ring (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-niti-lime`).
3. Add `components/brand/page-hero.tsx`: `PageHero({ eyebrow, title, description, actions })`, the inner-page hero. A dark rounded card like the home hero (`bg-niti-ink rounded-3xl`, max-w-[1219px], outer `px-3 sm:px-[30px]`) reusing the home hero swirl assets `/landing/hero-ring.svg` and `/landing/hero-swirl-right.svg` (mix-blend-screen, positioned as in `components/landing/hero.tsx`). Left-aligned content, `Eyebrow`, `h1` (white, accepts ReactNode so callers can wrap words in `<Highlight>`), description `text-white` 17-20px, optional `actions` row. Height content-driven: `py-16 sm:py-20 lg:py-24`.
4. Add `components/brand/section-header.tsx`: `SectionHeader({ eyebrow, title, description, align = "left", tone = "light", as = "h2", id })`. Eyebrow + heading + optional description; `tone="dark"` renders white heading and `text-white/75` description; `align="center"` centres. Heading text style as in Global Constraints.
5. Add `components/brand/feature-card.tsx`:
   - `StepCard({ index, title, children })`: `bg-niti-cloud rounded-[32px] px-8 py-10` with the numbered teal badge (index is 0-based, renders `index + 1`), `h3` `font-headline font-semibold text-niti-ink`, body `font-text font-medium text-niti-stone`. Exactly the home "How it works" card look.
   - `FeatureCard({ icon, title, children })`: the home platform "promise" row: `bg-niti-mist rounded-[20px] p-5`, 44px teal circle holding the icon (`icon` is a `LucideIcon`, rendered white `size-5`, `aria-hidden`), `h3` 20px semibold, body `font-inter text-[15px] text-niti-slate`.
6. Add `components/brand/cta-band.tsx`: `CtaBand({ title, description, actions, id })`, generalising `components/landing/closing-cta.tsx` (same dark card, swirls `/landing/cta-swirl-left.svg` and `/landing/cta-swirl-right.svg`, centred white `h2`). Refactor `ClosingCta` to render `CtaBand` with its existing copy and its two links rendered via `ButtonLink` (white + outline-light). The home page must look identical.
7. Add `components/brand/index.ts` re-exporting all of the above.
8. Tests in `components/brand/brand.test.tsx`:
   - ButtonLink: internal href renders a link with that href; `mailto:` renders `<a>` with the href; `https://` gets `target="_blank"` and `rel="noreferrer"`.
   - PageHero: renders exactly one `h1` with the title text; renders the eyebrow and description; renders actions when given.
   - SectionHeader: renders an `h2` by default with title; `as="h1"` renders `h1`; description shown when given; `id` is set on the heading.
   - StepCard renders the 1-based number and an `h3`; FeatureCard renders an `h3` and its body.
   - CtaBand renders an `h2` and the actions.
   - Existing `components/landing/landing.test.tsx` must still pass unchanged (except import path updates if any).

## Task 2: Site chrome and routing

Make the new nav and footer the site-wide chrome, and make every link resolve correctly from every route.

1. Move `components/landing/site-nav.tsx` → `components/site/site-nav.tsx` and `components/landing/site-footer.tsx` → `components/site/site-footer.tsx`. Update imports and tests (move their tests into `components/site/site.test.tsx`).
2. **Single source of truth for links:** create `lib/site-links.ts` exporting `DEMO_HREF`, `CONTACT_HREF`, `navLinks`, `footerGroups`. Remove these from `lib/landing-content.ts` (update all importers).
   - `DEMO_HREF` = the existing real demo channel from `lib/site-content.ts` (the `mailto:` demo request). `lib/site-content.ts` must re-export it from `lib/site-links.ts` rather than define its own, so there is exactly one definition.
   - `CONTACT_HREF` = `mailto:` + `SITE_EMAIL` (from `lib/site-content.ts`).
   - `navLinks` (in order, exactly the Figma nav): Platform `/platform`, How it works `/#how-it-works`, Why NitiCover `/#why-niticover`, About `/about`. Plus the "Book a demo" CTA → `DEMO_HREF`. Solutions, Investors and Careers are reached from the footer.
   - `footerGroups`: Platform: How it works `/#how-it-works`, Why NitiCover `/#why-niticover`, Insurance 101 `/#insurance-101`, Solutions `/solutions`, Platform `/platform`. Company: About `/about`, Investors `/investors`, Careers `/careers` (label "Join us"), Contact `CONTACT_HREF`. Legal: Privacy, Terms, Disclosures stay `#` placeholders.
   - All in-page section anchors must be written as `/#id` so they work from any route.
3. Nav active state: the nav link whose `href` equals the current pathname gets `aria-current="page"` and an active style (`bg-niti-teal/8`). Use `usePathname` from `next/navigation`. Same in the mobile menu.
4. Nav and footer links use `ButtonLink` where they are pills (nav CTA) and plain `Link`/`<a>` elsewhere; `mailto:` links must be `<a>`.
5. Root layout `app/layout.tsx`: render `<SiteNav />` before and `<SiteFooter />` after `{children}`; wrap children in `<main id="main" className="flex flex-1 flex-col">`. Add a visually hidden "Skip to content" link targeting `#main` as the first focusable element. Remove `ParticleField` from the layout and delete `components/background/particle-field.tsx` and its test (the old navy/blue swarm conflicts with the brand everywhere). Remove the per-page `SiteNav`/`SiteFooter` from `app/page.tsx` (home `main` becomes a `div` since the layout owns `main`; keep the 72px section gap and the footer gap).
6. Keep `AirtableSlotProvider` in the layout as is.
7. Add `app/not-found.tsx`: brand 404 using `PageHero` (eyebrow "404", title with a `Highlight`, short description) and `ButtonLink`s to `/` and `DEMO_HREF`.
8. Old per-page `Navbar`/`Footer` imports in inner pages will now render twice; remove `<Navbar />` and `<Footer />` from every `app/*/page.tsx` in this task so no page double-renders chrome (pages are restyled later).
9. Tests (`components/site/site.test.tsx`, mock `next/navigation` `usePathname`):
   - nav shows Platform, How it works, Why NitiCover, About and Book a demo; How it works href is `/#how-it-works`; Book a demo href is the mailto demo link. The `SiteNav`/`SiteFooter` describe blocks in `components/landing/landing.test.tsx` move here (updated for the new hrefs) and are removed from the landing test file.
   - on `/about` the About link has `aria-current="page"` and others don't.
   - mobile menu open/close (port the existing test).
   - footer: groups Platform/Company/Legal; Investors → `/investors`; Join us → `/careers`; Contact is a `mailto:`; legal notices present.
   - `app/not-found.tsx` renders an `h1` and a link to `/`.

## Task 3: Platform page

Restyle `app/platform/page.tsx` with the brand primitives. Keep all its content and the data it reads from `lib/site-content.ts` (`capabilities`, `decisionChain`, `placementSteps`, `autonomyLayers`, `complianceItems` and whatever else it uses).

- `PageHero` with eyebrow, title (highlight the key phrase), description, actions `ButtonLink` Book a demo (lime) + outline-light "See how it works" → `#how-it-works`.
- Replace every legacy component (`SectionHeading`, `InfoCard`, `PillLink`, `Reveal`, `Capabilities`, `Explainability`, `Cta`) with brand primitives laid out in the home page's section patterns: numbered processes → `StepCard` grid; capability/feature lists → `FeatureCard` (keep each item's lucide icon) or step cards; at least one section uses the dark (`bg-niti-ink`) or periwinkle band, as the home page alternates light and colour.
- Inline the content the old `Capabilities` and `Explainability` sections rendered (read those components to see what they show) so nothing is lost.
- End with `CtaBand` (Book a demo + Contact).
- Section `id="how-it-works"` must remain on the matching section (with `scroll-mt-24`).
- Test `app/platform/page.test.tsx`: one `h1`; each capability title from `capabilities` is rendered; the `#how-it-works` section exists; Book a demo link points to `DEMO_HREF`.

## Task 4: Solutions page

Same treatment for `app/solutions/page.tsx` (it has a local section component at the top and anchors such as `#individuals`). Keep all content and anchors. Broker / insurer benefits → `FeatureCard` grids; engagement steps → `StepCard`s; the dark `#individuals` band becomes a brand dark band (`bg-niti-ink`) with lime highlight and `ButtonLink`s. End with `CtaBand`.

Test `app/solutions/page.test.tsx`: one `h1`; every `brokerBenefits` and `insurerBenefits` title rendered; `#individuals` section exists; Book a demo link points to `DEMO_HREF`.

## Task 5: About, Careers and Investors pages

Restyle `app/about/page.tsx`, `app/careers/page.tsx`, `app/investors/page.tsx`. Keep all content.

- `PageHero` on each, with highlights.
- Founders: restyle `components/sections/founders.tsx` into `components/brand/founder-cards.tsx` (same data from `founders`, photo with its crop, name `font-headline`, role in `text-niti-teal`, bio `font-inter text-niti-slate`, card `bg-niti-cloud rounded-[32px]`). Pages use the new component; delete the old file.
- values / whyJoin → `FeatureCard`s (keep icons); hiringSteps / investorThesis → `StepCard`s; moats / partnerTypes → `FeatureCard`s or step cards; the investors dark band → brand dark band.
- Closing CTA sections → `CtaBand` with the existing copy and `ButtonLink`s (mailto/LinkedIn links as `<a>`, external opens in new tab).
- Tests (`app/about/page.test.tsx`, `app/careers/page.test.tsx`, `app/investors/page.test.tsx`): one `h1` each; each founder name rendered on About and Investors; each `values` / `whyJoin` / `hiringSteps` / `investorThesis` title rendered on its page; the careers LinkedIn link has `target="_blank"`.

## Task 6: Waitlist page and legacy cleanup

1. Restyle `app/waitlist/page.tsx`: `PageHero`-style heading (eyebrow "Waitlist", h1 with highlight) above the existing `AirtableSlot` (keep the `InView` animation or replace with a CSS `animate-in`), on a white section; keep metadata.
2. Delete every legacy component no longer imported anywhere: `components/sections/*` (all), `components/ui/{pill-link,section-heading,info-card,reveal,container-scroll-animation}.tsx`, `components/watermelon-ui/*`, `components/reactbits/*`, `components/motion-primitives/*` and `components/background/*`, but only after `rg` confirms each has no remaining importers (keep anything still used, e.g. `components/ui/button.tsx` if used, and `motion-primitives/in-view` if the waitlist keeps it). Remove now-unused dependencies from `package.json` only if `rg` shows zero imports (`three`, `@react-three/fiber`, `@types/three`, `lenis` are likely candidates); run `npm install` to update the lockfile.
3. Replace remaining raw legacy colours (`#0e2c54`, `#3087d0`, `#52627a`, `#f4f7fb`, `#eaf2fb`) anywhere in `app/` and `components/` with brand tokens; update `:root` `--primary`, `--foreground`, `--ring`, etc. in `app/globals.css` to brand values (`--foreground`/`--primary` → `#193133`, `--ring` → `#014d43`, `--secondary`/`--accent`/`--muted` → `#f1f4fa`, `--muted-foreground` → `#56657a`) and delete `--brand-navy`/`--brand-blue` and their theme mappings once unused.
4. Update root `metadata` description/title to the home page value proposition ("India's first AI platform that runs insurance broking end-to-end for businesses"), no em dash.
5. Verify: `rg -n "#0e2c54|#3087d0|brand-navy|brand-blue" app components` returns nothing; `npm test`, `npm run lint`, `npx tsc --noEmit`, `npm run build` all clean.
6. Cross-cutting cleanups found in task reviews:
   - `StepCard` (and `FeatureCard`) accept an optional `className` merged with `cn`, and `StepCard` fills its grid cell (`h-full`). Remove every `[&>div]:h-full` wrapper hack from the pages (platform, solutions, careers, investors) and pass classes directly.
   - `StepCard`/`FeatureCard` wrap `children` in a `div` instead of a `p`, so block children are valid.
   - `components/landing/hero.tsx` "Book a Demo" uses `ButtonLink` (lime, with the same visual classes as today), so the `mailto:` `DEMO_HREF` renders a plain `<a>`.
   - Replace every em dash (U+2014) in user-visible copy in `lib/site-content.ts`, `lib/landing-content.ts` and `app/**` with a hyphen, comma or colon as reads best.
   - Move the `next/image` mock duplicated in test files into `vitest.setup.ts` (pass through `style`, drop `fill`/`placeholder`/`blurDataURL`/`priority`), and add a founder-cards assertion that the crop transform style reaches the image.
   - Replace raw `text-[#fafafa]` with `text-white` across app/components; remove the redundant `/node_modules` line in `.gitignore` (keep `**/node_modules`).
