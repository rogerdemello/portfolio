# Roger Richard Demello - Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Editorial ivory theme - serif display type, monospace metadata, and a fixed sidebar with scroll-spy navigation.

**Live:** [rogerdemello.tech](https://rogerdemello.tech/)

---

## Features

- **Editorial theme** - warm ivory paper, ink foreground, persimmon primary (semantic CSS variables)
- **Fixed sidebar** - desktop rail with scroll-spy; slide-out drawer on mobile
- **Sections** - Hero, Projects, Stack, Experience, Writing, Contact, About
- **Projects** - each written as Problem / Approach / Result / Stack rather than a card grid
- **Dynamic social cards** - OG and Twitter images generated at the edge (`app/opengraph-image.tsx`, `app/twitter-image.tsx`)
- **SEO** - metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **Accessibility** - skip-to-content link, semantic landmarks, labelled controls
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

### Lock / "another instance" error

If you see *Unable to acquire lock at .next/dev/lock*:

1. Stop any other `npm run dev`.
2. Or delete `.next/dev/lock` (or the whole `.next` folder for a clean rebuild).

### Low-memory build machines

`next build` fans out one worker per core. On a machine with limited RAM this can fail with `VirtualAlloc failed` or `build worker exited with code: 3221226505`. Cap the workers for a local build:

```js
// next.config.mjs
const nextConfig = { experimental: { cpus: 2 }, /* ... */ };
```

Not needed on Vercel - leave it out of committed config.

---

## Customization

### Content

| Section    | File                       | What to edit                                          |
|------------|----------------------------|-------------------------------------------------------|
| Hero       | `components/Hero.tsx`      | Name, tagline, "Currently Building" list, CV link      |
| Projects   | `components/Projects.tsx`  | `projects` array - problem, approach, result, stack, links |
| Stack      | `components/Stack.tsx`     | `groups` array plus the `ICONS` map for per-skill logos |
| Experience | `components/Experience.tsx`| `timeline`, selected highlights, education, credentials |
| Writing    | `components/Journal.tsx`   | `entries` array                                        |
| Contact    | `components/Contact.tsx`   | Copy and form behavior (see below)                     |
| About      | `components/About.tsx`     | `notes` field-note rows and `principles`               |
| Sidebar    | `components/Sidebar.tsx`   | Nav items, social links, availability status           |
| Footer     | `components/Footer.tsx`    | Name, location, back-to-top                            |
| Metadata   | `app/layout.tsx`           | Title, description, keywords, OG and Twitter metadata  |

Adding a skill to `groups` in `Stack.tsx` without a matching `ICONS` entry renders the label with no logo - add the icon too. Only import icons that exist in the installed `react-icons` version.

### Styling

- **Theme (colors, spacing):** `app/globals.css` - `:root` variables
- **Tailwind theme:** `tailwind.config.ts`
- **Micro-interactions:** `app/micro-interactions.css`

---

## Contact form

The form uses **Web3Forms**:

1. Get an access key from [web3forms.com](https://web3forms.com).
2. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
   ```
3. See `.env.example` for a template.

---

## Build and deploy

```bash
npm run build
npm start
```

Deployed on **Vercel**.

---

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Type:** Instrument Serif, Inter, JetBrains Mono (`next/font`)
- **Icons:** React Icons
- **Forms:** Web3Forms
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
- **Email:** rogerdemello289@gmail.com

*Built by Roger Richard Demello*
