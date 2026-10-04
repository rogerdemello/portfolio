# Roger Richard Demello - Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Written like a letter, not a dashboard: plain paper, black ink, first-person prose, a blue-ballpoint margin note or two, and real screenshots of the projects. No gradients, no glass, no glow.

**Live:** [rogerdemello.tech](https://rogerdemello.tech/)

---

## Features

- **Recruiter-first order** - who I am and when I can start, then skills, experience, work, about, contact. The CV link stays in the sticky header.
- **Real work, shown** - every project is one compact row: picture, one-line result, stack, links. The four "On my CV" projects show first; the rest unfold under "View more projects" (`components/MoreProjects.tsx`), and links into the fold, like the hero screenshots, open it. "How it works" opens the large screenshot (or hand-drawn sketch) plus problem and approach. Screenshots live in `public/projects/`; projects with no presentable UI get a sketch (`components/Sketches.tsx`).
- **Work in the first ten seconds** - the hero pins three real app screenshots beside the intro; each jumps to its write-up (`components/HeroShots.tsx`)
- **Skills with logos** - every tool carries its brand logo (`lib/tech-icons.ts`) and glows like highlighter on hover (`components/Tool.tsx`)
- **Expandable experience** - each role shows three lines; click to read the full account and the tools used (`components/ExperienceList.tsx`)
- **Hand-made details** - margin notes in handwriting with pen-drawn arrows (`components/Doodles.tsx`), highlighter on the one sentence that matters, a live "it's 10:07 am in India" clock
- **No client JS for content** - the page is static server components; only the copy-email button and the clock hydrate. The "Also built" rows use native `<details>`.
- **Dynamic social cards** - OG and Twitter images generated at build (`app/opengraph-image.tsx`, `app/twitter-image.tsx`, shared `lib/og-image.tsx`)
- **SEO** - metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **Accessibility** - skip-to-content link, semantic landmarks, keyboard-operable disclosure rows, alt text on every screenshot, `aria-label`s on the sketches, reduced-motion support
- **Scroll-spy nav** - the header underlines the section you are reading (`components/NavLinks.tsx`)
- **Prints properly** - print styles drop the chrome and spell out every link, so a printed copy is still usable
- **Structured data** - `Person` JSON-LD in `app/layout.tsx`
- **CV** - buttons download the PDF (opens in a new tab on iOS Safari, which ignores `download`)

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

Structured content lives in **`lib/content.ts`**: profile, experience, projects, skills, education. The first-person paragraphs in the hero and section intros are written directly in the components (`components/Hero.tsx`, `Work.tsx`, `Skills.tsx`, `Contact.tsx`) because their voice matters more than their structure.

| Export         | Feeds                                                              |
|----------------|--------------------------------------------------------------------|
| `profile`      | Name, contact details, CV path                                      |
| `experience`   | Roles - period, three-line `summary`, full `details`, `tools`       |
| `projects`     | Problem, approach, result, stack, links, categories, image/sketch   |
| `skillGroups`  | The Skills list (logos come from `lib/tech-icons.ts`)               |
| `education`, `credentials` | Education                                               |
| `story`, `principles` | About                                                        |
| `nav`          | Header links (each `id` must match a section `id`)                  |

**Projects.** `onCv: true` adds the "On my CV" tag; order in the array is the order on the page. Give a project either `image` (a 16:10 WebP in `public/projects/`) plus `imageAlt`, or a `sketch` id. To add a new sketch, add a component in `components/Sketches.tsx` using the `Box`, `Arr` and `PenNote` helpers (lines are generated from a seeded jitter, so server and client render identically) and reference it in `Work.tsx`.

**Screenshots.** Capture at 1440x900 with a 2x device scale, crop to 16:10 and save as WebP (~1600px wide) plus a 640px `-sm.webp` variant of the same name (thumbnails and the hero use it; see `thumb()` in `lib/content.ts`). Real product shots beat mockups; if an app has no meaningful UI, sketch it.

### Styling

- **Colours and shared classes:** `app/globals.css` - `--paper`, `--ink`, `--muted`, `--pen` (ballpoint blue, used only for notes and small accents) and `--mark` (highlighter), plus `.page`, `.measure`, `.link`, `.btn`, `.marker`, `.note`, `.meta`, `.figure`
- **Type:** Newsreader (headings and prose), Hanken Grotesk (small UI text), Caveat (margin notes and sketch labels only) - loaded in `app/layout.tsx`
- **Tailwind theme:** `tailwind.config.ts`

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
- **Type:** Newsreader, Hanken Grotesk, Caveat (`next/font`)
- **Icons:** React Icons
- **Deployment:** Vercel

---

## CV

Replace `public/Roger_Demello_CV.pdf` with your PDF, keeping the filename so the CV buttons and any external references keep working.

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
