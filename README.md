# Nouhaila Chkhonty — Portfolio

Personal portfolio of Nouhaila Chkhonty, Full Stack Software Engineer, available in English, French and Arabic.

## Project structure

- `dist/` — the site itself: plain HTML, CSS and JavaScript, served as-is (no build step)
  - `index.html` — page markup; translatable text is tagged with `data-i18n`
  - `styles.css` — design tokens, layout, animations and right-to-left rules for Arabic
  - `script.js` — mobile menu, scroll progress, active nav link, reveal animations
  - `i18n.js` — French and Arabic translations and the language switcher
  - `images/` — project screenshots
- `scripts/screenshots.mjs` — refreshes the project screenshots from the live sites

## Run locally

Requires Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

The site opens at http://localhost:5173 and reloads when you edit files in `dist/`.

## Update project screenshots

```bash
pnpm screenshots
```

Uses your installed Chrome (or Edge) to capture each project site into `dist/images/`. Set `CHROME_PATH` if your browser is installed somewhere unusual.

## Deployment

Every push to `main` copies `dist/` to the `gh-pages` branch via `.github/workflows/deploy.yml`, and GitHub Pages serves that branch. The live site is at https://chkhonty9.github.io/portfolio/.

## Languages

English text lives in `dist/index.html`. French and Arabic are in `dist/i18n.js`, keyed by each element's `data-i18n` attribute. Visitors can switch language from the header, and `?lang=fr` or `?lang=ar` links straight to a language.
