# Portfolio Export

This folder contains a printable export of the portfolio content as HTML: `portfolio-full.html`.

How to produce a single PDF containing everything:

Option A — Quick (recommended):
1. Open `export/portfolio-full.html` in your browser (`http://localhost:3000/export/portfolio-full.html` when running Next.js dev server or open file directly).
2. File → Print → Save as PDF (choose A4 or Letter). This will generate a PDF including the embedded resume if the browser supports it.

Option B — More control (merge resume manually):
1. Print `portfolio-full.html` to PDF (as above) → produces `portfolio-content.pdf`.
2. Use a PDF tool to merge `public/Resume.pdf` + `portfolio-content.pdf` (e.g., Adobe Acrobat, `pdfunite`, or `pdftk`).

Example merge command (Linux / WSL, requires `poppler-utils`):

```bash
pdfunite public/Resume.pdf export/portfolio-content.pdf export/portfolio-combined.pdf
```

Notes:
- If you want me to automatically generate a merged PDF in this repo, I can add a small Node script that uses `puppeteer` or `playwright` to render HTML to PDF and then merge with the resume, but that requires installing dependencies and running locally.
- If you prefer, tell me the exact order you want (Resume first, then site content), and I can prepare a script or a one-click set of instructions.
