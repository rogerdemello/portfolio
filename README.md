# Roger Richard Demello - Portfolio

A modern, interactive portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring a dark theme with coral/orange primary and golden accent, smooth animations, particle background, and micro-interactions.

**Live:** [rogerdemello.vercel.app](https://rogerdemello.vercel.app/)

---

## Features

- **Dark theme** - Dark base with coral primary, cyan secondary, and golden accent (semantic CSS variables)
- **Responsive** - Mobile-first with slide-out nav and touch-friendly targets
- **Performance** - Next.js (App Router), code splitting, optimized assets
- **Animations** - Fade-in on scroll, typing role cycle in hero, smooth scroll
- **Particle background** - Canvas particles with cursor avoidance and connecting lines
- **Micro-interactions** - Ripples, magnetic hover, 3D tilt on cards, glow pulses
- **Resume** - Hero dropdown: View or Download PDF
- **Back to top** - Sticky button with smooth scroll
- **SEO** - Meta tags, Open Graph, Twitter cards, semantic HTML
- **Sections** - Hero, About, Skills, Projects, Experience (work + education + certs + competitive coding), GitHub Stats, Contact

---

## Getting started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**

### Install and run

```bash
git clone https://github.com/rogerdemello/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If the port is in use, Next.js will use 3001 (or the next available port).

### Lock / “another instance” error

If you see *Unable to acquire lock at .next/dev/lock*:

1. Stop any other `npm run dev` (close the terminal or stop the process).
2. Or delete the lock and try again: remove `.next/dev/lock` (or the whole `.next` folder for a clean rebuild).

---

## Customization

### Content

| Section        | File                | What to edit                                      |
|----------------|---------------------|---------------------------------------------------|
| Hero           | `components/Hero.tsx` | Name, roles (typing), tagline, social links, resume CTA |
| About          | `components/About.tsx` | Bio, highlights, core competencies                |
| Skills         | `components/Skills.tsx` | Categories, technologies, “Also proficient in”   |
| Projects       | `components/Projects.tsx` | Projects list, links, tech stack, demo/code       |
| Experience     | `components/Experience.tsx` | Work, education, certifications, competitive coding |
| GitHub Stats   | `components/GitHubStats.tsx` | GitHub username                                  |
| Contact        | `components/Contact.tsx` | Copy, form behavior (see below)                   |
| Footer         | `components/Footer.tsx` | Links, copyright                                  |

### Styling

- **Theme (colors, spacing):** `app/globals.css` - `:root` variables (primary, accent, secondary, backgrounds, borders).
- **Tailwind theme:** `tailwind.config.ts` - extended colors and utilities.
- **Micro-interactions:** `app/micro-interactions.css`.

---

## Contact form

The form uses **Web3Forms**. To enable it:

1. Get an access key from [web3forms.com](https://web3forms.com).
2. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
   ```
3. See `.env.example` in the repo for a template.

---

## Build and deploy

```bash
npm run build
npm start
```

Deployed on **Vercel**; also works on Netlify, AWS, or any Node-friendly host.

---

## Tech stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Animations:** Custom CSS + Canvas (particles)
- **Forms:** Web3Forms
- **Deployment:** Vercel

---

## Resume

Replace `public/Resume.pdf` with your PDF. The hero “Resume” button offers **View** (new tab) and **Download**.

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
