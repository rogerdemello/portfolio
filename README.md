# Roger Richard Demello - Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. "Instrument" theme - graphite surfaces, a drafting grid, monospace metadata, and a single signal colour reserved for state.

**Live:** [rogerdemello.tech](https://rogerdemello.tech/)

---

## Features

- **Instrument theme** - four steps of graphite, one signal orange, one status green, all as semantic CSS variables. No gradients anywhere.
- **Drafting grid** - a fixed backdrop of vertical hairlines anchored to the content origin (`.grid-backdrop`)
- **Fixed rail** - desktop navigation with scroll-spy; slide-out drawer on mobile
- **Status bar** - fixed bottom readout: availability, active section, locale, live clock, scroll position
- **Sections** - Hero, Projects, Stack, Experience, Writing, Contact, About
- **Projects** - each written as Problem / Approach / Result / Stack rather than a card grid
- **Dynamic social cards** - OG and Twitter images generated at the edge (`app/opengraph-image.tsx`, `app/twitter-image.tsx`)
- **SEO** - metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **Accessibility** - skip-to-content link, semantic landmarks, labelled controls, `prefers-reduced-motion` honoured
- **Rover mascot** - cursor-tracking eyes (`components/BugMascot.tsx`)
- **CV** - hero button downloads the PDF (opens in a new tab on iOS Safari, which ignores `download`)

---

## Getting started

### Prerequisites

- **Node.js** 18+
- **npm**

### Install and run

```bash
git clone https://github.com/rogerdemello/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If the port is in use, Next.js picks the next available one.

No environment variables are required.

### Lock / "another instance" error

If you see *Unable to acquire lock at .next/dev/lock*:

1. Stop any other `npm run dev`.
2. Or delete `.next/dev/lock` (or the whole `.next` folder for a clean rebuild).

### Low-memory build machines

`next build` fans out one worker per core. On a machine with limited RAM this can fail with `VirtualAlloc failed` or `build worker exited with code: 3221226505`. Cap the workers for a local build:

```js
// next.config.mjs
const nextConfig = { experimental: { cpus: 2 } };
```

Not needed on Vercel - leave it out of committed config.

---

## Customization

### Content

| Section    | File                        | What to edit                                               |
|------------|-----------------------------|------------------------------------------------------------|
| Hero       | `components/Hero.tsx`       | Name, tagline, `metrics`, `building` list, CV link          |
| Projects   | `components/Projects.tsx`   | `projects` array - problem, approach, result, stack, links  |
| Stack      | `components/Stack.tsx`      | `groups` array plus the `ICONS` map for per-skill logos     |
| Experience | `components/Experience.tsx` | `timeline`, `highlights`, education, `credentials`          |
| Writing    | `components/Journal.tsx`    | `entries` array                                             |
| Contact    | `components/Contact.tsx`    | `lines` - the terminal readout                              |
| About      | `components/About.tsx`      | `log` changelog rows and `principles`                       |
| Navigation | `lib/useActiveSection.ts`   | `SECTIONS` - drives the navbar links and scroll-spy          |
| Coding profiles | `lib/profiles.ts`      | `CODING_PROFILES` - shown in Stack and the footer            |
| Tech logos | `lib/techIcons.tsx`         | `TECH_ICONS` - one map feeding project covers and Stack      |
| Rail       | `components/Sidebar.tsx`    | Social links, availability status                           |
| Status bar | `components/StatusBar.tsx`  | Locale, timezone                                            |
| Metadata   | `app/layout.tsx`            | Title, description, keywords, OG and Twitter metadata       |

Navbar links and scroll-spy both derive from `SECTIONS`, so reordering there updates the navigation - but the section order in `app/page.tsx` has to be changed to match.

Adding a skill to `groups` in `Stack.tsx` without a matching `TECH_ICONS` entry renders the label with no logo - add the icon too. The same map supplies project cover art, so a project's stack entry only appears on its cover if it has an icon. Only import icons that exist in the installed `react-icons` version (`SiPlaywright` and `SiLightgbm`, for instance, do not).

### Styling

- **Theme (colours, spacing, structure):** `app/globals.css` - `:root` variables
- **Tailwind theme:** `tailwind.config.ts`

The palette is defined once as HSL channels. A light theme is a swap of the `:root` block, not a rebuild.

---

## Build and deploy

```bash
npm run build
npm start
```

Deployed on **Vercel**.

> **Note:** `npm run lint` is currently broken - Next 16 removed `next lint`, and `.eslintrc.json` is in the ESLint 8 format that ESLint 9 no longer reads. Type checking still runs as part of `next build`. Migrating to `eslint.config.mjs` flat config would restore it.

---

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Type:** Space Grotesk, Inter, JetBrains Mono (`next/font`)
- **Icons:** React Icons
- **Deployment:** Vercel

---

## CV

Replace `public/Roger_Demello_CV.pdf` with your PDF, keeping the filename so the hero link and any external references keep working.

---

## License

MIT - feel free to use this as a template for your own portfolio.

---

## Connect

- **GitHub:** [github.com/rogerdemello](https://github.com/rogerdemello)
- **LinkedIn:** [linkedin.com/in/rogerdemello](https://linkedin.com/in/rogerdemello)
- **LeetCode:** [leetcode.com/u/rogerdemello](https://leetcode.com/u/rogerdemello/)
- **CodeChef:** [codechef.com/users/droger289](https://www.codechef.com/users/droger289/)
- **Codeforces:** [codeforces.com/profile/rogerdemello289](https://codeforces.com/profile/rogerdemello289)
- **Email:** rogerdemello289@gmail.com

*Built by Roger Richard Demello*
